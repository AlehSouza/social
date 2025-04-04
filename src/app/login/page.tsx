"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import api from "@/services";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();

  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = async () => {
    if (isLogin) {
      login();
      return;
    }
    register();
  };

  const login = async () => {
    try {
      const { data } = await api.post("/session", {
        email_address: email,
        password: password,
      });

      toast("Bem-vindo à plataforma!", {
        description: "Login realizado com sucesso.",
        action: {
          label: "Fechar",
          onClick: () => console.log("Toast fechado"),
        },
        position: "top-right",
      });

      if (data.token) {
        localStorage.setItem("userToken", data.token);
        router.push("/feed");
      }
      return data;
    } catch (err) {
      console.error(err);
      toast("Erro ao fazer login", {
        description: "E-mail ou senha incorretos. Tente novamente.",
        position: "top-right",
      });
    }
  };

  const register = async () => {
    try {
      if (password === confirmPassword) {
        const body = {
          user: {
            email_address: email,
            password: password,
            password_confirmation: confirmPassword,
          },
        };
        await api.post("/signup", body);

        toast("Registrado com sucesso!", {
          description: "Agora faça login para acessar sua conta.",
          position: "top-right",
        })
        
      }
    } catch (err) {
      console.error(err);
    }
    setIsLogin(true);
  };

  return (
    <div className="flex bg-[url('https://images2.alphacoders.com/689/thumb-1920-689011.jpg')] bg-cover flex-col min-h-screen h-full- w-full items-center justify-center px-4">
      <div className="flex bg-[rgba(0,0,0,0.5)] flex-col min-h-screen h-full- w-full items-center justify-center px-4">
        {isLogin ? (
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Underground</CardTitle>
              <CardDescription>
                Login in your account in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                className="cursor-pointer"
                variant="outline"
                onClick={() => setIsLogin(!isLogin)}
              >
                Register
              </Button>
              <Button
                className="cursor-pointer"
                type="submit"
                onClick={() => handleSubmit()}
              >
                Login
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Underground</CardTitle>
              <CardDescription>Register Now</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Confirmar Senha</Label>
                    <Input
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                className="cursor-pointer"
                variant="outline"
                onClick={() => setIsLogin(!isLogin)}
              >
                Login
              </Button>
              <Button
                className="cursor-pointer"
                type="submit"
                onClick={() => handleSubmit()}
              >
                Register
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
