export class AppError {
  constructor(
    public message: string,
    public status: number,
    public statusText: string,
  ) {}
}
