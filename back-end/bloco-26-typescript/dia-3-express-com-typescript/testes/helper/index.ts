export class NewError {
  status
  message
  constructor(status: number, message: string) {
    this.status = status
    this.message = message

    this.throwError()
  }

  private constructError() {
    return {status: this.status, message: this.message}
  }

  private throwError() {
    throw this.constructError()
  }
}