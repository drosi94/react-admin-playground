import { Button, Fab, makeStyles } from '@material-ui/core';
import { cloneElement } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  useListContext,
  TopToolbar,
  sanitizeListRestProps,
  CreateButton,
  ExportButton,
} from 'react-admin';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
const ListActions: React.FC<{
  className?: string;
  exporter?: any;
  filters?: any;
  maxResults?: any;
  basePath?: string;
}> = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props;
  const {
    currentSort,
    resource,
    displayedFilters,
    filterValues,
    basePath,
    showFilter,
    total,
  } = useListContext();

  const classes = useStyles();

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      {filters &&
        cloneElement(filters, {
          resource,
          showFilter,
          displayedFilters,
          filterValues,
          context: 'button',
        })}
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filterValues={filterValues}
        maxResults={maxResults}
      />
    </TopToolbar>
  );
};

const PostList: React.FC = (props) => {
  return (
    <List actions={<ListActions />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="content" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};

export default PostList;
