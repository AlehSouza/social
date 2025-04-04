"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Post } from "./types";

export default function Post(data: Post) {
  const router = useRouter();

  const navigateTo = (id: string) => {
    router.push(`/feed/${id}`);
  };

  return (
    <Card
      className=" cursor-pointer w-full p-4 gap-4"
      onClick={() => navigateTo(data.id)}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="size-10">
          <AvatarImage
            src={data.author.profile_picture}
            alt={data.author.name}
          />
          <AvatarFallback>{data.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold">
            {data.author.name}
          </CardTitle>
          <p className="text-xs text-gray-500">
            {new Date(data.created_at).toLocaleString()}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-gray-800">{data.content}</p>
        {data.attachment && (
          <img
            src={data.attachment}
            alt="Attachment"
            className="rounded-lg w-full h-auto mt-2"
          />
        )}
        <div className="flex items-center gap-4 mt-4">
          <Button
            variant="ghost"
            className="cursor-pointer flex items-center gap-2"
          >
            <Heart className="w-5 h-5" /> {data.likes.length}
          </Button>
          <Button
            variant="ghost"
            className="cursor-pointer flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> {data.comments.length}
          </Button>
          <Button
            variant="ghost"
            className="cursor-pointer flex items-center gap-2"
          >
            <Share2 className="w-5 h-5" /> {data.shared.length}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
