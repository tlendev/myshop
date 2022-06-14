import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import './headerNav.css';
import Logo from './logo.svg';
import Cart from './shopping-cart.svg';

type Props = {};

const HeaderNav = (props: Props) => {
    const itemCount = useAppSelector((state) => state.cart.displayCount);
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    useEffect(() => {
        if (itemCount !== 0) {
            setIsCartEmpty(false);
            return;
        }
        setIsCartEmpty(true);
    }, [itemCount]);

    return (
        <nav className='nav__container'>
            <div className='nav__cell'></div>
            <div className='nav__cell'>
                <img
                    src={Logo}
                    alt='our very good logo'
                    width='40'
                    height='40'
                />
                <p className='nav__font'>E-SHOP</p>
            </div>
            <div className='nav__cell'>
                <div className='nav__cart'>
                    <p>{itemCount}</p>
                    <img
                        style={
                            isCartEmpty
                                ? { backgroundColor: 'unset' }
                                : {
                                      backgroundColor: '#b3ffa5',
                                      borderRadius: '5px',
                                  }
                        }
                        id='cart_ico'
                        src={Cart}
                        alt='to cart'
                        width='30'
                        height='30'
                    />
                </div>
            </div>
        </nav>
    );
};

export { HeaderNav };
