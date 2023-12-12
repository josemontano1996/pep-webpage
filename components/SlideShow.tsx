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
    setIsAuto(false);
    if (move === 'backwards') {
      prevSlide();
    }

    if (move === 'forwards') {
      nextSlide();
    }
  };

  useEffect(() => {
    if (isAuto) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3500); // Change the duration as per your requirement
    } else {
      // Check if intervalRef.current is not null before calling clearInterval
      intervalRef.current !== null && clearInterval(intervalRef.current);
    }
    return () => {
      // Check if intervalRef.current is not null before calling clearInterval
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAuto]);

  return (
    <div className="flex w-full select-none items-center justify-between ease-in-out">
      <ChevronLeft onClick={() => stopAutoSlide('backwards')} />
      <div className="w-[85%]">
        {images.map(
          (image, i) =>
            i === currentSlide && (
              <Image
                width={width}
                height={height}
                key={i}
                src={image.img}
                alt={alt}
                className={`${animation} h-[${height}px] w-[${width}px] object-cover transition`}
              />
            ),
        )}
      </div>
      <ChevronRight onClick={() => stopAutoSlide('forwards')} />
    </div>
  );
};

export default SlideShow;
