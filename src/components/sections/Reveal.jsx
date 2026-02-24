import { motion } from "framer-motion";

/**
 * Komponen Reveal untuk memberikan efek elegant fade-in pada section
 * @param {Object} props
 * @param {'up' | 'down' | 'left' | 'right' | 'fade'} props.direction - Arah munculnya elemen
 * @param {number} props.delay - Jeda sebelum animasi dimulai
 * @param {number} props.duration - Lama animasi berjalan
 */
export default function Reveal({ 
  children, 
  direction = "up", 
  delay = 0.2, 
  duration = 1 
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    fade: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        filter: "blur(10px)",
        x: directions[direction].x, 
        y: directions[direction].y 
      }}
      whileInView={{ 
        opacity: 1, 
        filter: "blur(0px)",
        blur: 0, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.25, 0.1, 0.25, 1.0] // Smooth standard easing
      }}
    >
      {children}
    </motion.div>
  );
}