'use client';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: { img: any }[];
  alt: string;
  height: number;
  width: number;
  animation?: string;
};

const SlideShow = ({ images, alt, height, width, animation }: Props) => {
  const [isMounted, setisMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  const intervalRef: MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    );
  };

  /*   const startAutoSlide = () => {
    setIsAuto(true);
  }; */

  const stopAutoSlide = (move: 'forwards' | 'backwards') => {
    if (move === 'backwards') {
      prevSlide();
    }

    if (move === 'forwards') {
      nextSlide();
    }
    setIsAuto(false);
  };

  useEffect(() => {
    setisMounted(true);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const slideHandler = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    if (isAuto) {
      intervalId = setInterval(slideHandler, 3500); // Start automatic sliding
    }

    return () => {
      // Clear the interval when the component unmounts or isAuto becomes false
      clearInterval(intervalId as any);
    };
  }, [isAuto, images.length]);

  if (!isMounted) return null;

  return (
    <div className="flex w-full select-none items-center justify-between gap-4 ease-in-out">
      <ChevronLeft onClick={() => stopAutoSlide('backwards')} />

      {images.map(
        (image, i) =>
          i === currentSlide && (
            <div key={i}>
              <Image
                width={width}
                height={height}
                src={image.img}
                alt={alt}
                loading='eager'
                className={`object-cover ${isAuto ? animation : ''}`}
              />
            </div>
          ),
      )}

      <ChevronRight onClick={() => stopAutoSlide('forwards')} />
    </div>
  );
};

export default SlideShow;
