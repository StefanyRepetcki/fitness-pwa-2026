import { useState, useEffect } from 'react';

export const useScrollHide = (threshold: number = 50) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Só esconde se estiver scrollando para baixo e passou do threshold
          if (currentScrollY > threshold && currentScrollY > lastScrollY) {
            setIsScrollingDown(true);
          } else if (currentScrollY < lastScrollY || currentScrollY <= threshold) {
            setIsScrollingDown(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, threshold]);

  return isScrollingDown;
};


