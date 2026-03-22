import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    hue: number;
}

const CustomCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);
        let mouseX = -100;
        let mouseY = -100;
        let prevX = -100;
        let prevY = -100;
        let rafId = 0;
        const particles: Particle[] = [];
        const maxParticles = 80;

        const onResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (touch) {
                mouseX = touch.clientX;
                mouseY = touch.clientY;
            }
        };

        const onTouchEnd = () => {
            mouseX = -200;
            mouseY = -200;
        };

        const onMouseLeave = () => {
            mouseX = -200;
            mouseY = -200;
        };

        const spawnParticles = (x: number, y: number, speed: number) => {
            const count = Math.min(Math.floor(speed / 8) + 1, 4);
            for (let i = 0; i < count; i++) {
                if (particles.length >= maxParticles) {
                    // Recycle oldest
                    const oldest = particles.shift()!;
                    oldest.x = x + (Math.random() - 0.5) * 8;
                    oldest.y = y + (Math.random() - 0.5) * 8;
                    oldest.vx = (Math.random() - 0.5) * 1.2;
                    oldest.vy = (Math.random() - 0.5) * 1.2 - 0.6;
                    oldest.life = 1;
                    oldest.maxLife = 0.6 + Math.random() * 0.5;
                    oldest.size = 2 + Math.random() * 3.5;
                    oldest.hue = 255 + Math.random() * 30;
                    particles.push(oldest);
                } else {
                    particles.push({
                        x: x + (Math.random() - 0.5) * 8,
                        y: y + (Math.random() - 0.5) * 8,
                        vx: (Math.random() - 0.5) * 1.2,
                        vy: (Math.random() - 0.5) * 1.2 - 0.6,
                        life: 1,
                        maxLife: 0.6 + Math.random() * 0.5,
                        size: 2 + Math.random() * 3.5,
                        hue: 255 + Math.random() * 30,
                    });
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // Calculate speed
            const dx = mouseX - prevX;
            const dy = mouseY - prevY;
            const speed = Math.sqrt(dx * dx + dy * dy);

            // Spawn particles when moving
            if (speed > 3 && mouseX > 0) {
                spawnParticles(mouseX, mouseY, speed);
            }

            prevX = mouseX;
            prevY = mouseY;

            // Draw glow at cursor position
            if (mouseX > 0) {
                const glowGradient = ctx.createRadialGradient(
                    mouseX, mouseY, 0,
                    mouseX, mouseY, 28 + speed * 0.3
                );
                glowGradient.addColorStop(0, "rgba(108, 92, 231, 0.15)");
                glowGradient.addColorStop(0.4, "rgba(108, 92, 231, 0.06)");
                glowGradient.addColorStop(1, "rgba(108, 92, 231, 0)");
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(mouseX, mouseY, 28 + speed * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Update & draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.life -= 0.018;
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.01; // tiny gravity
                p.vx *= 0.99;
                p.size *= 0.985;

                if (p.life <= 0 || p.size < 0.3) {
                    particles.splice(i, 1);
                    continue;
                }

                const alpha = p.life / p.maxLife;

                // Soft glowing particle
                const grad = ctx.createRadialGradient(
                    p.x, p.y, 0,
                    p.x, p.y, p.size * 2.5
                );
                grad.addColorStop(0, `hsla(${p.hue}, 70%, 72%, ${alpha * 0.6})`);
                grad.addColorStop(0.5, `hsla(${p.hue}, 70%, 65%, ${alpha * 0.2})`);
                grad.addColorStop(1, `hsla(${p.hue}, 70%, 60%, 0)`);

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
                ctx.fill();

                // Bright core
                ctx.fillStyle = `hsla(${p.hue}, 80%, 85%, ${alpha * 0.8})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
                ctx.fill();
            }

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", onResize);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("touchmove", onTouchMove, { passive: true });
        document.addEventListener("touchend", onTouchEnd);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", onResize);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("touchend", onTouchEnd);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 99999,
            }}
        />
    );
};

export default CustomCursor;
