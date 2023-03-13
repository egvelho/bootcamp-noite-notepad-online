import { databasePool } from "../database/databasePool";

export type Notepad = {
  id: number;
  title: string;
  description: string;
  content: string;
  createdAt: Date;
};

export function findOneById() {}

export async function findMany(): Promise<Notepad[]> {
  const connection = await databasePool.getConnection();
  const [fields] = (await connection.query("select * from notepads")) as any;
  return fields;
}

export function create() {}

export function createMany() {}

export function updateById() {}

export function deleteById() {}
