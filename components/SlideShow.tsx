'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: { img: any }[];
  alt: string;
  priority?: boolean;
  animation?: string;
  height?: string;
  width?: string;
};

const SlideShow = ({
  images,
  alt,
  animation,
  priority = false,
  height = 'auto',
  width = 'auto',
}: Props) => {
  const [isMounted, setisMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

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
            <div key={i} className={`w-[90%]`}>
              <div className="flex flex-col items-center">
                <Image
                  src={image.img}
                  alt={alt}
                  priority={priority}
                  loading="eager"
                  className={`inline-block object-cover ${
                    isAuto ? animation : ''
                  }`}
                />
              </div>
            </div>
          ),
      )}

      <ChevronRight onClick={() => stopAutoSlide('forwards')} />
    </div>
  );
};

export default SlideShow;
