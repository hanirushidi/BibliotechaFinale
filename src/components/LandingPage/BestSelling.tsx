import { Card } from "@/components/ui/card";
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
      Id: 3,
      title: "The Outsider",
      author: "Stephen King",
      narrator: "Will Patton",
      image: theOutsider,
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
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center max-w-screen-xl gap-10 py-16 font-Aptos">
          <div className="flex flex-row justify-between w-full ">
            <h1 className="text-2xl font-semibold md:text-4xl">
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
                    <div className="flex flex-col items-center gap-2 p-2 rounded-md">
                      <Card className="rounded-md max-w-[120px] max-h-[120px]  md:max-w-[190px] md:max-h-[190px]">
                        <img
                          src={book.image}
                          alt=""
                          className="object-cover rounded-md "
                        />
                      </Card>
                      <p className="text-xs font-semibold text-center font-Aptos md:text-xl ">
                        {book.title}
                      </p>
                      <p className="text-xs font-light text-center font-Aptos md:text-sm">
                        by: {book.author}
                      </p>
                      <p className="text-xs font-light text-center font-Aptos md:text-sm">
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
              <CarouselContent className="flex flex-row max-w-2xl w-fit">
                {audioBooks.map((book) => (
                  <CarouselItem
                    key={book.Id}
                    className="w-full md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="flex w-48">
                      <Card className="flex w-48 ">
                        <img
                          className="h-full rounded-lg object-full"
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
