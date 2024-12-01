import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const counterRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    let counter = { value: 0 };
    const counterElement = counterRef.current;
    const overlayElement = overlayRef.current;

    // Counter animation
    gsap.to(counter, {
      value: 100,
      duration: 3.5,
      ease: "power2.inOut",
      onUpdate: () => {
        counterElement.textContent = Math.floor(counter.value);
      },
      onComplete: () => {
        // Fade out the preloader
        gsap.to(overlayElement, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            overlayElement.style.display = "none";
          }
        });

        // Fade in the main content
        gsap.from("#root > *", {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    });
  }, []);

  return (
    <div 
      ref={overlayRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <span 
        ref={counterRef}
        style={{
          fontSize: '6rem',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        0
      </span>
    </div>
  );
};

export default Preloader;
