import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ItemDescription } from '../components/detailed/ItemDescription';
import { useAppSelector } from '../redux/hooks';
import { DetailedItem } from '../types';

type Props = {};

const Detailed = (props: Props) => {
    const params = useParams();
    const navigate = useNavigate();
    const shopItems = useAppSelector((state) => state.shop.shopItems);
    // due to how useEffect works a dummy item is set as default state to prevent react from throwing; this item is never displayed as if there is no real item, clinet will be redirected
    const [currentItem, setCurrentItem] = useState<DetailedItem | undefined>({
        uid: '',
        name: '',
        description: '',
        imagePath: '',
        priceInPLN: 0,
        quantityLeft: 0,
    });
    useEffect(() => {
        if (!shopItems.find((item) => item.uid === params.id)) {
            navigate('/*');
        }
        setCurrentItem(shopItems.find((item) => item.uid === params.id));
    }, []);

    return (
        <section className='container'>
            <ItemDescription item={currentItem!} />
            <Link to={'/'}>back to home</Link>
        </section>
    );
};

export { Detailed };
