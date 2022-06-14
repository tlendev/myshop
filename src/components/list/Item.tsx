import { Item } from '../../types';

type Props = {
    item: Item;
};

const ListItem = ({ item }: Props) => {
    return (
        <div className='list_item' id={item.uid}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            {/* img */}
            {/* btn */}
        </div>
    );
};

export { ListItem };
