import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

import { setDoc, doc, collection } from "firebase/firestore/lite";
import { db } from "@/firebaseConfig"; // Ensure your db import is correct

import { fetchBooks } from "@/store/booksSlice";

const genresOptions = [
  { value: "Biography", label: "Biography" },
  { value: "Business", label: "Business" },
  { value: "Children's", label: "Children's" },
  { value: "Classics", label: "Classics" },
  { value: "Comics", label: "Comics" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "Fiction", label: "Fiction" },
  { value: "History", label: "History" },
  { value: "Horror", label: "Horror" },
  { value: "Music", label: "Music" },
  { value: "Mystery", label: "Mystery" },
  { value: "Nonfiction", label: "Nonfiction" },
  { value: "Poetry", label: "Poetry" },
  { value: "Psychology", label: "Psychology" },
  { value: "Romance", label: "Romance" },
  { value: "Science", label: "Science" },
  { value: "Thriller", label: "Thriller" },
];

const genres = z.enum([
  "Biography",
  "Business",
  "Children's",
  "Classics",
  "Comics",
  "Fantasy",
  "Fiction",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Nonfiction",
  "Poetry",
  "Psychology",
  "Romance",
  "Science",
  "Thriller",
]);

const formSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  publishingHouse: z.string().min(1),
  genre: genres.optional(),
  publishedDate: z.coerce.number().min(1),
  language: z.string().min(1),
  pageCount: z.coerce.number().min(1),
  bookCover: z.string().min(1),
});

const AddNewBookForm = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const dispatch: AppDispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      publishingHouse: "",
      genre: "Comics",
      publishedDate: 0,
      language: "",
      pageCount: 0,
      bookCover: "",
    },
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const bookRef = doc(collection(db, "books"));
      await setDoc(bookRef, {
        title: values.title,
        author: values.author,
        publishingHouse: values.publishingHouse,
        genre: values.genre,
        publishedDate: values.publishedDate,
        pageCount: values.pageCount,
        language: values.language,
        bookCover: values.bookCover,
      });
      toast.success("Book added successfully!");
      dispatch(fetchBooks());
    } catch (error: any) {
      toast.error("Error adding book: " + error.message);
    }
    setIsOpen(!open);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4 max-w-2xl "
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Anna Karenina" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row gap-5 w-auto ">
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Leo Tolstoy" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="publishingHouse"
              render={({ field }) => (
                <FormItem className="w-full">
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
              )}
            />
            <FormField
              control={form.control}
              name="publishedDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Publication Date</FormLabel>
                  <FormControl>
                    <Input placeholder="1878" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="pageCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Page Count</FormLabel>
                <FormControl>
                  <Input placeholder="864" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <FormControl>
                  <Input placeholder="Russian" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="flex">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genresOptions.map((genre) => (
                      <SelectItem key={genre.value} value={genre.value}>
                        {genre.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bookCover"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Book Cover</FormLabel>
                <FormControl className="hover:cursor-pointer min-h-20">
                  <Input
                    className="hover:cursor-pointer"
                    type="text"
                    placeholder="Book cover URL"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-14 bg-[#00633F]">
            Add to shelf
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddNewBookForm;
