import React from 'react';
import {
    DateField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField,
    EmailField
} from 'react-admin';
import MyBooleanField from './MyBooleanField';
import MyTextField from './MyTextField';
import PostShowActions from './EditShowActions';

const UserShow = (props) => {
    console.log('Usershow: ', props);
    return (
        <Show {...props} title={'User detail'}  actions={<PostShowActions />} >
            <TabbedShowLayout>
                <Tab label="User profile">
                    <TextField source="id"/>
                    <TextField source="name" />
                    <TextField source="fullname" />
                    <EmailField source="email" />
                    <TextField label="StudentID" source="studentID" />
                    <DateField label="Created at" source="createdAt" showTime={true} />
                    <DateField label="Updated at" source="updatedAt" showTime={true} />
                    <MyBooleanField label="Active" addLabel={true} source="status" />
                    <MyTextField label="Role" addLabel={true} source="role" />
                </Tab>
                
            </TabbedShowLayout>
        </Show>
    );
};

export default UserShow;
