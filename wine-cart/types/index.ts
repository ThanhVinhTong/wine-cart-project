import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
}

export interface SearchCountryProps {
    country: string;
    setCountry: (country: string) => void;
}

export interface WineProps {
    wine_id: string;
    appellation: string;
    producer: string;
    region: string;
    country: string;
    vintage: number;
    wine_type: string;
    grape_variety: string;
    alcohol_content: number;
    volume: string;
    image_filename: string;
    price: number;
    description: string;
}

export interface AccountProps {
    user_name: string;
    email: string;
    password: string;
}

export interface FilterProps {
    producer: string;
    country: string;
    vintage: string;
    wine_type: string;
    limit: number;
}


export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export interface ListCartItem {
    id: number;
    isChoose: boolean;
    image: string;
    product: string;
    price: string;
}