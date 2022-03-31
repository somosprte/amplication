import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonWhereInput = {
  birthday?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
