import { MessageType } from './message-type.enum';

export interface HttpResponseMessage {
  message: HttpResponseBodyMessage,
  showMessage: boolean;
}

export interface HttpResponseBodyMessage {
  text: string;
  type: MessageType
}
