import React from "react";
import {
  List,
  Filter,
  Datagrid,
  TextField,
  SearchInput,
  // DeleteWithConfirmButton,
  EditButton,
  EmailField
} from "react-admin";


const AdminFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder="Search by email" source="name" resettable alwaysOn />
  </Filter>
);

function AdminList(props) {
  console.log(props);
  return (
    <List {...props} title="List of admin" filters={<AdminFilter />}>
      <Datagrid rowClick={'show'}>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <EditButton basePath="/admins" />
        {/* <DeleteWithConfirmButton basePath="/admins" /> */}
      </Datagrid>
    </List>
  );
}

export default AdminList;
