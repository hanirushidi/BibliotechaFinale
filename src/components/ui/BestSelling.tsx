import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import hungerGames from "@/assets/books/hungerGames.jpg";
import itEndsWithUs from "@/assets/books/itEndsWithUs.jpg";
import theOutsider from "@/assets/books/theOutside.jpg";
import fourthWing from "@/assets/books/fourthWing.jpg";
import braidingSweetgrass from "@/assets/books/braidingSweetgrass.jpg";

//

const BestSelling = () => {
  const audioBooks = [
    {
      Id: 1,
      title: "Hunger Games",
      author: "Suzanne Collins",
      narrator: "Santiono Fontana",
      image: hungerGames,
    },
    {
      Id: 2,
      title: "It Ends With Us",
      author: "Colleen Hoover",
      narrator: "Olivia Song",
      image: itEndsWithUs,
    },
    {
      Id: 3,
      title: "The Outsider",
      author: "Stephen King",
      narrator: "Will Patton",
      image: theOutsider,
    },
    {
      Id: 4,
      title: "Fourth Wing",
      author: "Rebecca Yarros",
      narrator: "Rebecca Soler",
      image: fourthWing,
    },
    {
      Id: 5,
      title: "Braiding Sweetgrass",
      author: "Robin Wall Kimmerer",
      narrator: "Hani Rushidi",
      image: braidingSweetgrass,
    },
  ];
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col py-16 items-center gap-10 justify-center max-w-screen-xl font-Aptos">
          <div className="flex w-full flex-row justify-between ">
            <h1 className="font-semibold md:text-4xl text-2xl">
              Our Best Selling AudioBooks
            </h1>
          </div>

          <div className="flex flex-row justify-center w-full max-w-screen-xl ">
            <Carousel
              opts={{
                align: "start",
              }}
              className=" md:w-[800px] xl:w-[1114px] max-w-5xl"
            >
              <CarouselContent>
                {Array.from(audioBooks).map((book) => (
                  <CarouselItem
                    key={book.Id}
                    className="basis-1/2 md:basis-1/4 lg:basis-1/5"
                  >
                    <div className="p-2 rounded-md flex-col flex items-center gap-2">
                      <Card className="rounded-md max-w-[120px] max-h-[120px]  md:max-w-[190px] md:max-h-[190px]">
                        <img
                          src={book.image}
                          alt=""
                          className="  object-cover rounded-md"
                        />
                      </Card>
                      <p className="font-Aptos md:text-xl font-semibold text-center text-xs  ">
                        {book.title}
                      </p>
                      <p className="font-Aptos md:text-sm text-xs font-light text-center">
                        by: {book.author}
                      </p>
                      <p className="font-Aptos md:text-sm text-xs font-light text-center">
                        Narrated: {book.narrator}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </div>
          {/* <div className="flex flex-row justify-center">
          <div className="flex flex-row gap-5 w-[1000px] ">
            <Carousel className="w-full ">
              <CarouselContent className=" flex flex-row  w-fit max-w-2xl">
                {audioBooks.map((book) => (
                  <CarouselItem
                    key={book.Id}
                    className="w-full md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="flex w-48">
                      <Card className="flex w-48 ">
                        <img
                          className=" rounded-lg object-full h-full"
                          src={book.image}
                          alt=""
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default BestSelling;
