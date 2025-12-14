import React, { useEffect, useRef } from 'react';

const Wave3D = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Mouse state
        let mouseX = 0;
        let mouseY = 0;

        // Interaction state
        let isHovering = false;
        let intensity = 0; // 0 = calm, 1 = agitated

        const particles = [];
        const GAP = 45;
        const ROWS = 60;
        const COLS = 60;

        const colors = [
            '#F472B6', // Pink
            '#22D3EE', // Cyan
            '#818CF8', // Indigo
            '#A78BFA', // Purple
            '#34D399', // Emerald
        ];

        const initParticles = () => {
            particles.length = 0;
            for (let ix = 0; ix < COLS; ix++) {
                for (let iy = 0; iy < ROWS; iy++) {
                    particles.push({
                        ix, iy,
                        x: (ix - COLS / 2) * GAP,
                        z: (iy - ROWS / 2) * GAP,
                        color: colors[Math.floor(Math.random() * colors.length)]
                    });
                }
            }
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        const handleMouseMove = (e) => {
            isHovering = true;
            // Normalize mouse position (-1 to 1)
            const targetX = (e.clientX / width) * 2 - 1;
            const targetY = (e.clientY / height) * 2 - 1;

            // Smoothly update mouse position
            mouseX += (targetX - mouseX) * 0.1;
            mouseY += (targetY - mouseY) * 0.1;
        };

        const handleMouseLeave = () => {
            isHovering = false;
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, width, height);
            const t = time * 0.001;

            // Smoothly transition intensity based on hover state
            // If hovering, go to 1. If not, go to 0.
            const targetIntensity = isHovering ? 1 : 0;
            intensity += (targetIntensity - intensity) * 0.05;

            ctx.save();
            ctx.translate(width / 2, height / 2 + 50);

            particles.forEach(p => {
                // Determine distance from mouse for interaction
                const mouseWorldX = mouseX * 2000;
                const mouseWorldZ = mouseY * 1000;

                const dx = p.x - mouseWorldX;
                const dz = p.z - mouseWorldZ;
                const dist = Math.sqrt(dx * dx + dz * dz);

                // --- Wave Logic ---

                // 1. Base Calm Wave (Always active)
                // Gentle, slow undulation
                let y = Math.sin(p.x * 0.005 + p.z * 0.005 + t * 0.5) * 20;

                // 2. Fluid Interaction (Only when intensity > 0)
                if (intensity > 0.01) {
                    const interactionRadius = 800;
                    const influence = Math.max(0, interactionRadius - dist) / interactionRadius; // 0 to 1

                    // Complex ripple added on top based on intensity and mouse proximity
                    const ripple = Math.sin(dist * 0.015 - t * 8) * 60 * influence;
                    const lift = -100 * influence;

                    // Apply based on intensity
                    y += (ripple + lift) * intensity;
                }

                y -= 80; // Base height offset

                // --- 3D Projection ---
                // Camera tilt changes slightly with intensity/mouse
                const basePitch = 0.5;
                const activePitch = 0.5 + mouseY * 0.2;
                const pitch = basePitch + (activePitch - basePitch) * intensity;

                const yRot = y * Math.cos(pitch) - p.z * Math.sin(pitch);
                const zRot = p.z * Math.cos(pitch) + y * Math.sin(pitch);

                const fov = 600;
                const cameraZ = 1200;
                const scale = fov / (fov + zRot + cameraZ);

                const x2d = p.x * scale;
                const y2d = yRot * scale;

                // Size grows with intensity interaction
                const baseSize = scale * 3;
                const activeSize = scale * (3 + (Math.max(0, 1000 - dist) / 1000) * 4);
                const size = baseSize + (activeSize - baseSize) * intensity;

                const alpha = Math.min(1, Math.max(0, (scale - 0.1) * 1.5));

                if (scale > 0 && alpha > 0.01) {
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = alpha;
                    ctx.fill();
                }
            });

            ctx.restore();
            animationFrameId = requestAnimationFrame(draw);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        // Detect leaving the window anywhere
        document.body.addEventListener('mouseleave', handleMouseLeave);

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default Wave3D;
