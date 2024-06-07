import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Bibliotecha has the best collection of audiobooks. It's my go-to app.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "The variety of genres available is amazing. Bibliotecha never disappoints.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I love how easy it is to find new books. Bibliotecha is fantastic!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The personalized recommendations are spot on. I’ve discovered so many great books.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Bibliotecha has transformed my reading experience. The audiobooks are top-notch.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "A treasure trove of books and audiobooks. I’m hooked on Bibliotecha!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Julia",
    username: "@julia",
    body: "The best app for book lovers. Bibliotecha has everything I need.",
    img: "https://avatar.vercel.sh/julia",
  },
  {
    name: "Jake",
    username: "@jake",
    body: "Seamless and user-friendly. A must-have app for every reader.",
    img: "https://avatar.vercel.sh/jake",
  },
  {
    name: "Jasmine",
    username: "@jasmine",
    body: "The interactive discussion panels are fantastic. I love engaging with other readers.",
    img: "https://avatar.vercel.sh/jasmine",
  },
  {
    name: "Jordan",
    username: "@jordan",
    body: "Offline access is a game-changer. I can read and listen anywhere!",
    img: "https://avatar.vercel.sh/jordan",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <>
      <div className="mt-20 font-Aptos gap-16 item-center justify-center flex-row">
        <div className="flex flex-col justify-center items-center ">
          <h1 className=" text-black text-5xl font-semibold leading-snug">
            Our Users Say It Best!
          </h1>
          <p className="text-black text-base font-light max-w-3xl text-center">
            Discover why our users rave about Bibliotecha. Enjoy a vast library
            of books and audiobooks, personalized recommendations, and a
            seamless user experience. Join us and start your literary adventure
            today!
          </p>
        </div>
        <div className="pb-28 relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background py-20">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </>
  );
};

export default MarqueeDemo;
