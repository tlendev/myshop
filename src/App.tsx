import { Routes, Route } from 'react-router-dom';
import { HeaderNav } from './components/navigation/HeaderNav';
import { Detailed } from './pages/Detailed';
import { List } from './pages/List';
import { NotFound } from './pages/NotFound';
import './styles/app.css';

function App() {
    return (
        <>
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
