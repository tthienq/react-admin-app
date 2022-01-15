import React from 'react';
import {
    DateField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField,
    EmailField
} from 'react-admin';
import PostShowActions from './EditShowActions';

const AdminShow = (props) => {
    return (
        <Show {...props} title={'Admin Detail'}  actions={<PostShowActions />} >
            <TabbedShowLayout>
                <Tab label="Admin Profile">
                    <TextField source="id"/>
                    <TextField source="name" />
                    <EmailField source="email" />
                    <DateField label="Created at" source="createdAt" showTime={true} />
                    <DateField label="Updated at" source="updatedAt" showTime={true} />
                </Tab>
                
            </TabbedShowLayout>
        </Show>
    );
};

export default AdminShow;
