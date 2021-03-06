import React from "react";
import {
  List,
  Filter,
  Datagrid,
  TextField,
  SearchInput,
  DeleteWithConfirmButton,
  EditButton,
  EmailField
} from "react-admin";

import MyBooleanField from "./MyBooleanField";

const UserFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder="Search by email" source="name" resettable alwaysOn />
  </Filter>
);

function UserList(props) {
  console.log(props);
  return (
    <List {...props} title="List of User" filters={<UserFilter />}>
      <Datagrid rowClick={'show'}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="fullname" />
        <EmailField source="email" />
        <TextField source="studentID" />
        <MyBooleanField label="Active" source="status" />
        <EditButton basePath="/users" />
        <DeleteWithConfirmButton basePath="/users" />
      </Datagrid>
    </List>
  );
}

export default UserList;
