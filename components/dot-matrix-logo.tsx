"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DotMatrixLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function DotMatrixLogo({ size = "md", className = "" }: DotMatrixLogoProps) {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  // Increased grid size for more detailed dragonfly
  const sizeConfig = {
    sm: { rows: 12, cols: 16, dotSize: 3, gap: 4 },
    md: { rows: 16, cols: 20, dotSize: 4, gap: 5 },
    lg: { rows: 24, cols: 30, dotSize: 5, gap: 6 },
  };

  const config = sizeConfig[size];
  const totalDots = config.rows * config.cols;

  // Much more detailed dragonfly pattern with many more dots
  const isPartOfDragonfly = (index: number): boolean => {
    const row = Math.floor(index / config.cols);
    const col = index % config.cols;
    const centerCol = Math.floor(config.cols / 2);

    // HEAD (rounded, 3 rows)
    if (row === 0) {
      if (col === centerCol || col === centerCol - 1 || col === centerCol + 1) return true;
    }
    if (row === 1) {
      if (col >= centerCol - 2 && col <= centerCol + 2) return true;
    }
    if (row === 2) {
      if (col >= centerCol - 1 && col <= centerCol + 1) return true;
    }

    // THORAX (thick body section)
    if (row >= 3 && row <= 6) {
      if (col === centerCol) return true;
      if (col === centerCol - 1 || col === centerCol + 1) return true;
    }

    // ABDOMEN (long thin body)
    if (row >= 7 && row <= config.rows - 2) {
      if (col === centerCol) return true;
    }

    // TAIL (tapered end)
    if (row === config.rows - 1) {
      if (col === centerCol) return true;
    }

    // UPPER WINGS (large, detailed)
    const upperWingStartRow = 4;
    // Right upper wing
    if (row === upperWingStartRow) {
      if (col >= centerCol + 2 && col <= centerCol + 7) return true;
    }
    if (row === upperWingStartRow + 1) {
      if (col >= centerCol + 2 && col <= centerCol + 9) return true;
    }
    if (row === upperWingStartRow + 2) {
      if (col >= centerCol + 2 && col <= centerCol + 8) return true;
    }
    if (row === upperWingStartRow + 3) {
      if (col >= centerCol + 2 && col <= centerCol + 6) return true;
    }
    if (row === upperWingStartRow + 4) {
      if (col >= centerCol + 2 && col <= centerCol + 4) return true;
    }

    // Left upper wing (mirror)
    if (row === upperWingStartRow) {
      if (col >= centerCol - 7 && col <= centerCol - 2) return true;
    }
    if (row === upperWingStartRow + 1) {
      if (col >= centerCol - 9 && col <= centerCol - 2) return true;
    }
    if (row === upperWingStartRow + 2) {
      if (col >= centerCol - 8 && col <= centerCol - 2) return true;
    }
    if (row === upperWingStartRow + 3) {
      if (col >= centerCol - 6 && col <= centerCol - 2) return true;
    }
    if (row === upperWingStartRow + 4) {
      if (col >= centerCol - 4 && col <= centerCol - 2) return true;
    }

    // LOWER WINGS (smaller, below upper wings)
    const lowerWingStartRow = upperWingStartRow + 2;
    // Right lower wing
    if (row === lowerWingStartRow) {
      if (col >= centerCol + 2 && col <= centerCol + 5) return true;
    }
    if (row === lowerWingStartRow + 1) {
      if (col >= centerCol + 2 && col <= centerCol + 6) return true;
    }
    if (row === lowerWingStartRow + 2) {
      if (col >= centerCol + 2 && col <= centerCol + 5) return true;
    }
    if (row === lowerWingStartRow + 3) {
      if (col >= centerCol + 2 && col <= centerCol + 4) return true;
    }

    // Left lower wing (mirror)
    if (row === lowerWingStartRow) {
      if (col >= centerCol - 5 && col <= centerCol - 2) return true;
    }
    if (row === lowerWingStartRow + 1) {
      if (col >= centerCol - 6 && col <= centerCol - 2) return true;
    }
    if (row === lowerWingStartRow + 2) {
      if (col >= centerCol - 5 && col <= centerCol - 2) return true;
    }
    if (row === lowerWingStartRow + 3) {
      if (col >= centerCol - 4 && col <= centerCol - 2) return true;
    }

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
            const isDragonfly = isPartOfDragonfly(index);
            const distance = getDistance(index, hoveredDot);
            const intensity = hoveredDot !== null ? Math.max(0, 1 - distance / 5) : 0;

            return (
              <motion.div
                key={index}
                className="rounded-full"
                style={{
                  width: config.dotSize,
                  height: config.dotSize,
                  backgroundColor: isDragonfly ? "var(--dot-primary)" : "var(--dot-secondary)",
                }}
                initial={{ scale: 0.8, opacity: 0.4 }}
                animate={{
                  scale: isDragonfly ? 1 : 0.6 + intensity * 0.4,
                  opacity: isDragonfly ? 1 : 0.3 + intensity * 0.5,
                  backgroundColor: intensity > 0.5
                    ? "var(--dot-primary)"
                    : isDragonfly
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

  // MUCH DENSER grid - covering entire screen area
  // Calculate based on actual window size for full coverage
  const dotSpacing = 20; // pixels between dots
  const gridCols = Math.ceil(windowSize.width / dotSpacing);
  const gridRows = Math.ceil(windowSize.height / dotSpacing);
  const dots = Array.from({ length: gridCols * gridRows });

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        {dots.map((_, i) => {
          const col = i % gridCols;
          const row = Math.floor(i / gridCols);

          // Position dots evenly across the entire space
          const x = (col * dotSpacing);
          const y = (row * dotSpacing);

          // Calculate distance from mouse in pixels
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - x, 2) + Math.pow(mousePosition.y - y, 2)
          );

          // MUCH MORE DYNAMIC - larger range, more variation
          // Size changes dramatically: from 2px to 12px
          const baseSize = 2.5;
          const maxSize = 12;
          const size = distance < 200
            ? Math.max(baseSize, maxSize - (distance / 20))
            : baseSize;

          // Opacity much more dramatic
          const opacity = distance < 100
            ? 1 // Full opacity when very close
            : distance < 200
            ? 0.8 - (distance - 100) / 200
            : distance < 350
            ? 0.4 - (distance - 200) / 400
            : 0.1;

          // MUCH MORE CONTRAST - extremos de negro a blanco
          let color = "#e0e0e0"; // default very light gray

          if (distance < 60) {
            // VERY close: Pure BLACK
            color = "#000000";
          } else if (distance < 120) {
            // Close: Very dark gray
            color = "#2a2a2a";
          } else if (distance < 180) {
            // Medium-close: Dark gray
            color = "#555555";
          } else if (distance < 250) {
            // Medium: Medium gray
            color = "#888888";
          } else if (distance < 350) {
            // Far: Light gray
            color = "#b8b8b8";
          } else {
            // Very far: Almost white
            color = "#e8e8e8";
          }

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
              animate={{
                width: size,
                height: size,
                opacity: opacity,
                backgroundColor: color,
                scale: distance < 100 ? [1, 1.2, 1] : 1, // Pulse effect when close
              }}
              transition={{
                duration: 0.15, // Much faster response
                ease: "easeOut",
                scale: {
                  duration: 0.3,
                  repeat: distance < 100 ? Infinity : 0,
                  repeatType: "reverse",
                },
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
