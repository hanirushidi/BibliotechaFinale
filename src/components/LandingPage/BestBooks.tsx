import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
const BestBooks = () => {
  const books = [
    {
      title: "The Hunger Games (Hunger Games, Book One)",
      author: "Suzanne Collins",
      cover: "https://ibb.co/rFK0X6S",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center mt-10 font-Aptos h-screen">
        <div className="gap-3 flex flex-col justify-center items-center text-center ">
          <h1 className="font-aptos font-black text-5xl text-[#00653C] max-w-2xl">
            Read and Listen to Something Extraordinary
          </h1>
          <p className="font-normal font-aptos max-w-3xl">
            Enjoy performances of bestselling titles and new releases from your
            favorite authors and genres. Experience it all anytime with
            Bibliotecha. Here are just a few of our top picks.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-2xl"
          >
            <CarouselContent className="flex">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className=" flex md:basis-1/3 items-center justify-center"
                >
                  <div className="p-1 w-52 ">
                    <Card className="">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold ">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                    <div className="flex items-center">Hani</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default BestBooks;
