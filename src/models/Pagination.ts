import { ApiResponse } from './Api/ApiResponse'

export class Pagination {
  public readonly hasNextPage: boolean = false
  public readonly hasPrevPage: boolean = false
  public readonly totalPages: number = 0
  public readonly page: number = 1
  public readonly totalItems: number = 0
  public readonly pageItems: number = 0
  public readonly limitPerPage: number = 20

  static mapFromApiResponse(data: ApiResponse<unknown>['data']) {
    const { limit, offset, total } = data

    const hasNextPage = offset + limit < total
    const hasPrevPage = offset > 0
    const totalPages = Math.ceil(total / limit)
    const totalItems = data.total
    const page = Math.floor(offset / limit) + 1
    const pageItems = data.count
    const limitPerPage = limit

    return {
      hasNextPage,
      hasPrevPage,
      totalPages,
      totalItems,
      page,
      pageItems,
      limitPerPage,
    }
  }
}
