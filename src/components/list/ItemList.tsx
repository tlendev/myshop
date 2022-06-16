import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { DetailedItem, Item } from '../../types';
import { ListItem } from './Item';
import './itemList.css';
import { changePage } from './pagingSlice';

type Props = {
    items: Array<DetailedItem>;
};

const ItemList = ({ items }: Props) => {
    const dispatch = useAppDispatch();
    const page = useAppSelector((state) => state.paging.page);
    return (
        <div className='container list__container'>
            {items.map((item) => {
                return <ListItem item={item} key={item.uid} />;
            })}
            <div className='container list__controls'>
                <button
                    onClick={(e) => dispatch(changePage({ page: page - 1 }))}
                >
                    ⬅️
                </button>
                <p>{page}</p>
                <button
                    onClick={(e) => dispatch(changePage({ page: page + 1 }))}
                >
                    ➡️
                </button>
            </div>
        </div>
    );
};

export { ItemList };
