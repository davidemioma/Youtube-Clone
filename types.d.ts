import { User, Post, Comment } from "@prisma/client";

export type CurrentUser = User & {
  seenPosts: Post[];
  likedPosts: Post[];
  dislikedPosts: Post[];
  watchLaterPosts: Post[];
};

export type PostProps = Post & {
  user: User;
};

export type CommentProps = Comment & {
  user: User;
};

export type PostDetails = Post & {
  user: User;
  comments: CommentProps[];
};

export type ChannelProps = User & {
  posts: PostProps[];
};
