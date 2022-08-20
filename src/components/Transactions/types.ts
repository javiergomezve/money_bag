export interface Transaction {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    date: string;
    art: {
        icon: string;
        background: string;
    };
}

export interface TransactionSectionProps {
    data: Array<Transaction>;
}

export interface TransactionAviProps {
    icon: any;
    background: string;
}
