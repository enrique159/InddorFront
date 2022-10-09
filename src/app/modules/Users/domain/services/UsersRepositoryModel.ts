import type { Users } from "../interfaces";

export interface UsersRepositoryModel {
  getAll(): Promise<Users[]>;
  getById(id: number): Promise<Users>;
  create(user: Users): Promise<Users>;
  update(user: Users): Promise<Users>;
  delete(id: number): Promise<void>;
}