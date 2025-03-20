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
import { BooksType } from "@/types/books";
import { ResponseType } from "@/types/response";
import { useGetBibleBooks } from "@/api/useGetBibleBooks";
import Autoplay from "embla-carousel-autoplay";

const HeroSearch = () => {
  const { loading, result }: ResponseType = useGetBibleBooks();

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
            {loading === false &&
              result.map((book: BooksType) => (
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
