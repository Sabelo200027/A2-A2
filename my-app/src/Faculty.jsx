import { Datagrid, DateField, EditButton, List, ReferenceField, ShowButton, TextField } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, EditButton, Create } from 'react-admin';

export const FacultyList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="Student" />
            <TextField source="Faculty_Type" />
            <TextField source="Programme" />
            <DateField source="created" />
            <DateField source="updated" />
            <EditButton/>
            <ShowButton/>
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

export const FacultyCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Faculty_Type" />
            <TextInput source="Programme" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);
