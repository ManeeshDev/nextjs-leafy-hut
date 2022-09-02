
export interface FoodCardProps {
    image: string;
    title: string;
    price: number;
    description?: string;
}

export interface Food {
    image: string;
    title: string;
    price: foodPrice;
    description?: string;
}

export interface foodPrice {
    sm: number;
    md: number;
    lg: number;
}
