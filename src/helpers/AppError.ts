interface iAppError {
  statusCode: number;
  message: string;
  data?: any;
}

export class AppError {
  public readonly statusCode: number;
  public readonly message: string;
  public readonly data: any;

  constructor({ statusCode, message, data }: iAppError) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
