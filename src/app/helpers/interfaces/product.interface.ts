export interface Product {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    dimensions: Dimensions;
    discountPercentage: number;
    id: number;
    images: string[];
    meta: Meta;
    minimumOrderQuantity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: any[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
    weight: number;
}
interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export interface ProductImage {
    src: string,
    selected: boolean
}
export interface InitialProductList {
    limit: number,
    products: Product[],
    skip: number,
    total: number
}