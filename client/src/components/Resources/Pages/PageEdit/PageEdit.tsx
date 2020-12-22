import { Edit, SimpleForm, TextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PageEdit: React.FC = (props) => {
  return (
    <Edit title="Edit Page" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <RichTextInput source="content" />
      </SimpleForm>
    </Edit>
  );
};

export default PageEdit;
