import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const genres = z.enum([
  "Art",
  "Biography",
  "Business",
  "Children's",
  "Classics",
  "Comics",
  "Cookbooks",
  "Ebooks",
  "Fantasy",
  "Fiction",
  "Graphic Novels",
  "Historical Fiction",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Nonfiction",
  "Poetry",
  "Psychology",
  "Romance",
  "Science",
  "Science Fiction",
  "Thriller",
  "Travel",
]);
const formSchema = z.object({
  title: z.string(),
  author: z.string(),
  publishingHouse: z.string(),
  genre: genres,
  publishedDate: z.number(),
  language: z.string(),
  pageCount: z.number(),
  bookCover: z.string(),
});

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { SelectItem } from "./ui/select";
const AddBookModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      publishingHouse: "",
      genre: "History",
      publishedDate: 0,
      language: "",
      pageCount: 0,
      bookCover: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <>
      <div className="font-Aptos">
        <Dialog>
          <DialogTrigger>
            <Button className="bg-[#00633F]">Add new book</Button>
          </DialogTrigger>
          <DialogContent className=" flex flex-col gap-5 ">
            <DialogHeader className="flex flex-col gap-5">
              <DialogTitle className="text-2xl mt-[-10px]">
                Add a book
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-4 max-w-2xl "
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => {
                    return (
                      <FormItem className="">
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Anna Karenina"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="flex flex-row gap-5 ">
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel>Author</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Leo Tolstoy"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="publishingHouse"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel>Publishing House</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="The Russian Messenger"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="publishedDate"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel>Publication Date</FormLabel>
                          <FormControl>
                            <Input placeholder="1878" type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="flex flex-row gap-5 w-fit">
                  <FormField
                    control={form.control}
                    name="pageCount"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel>Page Count</FormLabel>
                          <FormControl>
                            <Input placeholder="864" type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel>Language</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Russian"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="genre"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex gap-5">
                        <FormLabel>Genre</FormLabel>
                        <Select>
                          <FormControl className="">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a genre" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="p-10 overflow-visible max-h-10">
                            {genres.options.map((genre) => (
                              <SelectItem value={genre}>{genre}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    );
                  }}
                />

                <Button type="submit" className="mt-14">
                  Add to shelf
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AddBookModal;
