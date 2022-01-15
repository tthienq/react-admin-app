import React from 'react';
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';


const AdminEdit = (props) => {
    console.log(props);
    return (
        <Edit title={'Edit Admin'} {...props} undoable={false}>
            <SimpleForm>
                <TextInput disabled source={'id'} />
                <TextInput source={'name'} />
                <TextInput disabled source={'email'} />
                <DateInput disabled source={'createdAt'} />
            </SimpleForm>
        </Edit>
    );
};

export default AdminEdit;
