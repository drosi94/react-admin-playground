import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostIcon from '@material-ui/icons/Book';
import PageIcon from '@material-ui/icons/Pages';
import TagIcon from '@material-ui/icons/Label';

import {
  PageCreate,
  PageEdit,
  PageList,
  PageShow,
} from './components/Resources/Pages';
import { PostCreate, PostEdit, PostList } from './components/Resources/Posts';
import { TagList, TagEdit, TagCreate } from './components/Resources/Tags';

const App: React.FC = () => {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name="pages"
        icon={PageIcon}
        list={PageList}
        create={PageCreate}
        edit={PageEdit}
        show={PageShow}
      />
      <Resource
        name="posts"
        icon={PostIcon}
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name="tags"
        icon={TagIcon}
        list={TagList}
        create={TagCreate}
        edit={TagEdit}
      />
    </Admin>
  );
};

export default App;
