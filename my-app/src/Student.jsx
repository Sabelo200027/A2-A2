import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, Create, EditButton, ShowButton } from 'react-admin';


export const StudentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Student_Number" />
            <TextField source="Student_Email" />
            <DateField source="created" />
            <DateField source="updated" />
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const StudentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Student_Number" />
            <TextField source="Student_Email" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="Student_Number" />
            <TextInput source="Student_Email" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

export const StudentCreate = () => (
    <create>
        <SimpleForm>
            <TextInput source="Student_Number" />
            <TextInput source="Student_Email" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </create>
);