import { ItemList } from '../components/list/ItemList';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

type Props = {};

const List = (props: Props) => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    return (
        <>
            <br />
            <br />
            <p>List</p>
            <ItemList items={cartItems} />
        </>
    );
};

export { List };
