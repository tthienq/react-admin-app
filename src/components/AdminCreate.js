import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    PasswordInput 
} from 'react-admin';


const AdminCreate = (props) => {
    //console.log(props);
    return (
        <Create {...props} title="Create new account admin">
            <SimpleForm>
                <TextInput source={'name'} />
                <TextInput source={'email'} />
                <PasswordInput source={'password'} initiallyVisible/>
            </SimpleForm>
        </Create>
    );
};

export default AdminCreate;
