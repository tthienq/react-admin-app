import React from 'react';
import { BooleanInput, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

const BooleanNumInput = ({ record = {}, source, ...props }) => {
    let isActive = true;
    if (record[source] === 2) {
        isActive = false;
    }
    record[source + 'Num'] = isActive;
    return <BooleanInput {...props} record={record} source={source + 'Num'} />;
};

const UserEdit = (props) => {
    console.log(props);
    return (
        <Edit title={'Edit User'} {...props} undoable={false}>
            <SimpleForm>
                <TextInput disabled source={'id'} />
                <TextInput source={'name'} />
                <TextInput source={'fullname'} />
                <TextInput disabled source={'email'} />
                <TextInput source={'studentID'} />
                <DateInput disabled source={'createdAt'} />
                <BooleanNumInput source="status" label="Active" />
            </SimpleForm>
        </Edit>
    );
};

export default UserEdit;
