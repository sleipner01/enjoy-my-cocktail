import { Link } from 'react-router';
export const NotFound = () => (
  <div className='page-not-found'>
    <h1>404 - Not Found. Go home, you are drunk!</h1>
    <Link to='/'>Back to the cocktails</Link>
  </div>
);
