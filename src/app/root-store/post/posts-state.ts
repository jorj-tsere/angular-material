import { Post } from 'app/models';

export interface State {
    posts: Post[];
    isLoading: boolean;
    error: string;
}