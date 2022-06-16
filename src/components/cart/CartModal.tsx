import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Item } from '../../types';
import {
    clearCart,
    removeFromCart,
    setItemQuantity,
    toggleCartVisibility,
} from './cartSlice';
import './cartModal.css';
import { CartItem } from './CartItem';

type Props = {
    cartItems: Array<Item>;
};

const CartModal = ({ cartItems }: Props) => {
    const dispatch = useAppDispatch();
    const cartValue = useAppSelector((state) => state.cart.totalPrice);
    return (
        <div className='container cart__container'>
            {cartItems.map((item) => {
                return <CartItem item={item} key={item.uid} />;
            })}
            <h2>Total: {cartValue} PLN</h2>
            <button onClick={(e) => dispatch(clearCart())}>Checkout</button>
            <button
                onClick={(e) => dispatch(toggleCartVisibility({ show: false }))}
            >
                Close
            </button>
        </div>
    );
};

export { CartModal };
