import { Link } from 'react-router-dom';

const PageHeader = () => {
  return (
    <Link to='/dashboard'>
      <h1 className="pageHeader">Medium</h1>
    </Link>
  );
};

export default PageHeader;
