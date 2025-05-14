
import { useEffect, useRef, useState } from 'react';

export function FuturisticAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];
  const particleCount = 100;
  const [typedCode, setTypedCode] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    alpha: number;
  }

  const codeSnippet = [
    `import { useState, useEffect } from 'react';`,
    ``,
    `function ByteRender() {`,
    `  const [isLoading, setIsLoading] = useState(true);`,
    `  const [data, setData] = useState([]);`,
    ``,
    `  useEffect(() => {`,
    `    async function fetchData() {`,
    `      const response = await api.get('/future');`,
    `      setData(response.data);`,
    `      setIsLoading(false);`,
    `    }`,
    `    `,
    `    fetchData();`,
    `  }, []);`,
    ``,
    `  return (`,
    `    <div className="future-code">`,
    `      {isLoading ? (`,
    `        <Loader />`,
    `      ) : (`,
    `        <FuturisticUI data={data} />`,
    `      )}`,
    `    </div>`,
    `  );`,
    `}`
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = 500;
      canvas.height = 500;
    };

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: getRandomColor(),
          alpha: Math.random() * 0.8 + 0.2
        });
      }
    };
    
    const getRandomColor = () => {
      const colors = ['#3b82f6', '#4f46e5', '#8b5cf6', '#0284c7', '#0ea5e9'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) {
          p.speedX *= -1;
        }
        
        if (p.y < 0 || p.y > canvas.height) {
          p.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      
      // Connect nearby particles with lines
      connectParticles();
      
      // Request next frame
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= codeSnippet.length) return;
    
    const line = codeSnippet[currentLineIndex];
    
    const typingInterval = setInterval(() => {
      if (currentCharIndex < line.length) {
        setTypedCode(prev => prev + line[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      } else {
        setTypedCode(prev => prev + '\n');
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [currentLineIndex, currentCharIndex, codeSnippet]);

  // Syntax highlighting function
  const renderHighlightedCode = () => {
    if (!typedCode) return null;
    
    return typedCode.split('\n').map((line, index) => {
      // Replace keywords with colored spans
      let highlightedLine = line
        .replace(/import|from|function|const|let|var|return|async|await/g, 
          match => `<span class="text-[#ff7733]">${match}</span>`)
        .replace(/useState|useEffect/g, 
          match => `<span class="text-[#36f9f6]">${match}</span>`)
        .replace(/("|'|`).*?("|'|`)/g, 
          match => `<span class="text-[#c2d94c]">${match}</span>`)
        .replace(/\{|\}|\(|\)|\[|\]/g, 
          match => `<span class="text-[#e7c547]">${match}</span>`)
        .replace(/<.*?>/g, 
          match => `<span class="text-[#39bae6]">${match}</span>`);
      
      return (
        <div key={index} className="whitespace-pre">
          <span className="text-[#4d5566] mr-2">{(index + 1).toString().padStart(2, '0')}</span>
          <span dangerouslySetInnerHTML={{ __html: highlightedLine || '&nbsp;' }} />
        </div>
      );
    });
  };

  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
      {/* Code Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="bg-[#0d1017] backdrop-blur-md rounded-3xl border border-[#1f2430]/40 p-8 w-full h-full max-w-md overflow-hidden">
          <div className="flex items-center mb-4">
            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-left font-mono text-xs md:text-sm text-[#cbccc6] overflow-hidden h-[calc(100%-2rem)] overflow-y-auto">
            <code className="language-javascript">
              {renderHighlightedCode()}
              <span className="animate-pulse">|</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      ></canvas>
    </div>
  );
}
