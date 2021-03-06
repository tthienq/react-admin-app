import React from 'react';
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

const ClassEdit = (props) => {
    console.log(props);
    return (
        <Edit title={'Edit User'} {...props} undoable={false}>
            <SimpleForm>
                <TextInput disabled source={'id'} />
                <TextInput source={'name'} />
                <TextInput source={'desc'} />
                <TextInput source={'topic'} />
                <TextInput source={'room'} />
                <DateInput disabled source={'createdAt'} />
            </SimpleForm>
        </Edit>
    );
};

export default ClassEdit;
