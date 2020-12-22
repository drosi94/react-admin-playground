import {
  Edit,
  ShowButton,
  SimpleForm,
  TextInput,
} from 'react-admin';
import Actions from '../../../common/Actions';

const PostEditActions: React.FC<{ basePath?: any; data?: any }> = ({
  basePath,
  data,
}) => {
  return (
    <Actions>
      <ShowButton basePath={basePath} record={data} />
    </Actions>
  );
};

const PostEdit: React.FC = (props) => {
  return (
    <Edit title="Edit Post" {...props} actions={<PostEditActions />}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
