import { Routes, Route } from 'react-router-dom';
import { CartModal } from './components/cart/CartModal';
import { HeaderNav } from './components/navigation/HeaderNav';
import Detailed from './pages/Detailed';
import { List } from './pages/List';
import { NotFound } from './pages/NotFound';
import { useAppSelector } from './redux/hooks';

function App() {
    const { showCart, cartItems } = useAppSelector((state) => state.cart);
    return (
        <>
            {showCart && <CartModal cartItems={cartItems} />}
            <HeaderNav />
            <Routes>
                <Route index element={<List />} />
                <Route path='item/:id' element={<Detailed />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
