import { useEffect, useState } from 'react';

export default function SpotlightLayout({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // Aplicamos a classe 'bg-grid-pattern' aqui no fundo principal
    <div className="relative min-h-screen bg-grid-pattern text-white overflow-hidden">
      {/* Camada da luz do mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
        }}
      />

      {/* Conteúdo do seu site */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}