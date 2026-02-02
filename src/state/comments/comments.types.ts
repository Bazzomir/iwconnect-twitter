import { PostComment } from '../../containers/Home/components/Main/types';

export interface CommentsState {
    items: PostComment[];
    loading: boolean;
    error: string | null;
}
