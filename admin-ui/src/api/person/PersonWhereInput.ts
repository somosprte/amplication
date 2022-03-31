import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonWhereInput = {
  birthday?: DateTimeNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
