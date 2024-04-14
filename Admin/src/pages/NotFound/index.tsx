import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>Not Found page</h1>
      <Link to="/admin">Back to main page</Link>
    </div>
  );
};
