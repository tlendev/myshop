import { ItemList } from '../components/list/ItemList';
import { useAppSelector } from '../redux/hooks';

type Props = {};

const List = (props: Props) => {
    const shopListItems = useAppSelector((state) => state.shop.shopItems);
    const { page, maxPage } = useAppSelector((state) => state.paging);
    return (
        <section className='container'>
            <ItemList
                items={shopListItems.slice(
                    (page - 1) * maxPage!,
                    page * maxPage!
                )}
            />
        </section>
    );
};

export { List };
