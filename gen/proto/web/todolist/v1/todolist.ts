/* eslint-disable */
export const protobufPackage = "todolist.v1";

export enum TodoStatus {
  TODO_STATUS_UNSPECIFIED = "TODO_STATUS_UNSPECIFIED",
  TODO_STATUS_ACTIVE = "TODO_STATUS_ACTIVE",
  TODO_STATUS_COMPLETED = "TODO_STATUS_COMPLETED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export interface Todo {
  id: string;
  status: TodoStatus;
  content: string;
  createdAt: string | undefined;
  updatedAt: string | undefined;
}

export interface HealthCheckRequest {}

export interface HealthCheckResponse {}

export interface GetServerTimeRequest {
  requestedAt: string | undefined;
}

export interface GetServerTimeResponse {
  serverTime: string | undefined;
}

export interface ListTodosRequest {}

export interface ListTodosResponse {
  todos: Todo[];
}

export interface CreateTodoRequest {
  todo: Todo | undefined;
}

export interface CreateTodoResponse {}

export interface UpdateTodoStatusRequest {
  todoIds: string[];
  status: TodoStatus;
}

export interface UpdateTodoStatusResponse {}

export interface DeleteTodoRequest {
  todoId: string;
}

export interface DeleteTodoResponse {}

export interface DeleteCompletedTodosRequest {}

export interface DeleteCompletedTodosResponse {
  todoIds: string[];
}
