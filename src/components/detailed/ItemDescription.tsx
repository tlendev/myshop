import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { DetailedItem } from '../../types';
import { addToCart } from '../cart/cartSlice';
import './itemDescription.css';

type Props = {
    item: DetailedItem;
};

const ItemDescription = ({ item }: Props) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const dispatch = useAppDispatch();
    return (
        <div className='container description__container'>
            <div className='img__container detailed__cell'>
                <img src={`/img/${item.imagePath}`} alt={item.name} />
            </div>
            <div className='detailed__cell'>
                <h3>{item.name}</h3>
                <p>Description:</p>
                <p>{item.description}</p>
            </div>
            <div className='detailed__cell'>
                <p>Price: {item.priceInPLN} PLN</p>
                <p>{item.quantityLeft} left</p>
                <input
                    type='number'
                    value={selectedQuantity}
                    onChange={(e) =>
                        setSelectedQuantity(parseInt(e.target.value))
                    }
                />
                <button
                    onClick={(e) =>
                        dispatch(
                            addToCart({
                                uid: item.uid,
                                name: item.name,
                                priceInPLN: item.priceInPLN,
                                quantity: selectedQuantity,
                            })
                        )
                    }
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export { ItemDescription };
