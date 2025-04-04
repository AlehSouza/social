import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

type User = {
  id: number | string;
  name: string;
  profile_picture: string;
};

type Comment = {
  id: string;
  content: string;
  author: User;
};

type Like = {
  id: string;
  author: User;
};

type Share = {
  id: string;
  author: User;
};

type Post = {
  id: string;
  content: string;
  attachment: string;
  author: User;
  comments: Comment[];
  likes: Like[];
  shared: Share[];
  created_at: string;
  updated_at: string;
};

export default function Post(data: Post) {
  return (
    <Card className="w-full max-w-xl shadow-md p-4 gap-4">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
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
          <p className="text-sm text-gray-500">
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
