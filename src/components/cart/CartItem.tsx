import { useAppDispatch } from '../../redux/hooks';
import { Item } from '../../types';
import { removeFromCart, setItemQuantity } from './cartSlice';

type Props = {
    item: Item;
};

const CartItem = ({ item }: Props) => {
    const dispatch = useAppDispatch();
    return (
        <div className='container cart__item'>
            <div className='cart__cell'>
                <p>
                    {item.quantity} X {item.name}
                </p>
                <p>{item.priceInPLN} PLN Each</p>
            </div>
            <div className='cart__cell quantity_controls'>
                <input
                    type='number'
                    value={item.quantity}
                    onChange={(e) => {
                        dispatch(
                            setItemQuantity({
                                uid: item.uid,
                                quantity: parseInt(e.target.value),
                            })
                        );
                    }}
                />
            </div>
            <div className='cart__cell'>
                <p>{item.priceInPLN * item.quantity} PLN total</p>
                <button
                    onClick={(e) => dispatch(removeFromCart({ uid: item.uid }))}
                >
                    Remove from cart
                </button>
            </div>
        </div>
    );
};

export { CartItem };
