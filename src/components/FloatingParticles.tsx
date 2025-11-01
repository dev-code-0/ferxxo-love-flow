import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ 
  count = 8, 
  className = "" 
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const initialParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.5 + 0.3,
        direction: Math.random() * Math.PI * 2,
      });
    }
    
    setParticles(initialParticles);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + Math.cos(particle.direction) * particle.speed + 100) % 100,
          y: (particle.y + Math.sin(particle.direction) * particle.speed + 100) % 100,
          direction: particle.direction + (Math.random() - 0.5) * 0.1,
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary/30 to-secondary/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(var(--primary-rgb), 0.3)`,
            animation: `particle-float ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;