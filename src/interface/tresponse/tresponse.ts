export type IMeta =
  | {
      page: number;
      limit: number;
      total: number;
    }
  | undefined;

export interface TResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  meta?: IMeta;
}
