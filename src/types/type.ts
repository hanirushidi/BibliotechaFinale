// types.ts
export interface Book {
  id: string;
  title: string;
  author: string;
  publishingHouse: string;
  genre: string;
  publishedDate: number;
  language: string;
  pageCount: number;
  bookCover: string;
  // Add other fields as necessary
}

export interface BookState {
  books: Book[];
  count: number;
}
