import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { Show, SimpleShowLayout, TextField } from 'react-admin';
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const FacultyList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="Student" />
            <TextField source="Faculty_Type" />
            <TextField source="Programme" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

export const FacultyShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="Student" />
            <TextField source="Faculty_Type" />
            <TextField source="Programme" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

export const FacultyEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Faculty_Type" />
            <TextInput source="Programme" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);
