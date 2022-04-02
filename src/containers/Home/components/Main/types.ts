export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostComment {
  postId: number;
  id: number;
  name: number;
  email: string;
  body: string;
}
