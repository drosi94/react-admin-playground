import { Edit, SimpleForm, TextInput } from 'react-admin';

const TagEdit: React.FC = (props) => {
  return (
    <Edit title="Edit Tag" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default TagEdit;
