import CustomError from "./customError";

export default class ConflictError extends CustomError {
  constructor(headMessage: string, messages?: string[]) {
    super(409, headMessage, messages);
  }
}
