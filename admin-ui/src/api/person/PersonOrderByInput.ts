import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  birthday?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
