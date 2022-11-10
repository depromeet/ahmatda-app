import { POST_MESSAGE_KEY } from './type';

export interface PostAppMessageData {
  type: POST_MESSAGE_KEY;
  data: unknown;
  [key: string]: unknown;
}

const stringifiedPostMessageObject = (object: PostAppMessageData) => {
  return JSON.stringify(object);
};

export default stringifiedPostMessageObject;
