import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeArchitecture = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const scene = new THREE.Scene();
    
    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 15;

    // 3. Renderer setup with anti-aliasing and transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 4. Create Node Architecture (Particles and Connections)
    const particleCount = 110;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    // Initialize random positions and velocities across a wider space for full-screen view
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 28;
      const y = (Math.random() - 0.5) * 28;
      const z = (Math.random() - 0.5) * 20;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.012,
        y: (Math.random() - 0.5) * 0.012,
        z: (Math.random() - 0.5) * 0.012,
      });
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle texture (creating a soft circular shape programmatically)
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(43, 43, 43, 0.9)"); // Charcoal Accent (10%)
    gradient.addColorStop(0.3, "rgba(43, 43, 43, 0.5)");
    gradient.addColorStop(0.7, "rgba(179, 179, 179, 0.2)"); // Silver Secondary (30%)
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
    const texture = new THREE.CanvasTexture(canvas);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.5,
      map: texture,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(geometry, pointsMaterial);
    scene.add(pointCloud);

    // Line connections setup
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2b2b2b,
      transparent: true,
      opacity: 0.06, // extremely subtle lines for unobtrusive backdrop
    });

    let lineSegments = new THREE.LineSegments(new THREE.BufferGeometry(), lineMaterial);
    scene.add(lineSegments);

    // 5. Interactive controls - Track globally on window for fixed background
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onMouseMove = (event) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // 6. Animation Loop
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp mouse coordinates for smooth rotation transitions
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const posAttr = geometry.getAttribute("position");
      const currentPos = posAttr.array;

      // Update positions
      for (let i = 0; i < particleCount; i++) {
        currentPos[i * 3] += velocities[i].x;
        currentPos[i * 3 + 1] += velocities[i].y;
        currentPos[i * 3 + 2] += velocities[i].z;

        // Boundary reflection
        if (Math.abs(currentPos[i * 3]) > 14) velocities[i].x *= -1;
        if (Math.abs(currentPos[i * 3 + 1]) > 14) velocities[i].y *= -1;
        if (Math.abs(currentPos[i * 3 + 2]) > 10) velocities[i].z *= -1;
      }

      posAttr.needsUpdate = true;

      // Update lines between nearby nodes
      const linePositions = [];
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = currentPos[i * 3] - currentPos[j * 3];
          const dy = currentPos[i * 3 + 1] - currentPos[j * 3 + 1];
          const dz = currentPos[i * 3 + 2] - currentPos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 4.5) {
            linePositions.push(
              currentPos[i * 3], currentPos[i * 3 + 1], currentPos[i * 3 + 2],
              currentPos[j * 3], currentPos[j * 3 + 1], currentPos[j * 3 + 2]
            );
          }
        }
      }

      lineSegments.geometry.dispose();
      lineSegments.geometry = new THREE.BufferGeometry();
      lineSegments.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      // Rotate network based on automatic speed + manual cursor drift
      pointCloud.rotation.y += 0.001 + mouse.x * 0.003;
      pointCloud.rotation.x += 0.0006 + mouse.y * 0.003;
      lineSegments.rotation.y = pointCloud.rotation.y;
      lineSegments.rotation.x = pointCloud.rotation.x;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Handle resize events
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Clean up resources on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      lineSegments.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="three-canvas-container"
      style={{ 
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100vw", 
        height: "100vh", 
        zIndex: -1,
        pointerEvents: "none",
        background: "transparent"
      }}
    />
  );
};
