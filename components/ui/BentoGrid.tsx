"use client"

import { cn } from "@/utils/cn";
import { GlobeDemo } from "./GridGlobe";
import StacksCard from "./StacksCard";
import CodingHours from "./CodingHours";
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/EmblaCarousel"
import { images } from "@/data";
import Autoplay from "embla-carousel-autoplay"
import { DotButton, useDotButton } from './EmblaDotButton'
import { type CarouselApi } from "@/components/ui/EmblaCarousel"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img, 
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(api)

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/0.1 z-[20]",
        className
      )}
      style={{
        background: "rgb(4, 7, 29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}
    >
      <div className={`${id === 6} && 'flex-justify-center h-full' `}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center w-full h-full'}
            />
          )}
        </div>

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        {id === 1 && (
          <img className="mx-auto relative overflow-hidden py-3 px-4 h-96" src="/umich.png"/>
        )}

        {id === 2 && (
          // TODO: Add a pinpoint to current location
          <GlobeDemo />
        )}

        {id === 3 && (
          <Carousel 
          className="flex items-center justify-center px-3 lg:-my-16 w-full"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="flex items-center justify-center lg:pt-10 h-full">
                  <img src={image.img} className="rounded-lg" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-5 lg:left-[-1.75rem] text-white text-4xl cursor-pointer" />
          <CarouselNext className="absolute right-5 lg:right-[-1.75rem] text-white text-4xl cursor-pointer" />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`
                  w-3 h-3 rounded-full
                  transition-all duration-300
                  ${
                    index === selectedIndex
                      ? 'bg-white scale-125'
                      : 'bg-gray-400 hover:bg-gray-300'
                  }
                `}
              />
            ))}
          </div>
        </Carousel>
          // Old Social Div
          // <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          //   <div className="flex flex-col gap-3 lg:gap-8">
          //     {['GitHub'].map
          //     ((item) => (
          //       <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
          //         {item}
          //       </span>
                
          //     ))}
          //     <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
          //     <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
          //   </div>

          //   <div className="flex flex-col gap-3 lg:gap-8">
          //     <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
          //     {['LinkedIn'].map
          //     ((item) => (
          //       <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
          //         {item}
          //       </span>
                
          //     ))}
          //     <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
          //   </div>
          // </div>
        )}

        {id === 4 && (
          <StacksCard />
        )}

        {id === 6 && (
          <CodingHours />
        )}
      </div>
    </div>
    </div>
  );
};
