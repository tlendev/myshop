import { Routes, Route } from 'react-router-dom';
import { Item } from './pages/Item';
import { List } from './pages/List';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Routes>
                <Route index element={<List />} />
                <Route path='item/:id' element={<Item />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
