import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Page = () => {
  return (
    <div className="h-5/6 w-screen flex justify-center items-center">
      <Carousel className="bg-white h-56 w-56">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/1.jpg"
              alt="Mubeen"
              className="h-56 w-56 object-cover"
              height={400}
              width={400}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/2.jpg"
              alt="Mateen"
              className="h-56 w-56 object-cover"
              height={400}
              width={400}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/3.jpg"
              alt="Tehseen"
              className="h-56 w-56 object-cover"
              height={400}
              width={400}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Page;
