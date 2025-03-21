import { useGetBibleVersions } from "@/api/useGetBibleVersions";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResponseVersionsTypes } from "@/types/responses";
import { VersionsType } from "@/types/versions";
import Autoplay from "embla-carousel-autoplay";

interface VersionsCarouselProps {
  setVersion: (origin: string) => void;
  selectedVersion: string;
}

const VersionsCarousel = (props: VersionsCarouselProps) => {
  const { selectedVersion, setVersion } = props;
  const { loading, result }: ResponseVersionsTypes = useGetBibleVersions();
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="w-full max-w-[60vw] lg:max-w-lg z-0 flex"
    >
      <CarouselPrevious className="cursor-pointer" />
      <CarouselContent>
        {loading === false &&
          result.map((version: VersionsType) => (
            <CarouselItem
              key={version.name}
              className="md:basis-1xl lg:basis-60"
            >
              <div className="p-1">
                <Button
                  onClick={() => setVersion(version.version)}
                  className={
                    selectedVersion === version.version
                      ? `bg-[#D5CFE1] border-1 border-black p-2 rounded-xl text-black cursor-pointer w-full text-center`
                      : `bg-[#731963] border-1 border-[#D5CFE1] p-2 rounded-xl text-white cursor-pointer w-full text-center`
                  }
                >
                  <strong className="text-sm font-medium">
                    {version.name}
                  </strong>
                </Button>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext className="cursor-pointer" />
    </Carousel>
  );
};

export default VersionsCarousel;
