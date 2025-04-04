export interface User {
  id: number | string;
  name: string;
  profile_picture: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
}

export interface Like {
  id: string;
  author: User;
}

export interface Share {
  id: string;
  author: User;
}

export interface Post {
  id: string;
  content: string;
  attachment: string;
  author: User;
  comments: Comment[];
  likes: Like[];
  shared: Share[];
  created_at: string;
  updated_at: string;
}