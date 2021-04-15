import { JokeStateModule } from './joke';
import { PostStateModule } from './post';

export interface State {
    joke: JokeStateModule,
    post: PostStateModule
}
