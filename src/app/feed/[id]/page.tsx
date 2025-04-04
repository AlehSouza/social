"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Post as PostType } from "./../../../components/Post/types";
import Post from "@/components/Post/post";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function PostPage({ params }: { params: { postId: string } }) {
  console.log(params);

  const posts = [
    {
      id: "a3f6e2b8-1c14-4e21-8b8b-920f31e2b0c1",
      content:
        "Acabei de terminar a leitura de 'Clean Code'. Recomendo demais pra quem quer melhorar como dev!",
      attachment: "",
      author: {
        id: 1,
        name: "John Doe",
        profile_picture:
          "https://i.pinimg.com/736x/b3/05/ef/b305ef727bd01d6fa73de59ddcb43efd.jpg",
      },
      comments: [
        {
          id: "84e6f882-8e34-4a78-a75c-ecb4ff5fcd12",
          content:
            "Também li recentemente! A parte sobre nomes de variáveis mudou meu jeito de programar.",
          author: {
            id: 2,
            name: "Jane Doe",
            profile_picture:
              "https://i.pinimg.com/736x/96/83/aa/9683aaa7b396888f2f7a6df3197d2374.jpg",
          },
        },
        {
          id: "2c18f8f2-3d27-45aa-9c56-6f1195f1e09a",
          content: "Já estava na minha lista, vou passar na frente agora.",
          author: {
            id: 3,
            name: "Carlos Silva",
            profile_picture:
              "https://i.pinimg.com/736x/81/a8/fc/81a8fcaeece5bb1dee45096eea8ee0db.jpg",
          },
        },
      ],
      likes: [
        {
          id: "9d6c4f02-38cd-4dd5-9e7f-c25e77ff8454",
          author: {
            id: 2,
            name: "Jane Doe",
            profile_picture:
              "https://i.pinimg.com/736x/96/83/aa/9683aaa7b396888f2f7a6df3197d2374.jpg",
          },
        },
        {
          id: "d07236cb-091c-471f-a80b-1dbe9ffea21a",
          author: {
            id: 3,
            name: "Carlos Silva",
            profile_picture:
              "https://i.pinimg.com/736x/81/a8/fc/81a8fcaeece5bb1dee45096eea8ee0db.jpg",
          },
        },
      ],
      shared: [],
      created_at: "2025-04-01T14:25:00Z",
      updated_at: "2025-04-01T14:25:00Z",
    },
    {
      id: "b9e0a9e3-6baf-45e7-bd44-e6e9304f298a",
      content: "Olha só esse por do sol incrível que capturei ontem!",
      attachment:
        "https://imperiodasmilhas.com/wp-content/uploads/2022/08/por-do-sol.png",
      author: {
        id: 2,
        name: "Jane Doe",
        profile_picture:
          "https://i.pinimg.com/736x/96/83/aa/9683aaa7b396888f2f7a6df3197d2374.jpg",
      },
      comments: [
        {
          id: "547c3d4a-94a9-4a76-9ccf-f1f00238cc94",
          content: "Nossa, que foto linda! Onde foi isso?",
          author: {
            id: 4,
            name: "Mariana Lima",
            profile_picture:
              "https://i.pinimg.com/736x/b5/38/b3/b538b319d80b16249dccb1604837b2ac.jpg",
          },
        },
      ],
      likes: [
        {
          id: "e138d1c7-4039-4985-9882-1a8a8a8dd2a1",
          author: {
            id: 1,
            name: "John Doe",
            profile_picture:
              "https://i.pinimg.com/736x/b3/05/ef/b305ef727bd01d6fa73de59ddcb43efd.jpg",
          },
        },
        {
          id: "cf8812a3-6781-4e92-8f31-17184a6e2d8b",
          author: {
            id: 4,
            name: "Mariana Lima",
            profile_picture:
              "https://i.pinimg.com/736x/b5/38/b3/b538b319d80b16249dccb1604837b2ac.jpg",
          },
        },
      ],
      shared: [
        {
          id: "3c9cf4f1-2f21-4c4f-ae55-67660cdeeaa3",
          author: {
            id: 3,
            name: "Carlos Silva",
            profile_picture:
              "https://i.pinimg.com/736x/81/a8/fc/81a8fcaeece5bb1dee45096eea8ee0db.jpg",
          },
        },
      ],
      created_at: "2025-04-02T18:47:00Z",
      updated_at: "2025-04-02T18:47:00Z",
    },
    {
      id: "0f6346f5-f219-4713-8c14-ec2a70d5e5f4",
      content:
        "Alguém aí já trabalhou com Next.js 14? Tô pensando em migrar meu projeto.",
      attachment: "",
      author: {
        id: 3,
        name: "Carlos Silva",
        profile_picture:
          "https://i.pinimg.com/736x/81/a8/fc/81a8fcaeece5bb1dee45096eea8ee0db.jpg",
      },
      comments: [
        {
          id: "8b28b8b5-785f-4298-91cc-4b8fe1c0c9a4",
          content:
            "Usei em um projeto recente, vale muito a pena, principalmente pelo App Router.",
          author: {
            id: 1,
            name: "John Doe",
            profile_picture:
              "https://i.pinimg.com/736x/b3/05/ef/b305ef727bd01d6fa73de59ddcb43efd.jpg",
          },
        },
        {
          id: "43ac1f20-b885-4d92-9d2e-70558a68bb3d",
          content:
            "Ainda acho o sistema de rotas um pouco confuso, mas é bem poderoso.",
          author: {
            id: 2,
            name: "Jane Doe",
            profile_picture:
              "https://i.pinimg.com/736x/96/83/aa/9683aaa7b396888f2f7a6df3197d2374.jpg",
          },
        },
      ],
      likes: [
        {
          id: "ef681f2b-1f52-4e17-88a6-3b2a319a3e74",
          author: {
            id: 4,
            name: "Mariana Lima",
            profile_picture:
              "https://i.pinimg.com/736x/b5/38/b3/b538b319d80b16249dccb1604837b2ac.jpg",
          },
        },
      ],
      shared: [],
      created_at: "2025-04-03T09:15:00Z",
      updated_at: "2025-04-03T09:16:30Z",
    },
    {
      id: "2755a9e1-1ed9-42b7-81c7-50e4a4f7b76c",
      content:
        "🚀 Projeto novo no ar! Criamos uma API REST para gerenciamento de tarefas usando Node.js + Express. Código no GitHub.",
      attachment:
        "https://github.githubassets.com/assets/social-2deb6d7d43e7.jpg",
      author: {
        id: 3,
        name: "Carlos Silva",
        profile_picture:
          "https://i.pinimg.com/736x/81/a8/fc/81a8fcaeece5bb1dee45096eea8ee0db.jpg",
      },
      comments: [],
      likes: [
        {
          id: "4fa86956-0f3a-4c3d-b91a-8c3d9890c8f2",
          author: {
            id: 1,
            name: "John Doe",
            profile_picture:
              "https://i.pinimg.com/736x/b3/05/ef/b305ef727bd01d6fa73de59ddcb43efd.jpg",
          },
        },
      ],
      shared: [],
      created_at: "2025-04-03T21:40:00Z",
      updated_at: "2025-04-03T21:40:00Z",
    },
    {
      id: "8b3c0912-e2fb-4648-8794-bb52ce0a4c9e",
      content:
        "Desafio do dia: Escreva uma função em JavaScript que inverta uma string. Bora ver quem consegue em menos de 1 minuto!",
      attachment: "",
      author: {
        id: 4,
        name: "Mariana Lima",
        profile_picture:
          "https://i.pinimg.com/736x/b5/38/b3/b538b319d80b16249dccb1604837b2ac.jpg",
      },
      comments: [
        {
          id: "d2de5943-1287-40d2-bc70-8c82d3042b1a",
          content:
            "`const reverse = str => str.split('').reverse().join('');` 😎",
          author: {
            id: 1,
            name: "John Doe",
            profile_picture:
              "https://i.pinimg.com/736x/b3/05/ef/b305ef727bd01d6fa73de59ddcb43efd.jpg",
          },
        },
      ],
      likes: [
        {
          id: "932ea4fb-99ec-4dc8-bbb9-9260a8d69e1a",
          author: {
            id: 2,
            name: "Jane Doe",
            profile_picture:
              "https://i.pinimg.com/736x/96/83/aa/9683aaa7b396888f2f7a6df3197d2374.jpg",
          },
        },
      ],
      shared: [
        {
          id: "8572b1b7-316a-4fa9-8cf0-4013cd227d50",
          author: {
            id: 3,
            name: "Carlos Silva",
            profile_picture:
              "https://i.pinimg.com/736x/81/a8/fc/81a8fcaeece5bb1dee45096eea8ee0db.jpg",
          },
        },
      ],
      created_at: "2025-04-04T08:00:00Z",
      updated_at: "2025-04-04T08:00:00Z",
    },
  ];

  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<PostType>();

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === id);
    setPost(foundPost);
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      <Button className="cursor-pointer" onClick={() => router.back()}>
        Voltar
      </Button>
      {post && <Post {...post} />}
      {post && post.comments.length > 0 && (
        <div className="flex flex-col gap-4">
          {/* #TODO EXTERNALIZAR NUM COMPONENTE DE COMENTÁRIO */}
          {post.comments.map((comment) => (
            <Card key={comment.id} className="rounded-2xl shadow-sm p-0">
              <CardContent className="p-4 flex gap-4 items-start">
                <Avatar>
                  <AvatarImage
                    src={comment.author.profile_picture}
                    alt={comment.author.name}
                  />
                  <AvatarFallback>
                    {comment.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{comment.author.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {comment.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
