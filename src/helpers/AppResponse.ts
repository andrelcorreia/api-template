interface iAppResponse {
  statusCode: number;
  message: string;
  data?: any;
}

export class AppResponse {
  public readonly statusCode: number;
  public readonly message: string;
  public readonly data: any;

  constructor({ statusCode, message, data }: iAppResponse) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
