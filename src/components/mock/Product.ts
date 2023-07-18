export interface Product{
    id: number;
    isbn13: string;
    image: string;
    title: string;
    price: number;
    authors: string;
    year: number;
    description?: string;
    quantity?: number;
}
