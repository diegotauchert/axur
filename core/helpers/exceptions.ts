export class HttpError extends Error {
  constructor(message = 'Request not successful'){
    super(message)
    this.name = 'HttpError'
  }
}