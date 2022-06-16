import { v4 as uuid } from 'uuid';
import { DetailedItem } from '../types';

/**
 * Utility for mocking x amount of items
 * @param quantity amount of mocked items to create
 * @returnsA list of mocked items
 */
export const generateMock = (quantity: number) => {
    const mockItems: Array<DetailedItem> = [];
    for (let i = 0; i < quantity; i++) {
        const item = {
            uid: uuid(),
            name: `BMW ${i}`,
            quantityLeft: Math.floor(Math.random() * 1000) + 1,
            description: `A nice BMW ${i} with a nice unique description`,
            imagePath: `test${Math.floor(Math.random() * 3) + 1}.webp`,
            priceInPLN: Math.floor(Math.random() * 100000) + 1000,
        } as DetailedItem;
        mockItems.push(item);
    }
    return mockItems;
};
