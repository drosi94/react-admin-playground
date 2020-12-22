import { Create, SimpleForm, TextInput } from 'react-admin';

const PageCreate: React.FC = (props) => {
  return (
    <Create title="Create a Page" {...props}>
      <SimpleForm>
        <TextInput source="id"/>
        <TextInput source="name"/>
        <TextInput multiline source="content"/>
      </SimpleForm>
    </Create>
  );
};

export default PageCreate;
