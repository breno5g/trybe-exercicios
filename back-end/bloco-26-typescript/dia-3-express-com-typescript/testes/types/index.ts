import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';

export type SqlType =
  | RowDataPacket[]
  | RowDataPacket[][]
  | OkPacket
  | OkPacket[]
  | ResultSetHeader;
