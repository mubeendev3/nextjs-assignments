import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Page = () => {
  return (
    <div className="h-5/6 w-screen flex justify-center items-center">
      <Carousel className="bg-white h-56 w-56">
        <CarouselContent>
          <CarouselItem>
            <img src="/1.jpg" alt="Mubeen" className="h-56 w-56 object-cover" />
          </CarouselItem>
          <CarouselItem>
            <img src="/2.jpg" alt="Mateen" className="h-56 w-56 object-cover" />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/3.jpg"
              alt="Tehseen"
              className="h-56 w-56 object-cover"
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
