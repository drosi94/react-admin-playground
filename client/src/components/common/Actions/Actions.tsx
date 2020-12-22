import { ListButton, TopToolbar } from 'react-admin';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const Actions: React.FC<{
  basePath?: string;
  children?: any;
  hasBack?: boolean;
}> = ({ basePath, children, hasBack = true }) => {
  return (
    <TopToolbar>
      {hasBack && (
        <ListButton basePath={basePath} label="Back" icon={<ChevronLeft />} />
      )}
      {children}
    </TopToolbar>
  );
};

export default Actions;
