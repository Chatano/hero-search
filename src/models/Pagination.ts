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

    return {
      hasNextPage: offset + limit < total,
      hasPrevPage: offset > 0,
      totalPages: Math.ceil(total / limit),
      totalItems: data.total,
      page: Math.floor(offset / limit) + 1,
      pageItems: data.count,
      limitPerPage: limit,
    }
  }
}
