'use client';

import { useEffect, useMemo, useState } from 'react';

interface Particle {
    id: number;
    x: number; // 0–1
    y: number; // 0–1
    size: number;
    depth: number; // parallax factor
}

export default function BackgroundParticles() {
    const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
    const [time, setTime] = useState(0);
    const [isPressed, setIsPressed] = useState(false);

    // Generate a stable set of particles
    const particles: Particle[] = useMemo(
        () =>
            Array.from({ length: 30 }, (_, i) => ({
                id: i,
                x: Math.random(),
                y: Math.random(),
                size: 3 + Math.random() * 4,
                depth: 0.5 + Math.random(), // 0.5–1.5
            })),
        [],
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            setMouse({ x, y });
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Simple falling animation using requestAnimationFrame
    useEffect(() => {
        let frameId: number;
        let last = performance.now();

        const loop = (now: number) => {
            const delta = (now - last) / 1000; // seconds
            last = now;
            // Base time speed; slightly faster when mouse is pressed (long click/hold)
            const speedMultiplier = isPressed ? 9 : 4;
            setTime((t) => t + delta * speedMultiplier);
            frameId = requestAnimationFrame(loop);
        };

        frameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 -z-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                    <radialGradient id="particleGradient">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="50%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                {particles.map((p) => {
                    const offsetX = (mouse.x - 0.5) * 6 * p.depth;
                    const offsetY = (mouse.y - 0.5) * 6 * p.depth;

                    // Make particles fall; wrap around when they go past the bottom
                    const fallSpeed = 5 * p.depth; // units per second
                    const yFalling = (p.y * 100 + time * fallSpeed) % 110; // slight overshoot for smoother wrap

                    return (
                        <circle
                            key={p.id}
                            cx={p.x * 100 + offsetX}
                            cy={yFalling + offsetY}
                            r={p.size / 3}
                            fill="url(#particleGradient)"
                            fillOpacity="0.6"
                        />
                    );
                })}
            </svg>
        </div>
    );
}


