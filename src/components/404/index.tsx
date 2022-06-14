import { Link } from 'react-router-dom';
import './404.css';

type Props = {};

const NotFoundSign = (props: Props) => {
    return (
        <div className='container'>
            <h1>404 | Page Not Found</h1>
            <Link to={'/'}>
                <p>Back to main page</p>
            </Link>
        </div>
    );
};

export { NotFoundSign };
