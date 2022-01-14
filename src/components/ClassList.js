import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Filter,
  SearchInput,
  EditButton,
  ChipField
} from "react-admin";

const ClassFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder="Search by name class" source="name" resettable alwaysOn />
  </Filter>
);

function UserList(props) {
  console.log(props);
  return (
    <List {...props} title="Classrooms"filters={<ClassFilter />}>
      <Datagrid rowClick={'show'}>
        <TextField source="id"/>
        <TextField source="name" />
        <ChipField source="topic" />
        <TextField source="room" />
        <DateField label="Created at" source="createdAt" showTime={true} width='2'/>
        <DateField label="Updated at" source="updatedAt" showTime={true} />
        <EditButton basePath="/classes" />
      </Datagrid>
    </List>
  );
}

export default UserList;
