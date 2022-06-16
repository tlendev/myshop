export interface Item {
    uid: string;
    name: string;
    priceInPLN: number;
    quantity: number;
}

export interface DetailedItem {
    uid: string;
    name: string;
    priceInPLN: number;
    quantityLeft: number;
    description: string;
    imagePath: string;
}
