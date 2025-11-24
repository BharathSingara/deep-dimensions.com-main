"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    perspective?: number;
    maxRotation?: number;
    scale?: number;
}

export default function TiltCard({
    children,
    className = "",
    perspective = 1000,
    maxRotation = 15,
    scale = 1.05,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 40 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 40 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [maxRotation, -maxRotation]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-maxRotation, maxRotation]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective,
                transformStyle: "preserve-3d",
            }}
            animate={{
                scale: isHovered ? scale : 1,
            }}
            className={className}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
