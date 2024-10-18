import CustomError from "./customError";

export default class NotFoundError extends CustomError {
  constructor(headMessage: string, messages?: string[]) {
    super(404, headMessage, messages);
  }
}
