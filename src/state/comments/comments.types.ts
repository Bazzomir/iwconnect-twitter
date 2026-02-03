import { PostComment } from '../../containers/Home/components/Main/types';

export interface CommentsState {
    itemsByPostId: {
        [postId: number]: PostComment[];
    };
    loading: boolean;
    error: string | null;
}
