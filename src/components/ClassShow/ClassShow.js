import React from 'react';
import {
    DateField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField,
    ChipField,
    SingleFieldList
} from 'react-admin';
import PostShowActions from '../EditShowActions';
import Students from './Students';
import Teachers from './Teachers';
import Chip from '@material-ui/core/Chip'

const ClassShow = (props) => {
    console.log('ClassShow: ', props);
    return (
        <Show {...props} title={'Classroom detail'}  actions={<PostShowActions />} >
            <TabbedShowLayout>
                <Tab label="Class Information">
                    <TextField source="id"/>
                    <TextField source="name" />
                    <TextField source="desc" label="Description" />
                    <ChipField source="topic" />
                    <TextField source="room" />
                    <TextArrayField source="students">
                        <SingleFieldList>
                        <ChipField source="id" />
                        </SingleFieldList>
                    </TextArrayField>
                    <TextArrayField source="teachers">
                        <SingleFieldList>
                        <ChipField source="id" />
                        </SingleFieldList>
                    </TextArrayField>
                    <DateField label="Created at" source="createdAt" showTime={true} />
                    <DateField label="Updated at" source="updatedAt" showTime={true} />
                </Tab>
                <Tab label={'Students List'}>
                    <Students classId={props.id} />
                </Tab>
                <Tab label={'Teacher List'}>
                    <Teachers classId={props.id} />
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

const TextArrayField = ({ record, source }) => {
    const array = record[source]
    if (typeof array === 'undefined' || array === null || array.length === 0) {
      return <div/>
    } else {
      return (
        <>
          {array.map(item => <Chip label={item} key={item} style={{marginRight: '5px'}}/>)}
        </>
      )    
    }
  }
  TextArrayField.defaultProps = { addLabel: true }

export default ClassShow;
