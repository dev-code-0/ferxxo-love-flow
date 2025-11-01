import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseCarouselOptions {
  totalItems: number;
  autoPlayInterval?: number;
  swipeThreshold?: number;
}

export const useCarousel = ({
  totalItems,
  autoPlayInterval = 4000,
  swipeThreshold = 50
}: UseCarouselOptions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalItems);
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, totalItems, autoPlayInterval]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  }, []);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalItems);
    pauseAutoPlay();
  }, [totalItems, pauseAutoPlay]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems);
    pauseAutoPlay();
  }, [totalItems, pauseAutoPlay]);

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
      pauseAutoPlay();
    }
  }, [totalItems, pauseAutoPlay]);

  // Touch gesture handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAutoPlay();
  }, [pauseAutoPlay]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const deltaX = touchStartX.current - touchEndX.current;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  }, [swipeThreshold, goToNext, goToPrevious]);

  // Mouse drag handlers for desktop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    pauseAutoPlay();
  }, [pauseAutoPlay]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button pressed
      touchEndX.current = e.clientX;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    const deltaX = touchStartX.current - touchEndX.current;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  }, [swipeThreshold, goToNext, goToPrevious]);

  return {
    currentIndex,
    isAutoPlaying,
    goToNext,
    goToPrevious,
    goToIndex,
    pauseAutoPlay,
    resumeAutoPlay: () => setIsAutoPlaying(true),
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
    mouseHandlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
    }
  };
};