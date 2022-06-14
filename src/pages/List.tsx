import { Link } from 'react-router-dom';

type Props = {};

const List = (props: Props) => {
    return (
        <>
            <p>List</p>
            <Link to={'/item/1'}>
                <p>to item 1</p>
            </Link>
            <Link to={'/item/12'}>
                <p>to item 12</p>
            </Link>
            <Link to={'/item/-1'}>
                <p>to item -1</p>
            </Link>
            <Link to={'/item/999'}>
                <p>to item out of range</p>
            </Link>
        </>
    );
};

export { List };
