import { DetailedItem } from '../../types';
import { Link } from 'react-router-dom';
import AddIcon from '../../static/add-to-cart.svg';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart } from '../cart/cartSlice';
import './item.css';

type Props = {
    item: DetailedItem;
};

const ListItem = ({ item }: Props) => {
    const dispatch = useAppDispatch();
    return (
        <div className='container list_item' id={item.uid}>
            <div className='item__cell'>
                <img
                    src={`/img/${item.imagePath}`}
                    alt={item.name}
                    width='300'
                    height='200'
                />
            </div>
            <div className='item__cell'>
                <Link to={`/item/${item.uid}`}>
                    <h3 className='item__title'>{item.name}</h3>
                </Link>
            </div>
            <div className='item__cell'>
                <p>{item.priceInPLN} PLN</p>
                <div
                    className='item__button'
                    onClick={(e) => {
                        dispatch(
                            addToCart({
                                uid: item.uid,
                                name: item.name,
                                priceInPLN: item.priceInPLN,
                            })
                        );
                    }}
                >
                    <img src={AddIcon} alt='buy now' width='30' height='30' />
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
    );
};

export { ListItem };
