"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useBooks } from "@/hooks/useBooks";
import SkeletonSchema from "./skeletonSchema";

const HeroSearch = () => {
  const { isLoading, isError, books } = useBooks();

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full ">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Libro, versículo..."
          className="w-[25vw] bg-[#D5CFE1] text-black"
        />
        <Button type="submit" className="cursor-pointer bg-[#731963]">
          <Search strokeWidth="1" size={25} color="white" />
        </Button>
      </div>
      <strong className="text-[#731963] font-medium text-right text-sm">
        Busqueda en base a la versión popular. (RV60)
      </strong>
      <strong className="text-[#731963] font-medium text-right text-sm">
        Facilite su busqueda deslizando.
      </strong>
      <div className="flex gap-2">
        <Carousel
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full max-w-[25vw] lg:max-w-sm z-0"
        >
          <CarouselPrevious className="cursor-pointer" />
          <CarouselContent>
            {isLoading && isError === false && (
              <>
                <CarouselItem className="flex md:hidden gap-6">
                  <SkeletonSchema
                    grid={1}
                    className="min-w-[24vw] min-h-[6.5vh] flex rounded-xl "
                  />
                </CarouselItem>
                <CarouselItem className="hidden md:flex lg:hidden gap-6">
                  <SkeletonSchema
                    grid={1}
                    className="min-w-[14.5em] p-2 min-h-[2.5em] flex rounded-xl "
                  />
                </CarouselItem>
                <CarouselItem className="hidden lg:flex gap-6">
                  <SkeletonSchema
                    grid={3}
                    className="min-w-[6.5em] min-h-[2em] flex rounded-xl "
                  />
                </CarouselItem>
              </>
            )}
            {isLoading === false &&
              books.map((book) => (
                <CarouselItem
                  key={book.abrev}
                  className="md:basis-1xl lg:basis-1/3"
                >
                  <div className="p-1">
                    <Button className="bg-[#731963] border-1 border-[#D5CFE1] p-2 rounded-xl text-white cursor-pointer w-full text-center">
                      <strong className="text-sm font-medium text-white">
                        {book.names[0]}
                      </strong>
                    </Button>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSearch;
