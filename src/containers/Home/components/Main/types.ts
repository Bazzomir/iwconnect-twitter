export interface PostTweet {
  userId: number;
  id: number;
  title: string;
  body: string;
  isLocal: boolean;
}

export interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
