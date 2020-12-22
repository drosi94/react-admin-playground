import { Create, SimpleForm, TextInput } from 'react-admin';

const PostCreate: React.FC = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="id"/>
        <TextInput source="title"/>
        <TextInput multiline source="content"/>
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
