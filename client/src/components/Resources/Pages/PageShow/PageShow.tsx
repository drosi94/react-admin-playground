import { RichTextField, Show, SimpleShowLayout, TextField } from 'react-admin';

const PageTitle: React.FC<{ record?: any }> = ({ record }) => {
  return <span>Page {record ? `"${record.name}"` : ''}</span>;
};

const PageShow: React.FC = (props) => {
  return (
    <Show title={<PageTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <RichTextField source="content" />
      </SimpleShowLayout>
    </Show>
  );
};

export default PageShow;
