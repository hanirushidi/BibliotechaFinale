import { useState } from "react";
import { login } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const APY_KEY = import.meta.env.VITE_BIBLIOTECHA_FIREBASE_APY_KEY;
const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APY_KEY}`;

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let url = LOGIN_URL;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("res", res);
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        console.log("data", data);
        dispatch(login(data.idToken));
        navigate("/admin");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={submitHandler}>
        <Card className="w-full max-w-md lg:max-w-xl flex flex-col gap-3  ">
          <CardHeader className="space-y-3 flex gap-2 p-4">
            <CardTitle className="text-3xl">Login</CardTitle>
            <CardDescription>
              Enter your email and password to log in to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            {!isLoading && (
              <Button className="w-full" type="submit">
                Sign in
              </Button>
            )}
            {isLoading && <p>Loading...</p>}
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default AuthForm;
