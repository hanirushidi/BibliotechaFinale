// bookSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore/lite";
import { db } from "@/firebaseConfig"; // Ensure your db import is correct
import { Book, BookState } from "@/types/type";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const snapshot = await getDocs(collection(db, "books"));
  const books = snapshot.docs.map((doc) => {
    const data = doc.data();
    // Ensure the data has all necessary fields
    return {
      id: doc.id,
      title: data.title ?? "Unknown Title", // Default value if field is missing
      author: data.author ?? "Unknown Author", // Default value if field is missing
      publishingHouse: data.publishingHouse ?? "Unknown Publishing House", // Default value if field is missing
      genre: data.genre ?? "Unknown Genre", // Default value if field is missing
      publishedDate: data.publishedDate ?? 0, // Default value if field is missing
      language: data.language ?? "Unknown Language", // Default value if field is missing
      pageCount: data.pageCount ?? 0, // Default value if field is missing
      bookCover: data.bookCover ?? "Unknown Cover", // Default value if field is missing
      // Add other fields as necessary with default values
    } as Book;
  });
  return { books, count: books.length };
});

const initialState: BookState = {
  books: [],
  count: 0,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload.books;
      state.count = action.payload.count;
    });
  },
});

export default bookSlice.reducer;
