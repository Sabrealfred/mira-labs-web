"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DotMatrixLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function DotMatrixLogo({ size = "md", className = "" }: DotMatrixLogoProps) {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const sizeConfig = {
    sm: { rows: 6, cols: 8, dotSize: 4, gap: 6 },
    md: { rows: 8, cols: 12, dotSize: 6, gap: 8 },
    lg: { rows: 10, cols: 15, dotSize: 8, gap: 10 },
  };

  const config = sizeConfig[size];
  const totalDots = config.rows * config.cols;

  // Create the "M" pattern (simplified version)
  const isPartOfM = (index: number): boolean => {
    const row = Math.floor(index / config.cols);
    const col = index % config.cols;

    // Left vertical line
    if (col === 1 && row >= 1) return true;
    // Right vertical line
    if (col === config.cols - 2 && row >= 1) return true;
    // Left diagonal
    if (row >= 1 && row <= 3 && col === row + 1) return true;
    // Right diagonal
    if (row >= 1 && row <= 3 && col === config.cols - row - 2) return true;

    return false;
  };

  const getDistance = (index: number, hoveredIndex: number | null): number => {
    if (hoveredIndex === null) return 0;
    const row1 = Math.floor(index / config.cols);
    const col1 = index % config.cols;
    const row2 = Math.floor(hoveredIndex / config.cols);
    const col2 = hoveredIndex % config.cols;
    return Math.sqrt(Math.pow(row1 - row2, 2) + Math.pow(col1 - col2, 2));
  };

  return (
    <div className={`inline-flex flex-col gap-0 ${className}`}>
      {Array.from({ length: config.rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-0"
          style={{ gap: `${config.gap}px` }}
        >
          {Array.from({ length: config.cols }).map((_, colIndex) => {
            const index = rowIndex * config.cols + colIndex;
            const isM = isPartOfM(index);
            const distance = getDistance(index, hoveredDot);
            const intensity = hoveredDot !== null ? Math.max(0, 1 - distance / 5) : 0;

            return (
              <motion.div
                key={index}
                className="rounded-full"
                style={{
                  width: config.dotSize,
                  height: config.dotSize,
                  backgroundColor: isM ? "var(--dot-primary)" : "var(--dot-secondary)",
                }}
                initial={{ scale: 0.8, opacity: 0.4 }}
                animate={{
                  scale: isM ? 1 : 0.6 + intensity * 0.4,
                  opacity: isM ? 1 : 0.3 + intensity * 0.5,
                  backgroundColor: intensity > 0.5
                    ? "var(--dot-primary)"
                    : isM
                    ? "var(--dot-primary)"
                    : "var(--dot-secondary)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                onHoverStart={() => setHoveredDot(index)}
                onHoverEnd={() => setHoveredDot(null)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function AnimatedDotPattern({ className = "" }: { className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dots = Array.from({ length: 100 });

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        {dots.map((_, i) => {
          const x = (i % 10) * 10;
          const y = Math.floor(i / 10) * 10;
          const distance = Math.sqrt(
            Math.pow(mousePosition.x / windowSize.width * 100 - x, 2) +
            Math.pow(mousePosition.y / windowSize.height * 100 - y, 2)
          );
          const size = Math.max(2, 8 - distance / 5);
          const opacity = Math.max(0.1, 0.6 - distance / 50);

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gray-400"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                width: size,
                height: size,
                opacity: opacity,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
