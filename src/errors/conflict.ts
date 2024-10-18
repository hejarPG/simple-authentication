import CustomError from "./customError";

class ConflictError extends CustomError {
  constructor(statusCode: number, messages?: string[]) {
    super(statusCode, "CONFLICT", messages);
  }
}
