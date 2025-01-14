export class AppError {
  constructor(
    public status: number,
    public statusText: string,
    public message: string,
  ) {}
}
