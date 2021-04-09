import { Joke } from 'app/models';

export interface State {
    jokes: Joke[];
    isLoading: boolean;
    error: string;
}