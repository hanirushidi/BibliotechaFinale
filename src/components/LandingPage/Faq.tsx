import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-Aptos gap-16 pt-10 bg-stone-200">
        <h1 className=" text-black text-5xl font-semibold leading-snug mt-10">
          Ask Bibliotecha
        </h1>
        <div className="flex flex-row max-w-2xl gap-14">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">What’s Bibliotecha?</h3>
            <p className="text-base">
              Bibliotecha is an app that offers a vast collection of books and
              audiobooks across various genres, providing a seamless reading and
              listening experience.
            </p>
          </div>
          <div>
            <Button> Docs</Button>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-2xl md:w-[40%] pb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I sign up?</AccordionTrigger>
            <AccordionContent>
              Click "Sign Up" and follow the prompts.{" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What genres are available?</AccordionTrigger>
            <AccordionContent>
              Wide range, including fiction, non-fiction, mystery, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is Bibliotecha?</AccordionTrigger>
            <AccordionContent>
              An app for books and audiobooks.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
