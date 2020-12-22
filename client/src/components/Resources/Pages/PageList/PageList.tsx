import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';

const PageList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <ShowButton basePath="/pages" />
        <EditButton basePath="/pages" />
        <DeleteButton basePath="/pages" />
      </Datagrid>
    </List>
  );
};

export default PageList;
