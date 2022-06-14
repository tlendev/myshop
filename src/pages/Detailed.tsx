import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

type Props = {};

const Detailed = (props: Props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!id || +id > 100 || +id < 0) {
            navigate('/*');
        }
    }, []);

    return (
        <>
            <p>Item {id}</p>
            <Link to={'/'}>back to home</Link>
        </>
    );
};

export { Detailed };
