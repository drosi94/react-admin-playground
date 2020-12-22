import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const TagList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <EditButton basePath="/tags" />
        <DeleteButton basePath="/tags" />
      </Datagrid>
    </List>
  );
};

export default TagList;
