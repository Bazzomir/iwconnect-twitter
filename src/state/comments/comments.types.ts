import { PostComment } from '../../containers/Home/components/Main/types';

export interface CommentsState {
    commentsByPostId: {
        [postId: number]: PostComment[];
    };
    loading: boolean;
    error: string | null;
}
