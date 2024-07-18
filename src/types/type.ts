// types.ts
export interface Book {
  id: string;
  title: string;
  author: string;
  // Add other fields as necessary
}

export interface BookState {
  books: Book[];
  count: number;
}
