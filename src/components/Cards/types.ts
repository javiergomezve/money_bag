import { ImageSourcePropType } from 'react-native';

export interface CardProp {
    id: number;
    accountNo: string;
    balance: number;
    alias?: string;
    logo: ImageSourcePropType;
}

export interface CardSectionProps {
    data: Array<CardProp>;
}
