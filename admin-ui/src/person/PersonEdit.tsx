import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput, TextInput } from "react-admin";

export const PersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="birthday" source="birthday" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
