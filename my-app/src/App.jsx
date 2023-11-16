import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser} from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase.js";
import { StudentCreate, StudentEdit, StudentList, StudentShow } from "./Student";
import { FacultyList, FacultyShow, FacultyEdit } from "./Faculty.jsx";


const pbProvider = PocketBaseProvider('https://friendly-orbit-pjrprwwrqqg63wrg-8090.app.github.dev/');

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} authProvider={pbProvider.dataProvider}>
      <Resource name="Student" list={StudentList} show={StudentShow} edit={StudentEdit} create={StudentCreate} recordRepresentation="Student number" />
      <Resource name="Faculty" list={FacultyList} show={FacultyShow} edit={FacultyEdit} recordRepresentation="Programme"/>
    </Admin>
  )
}

export default App