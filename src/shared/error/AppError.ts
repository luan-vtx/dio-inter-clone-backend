class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly data?: any;

  constructor(message: string, data?: any, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}

export default AppError;
