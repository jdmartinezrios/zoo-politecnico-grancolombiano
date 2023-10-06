export interface RequestError {
  message: string;
}

class RequestStackError {
  public status: number;
  public message: string;

  constructor(error: string, code: number) {
    this.status = code;
    this.message = error;
  }
}

export class ResponsetError extends RequestStackError {
  constructor(error: unknown, status: number) {
    super((error as RequestError).message, status);
  }
}
