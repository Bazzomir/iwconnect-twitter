import { PostType } from '../../containers/Home/components/Main/types';

export interface TweetsState {
  items: PostType[];
  loading: boolean;
  error: string | null;
}
