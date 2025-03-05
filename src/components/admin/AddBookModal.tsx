import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddNewBookForm from "./AddNewBookForm";

const AddBookModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-Aptos">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <Button onClick={() => setIsOpen(true)} className="bg-[#00633F]">
            Add new book
          </Button>
        </DialogTrigger>
        <DialogContent className=" flex flex-col gap-5 ">
          <DialogHeader className="flex flex-col gap-5">
            <DialogTitle className="text-2xl ">Add a book</DialogTitle>
          </DialogHeader>
          <AddNewBookForm setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddBookModal;
