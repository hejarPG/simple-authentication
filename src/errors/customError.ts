export default class CustomError extends Error {
  statusCode: number;
  messages?: string[];

  constructor(statusCode: number, headMessage: string, messages?: string[]) {
    super(headMessage);
    this.statusCode = statusCode;
    this.messages = messages;
  }
}
