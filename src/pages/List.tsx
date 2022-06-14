import { ItemList } from '../components/list/ItemList';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

type Props = {};

const List = (props: Props) => {
    const shopListItems = useAppSelector((state) => state.shop.shopItems);
    return (
        <>
            <br />
            <br />
            <p>List</p>
            <ItemList items={shopListItems} />
        </>
    );
};

export { List };
