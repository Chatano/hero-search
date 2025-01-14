export const generateErrorMessage = (status: number, statusText: string) => {
  return `Http error, status ${status} (${statusText})`
}
