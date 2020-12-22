import { Create, SimpleForm, TextInput } from 'react-admin';

const TagCreate: React.FC = (props) => {
  return (
    <Create title="Create a tag" {...props}>
      <SimpleForm>
        <TextInput source="id"/>
        <TextInput source="name"/>
      </SimpleForm>
    </Create>
  );
};

export default TagCreate;
