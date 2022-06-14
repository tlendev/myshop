import { Item } from '../../types';
import { ListItem } from './Item';

type Props = {
    items: Array<Item>;
};

const ItemList = ({ items }: Props) => {
    return (
        <div className='list__container'>
            {items.map((item) => {
                return <ListItem item={item} key={item.uid} />;
            })}
        </div>
    );
};

export { ItemList };
