import { Button } from "@/components/ui/button";
import TextReveal from "../components/magicui/TextReveal";
import { Link, Outlet } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <span className="font-black">
          <h1 className="text-9xl">404!</h1>
        </span>
        <TextReveal text="This page was not found." />
        <Button className="mt-5" asChild>
          <Link to="/">Go back home</Link>
        </Button>
      </div>
      <Outlet />
    </>
  );
};

export default NotFound;
