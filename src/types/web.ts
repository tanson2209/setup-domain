export interface IInfoHost {
  host: string;
  category: string;
  value: string;
}
export type StatusType = "fail" | "success" | "pending" | "inprogress";
export interface DataHost {
  name: string;
  status: StatusType;
  mockTime: Date | number;
}
