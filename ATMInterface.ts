interface ATMCardInformation {
    cardNo: number;
    nameOnCard: string;
    expiryDate: string;
}

interface SearchedCardResponse {
    cardNo: number;
    message?: string;
    isValidCard?: boolean;
    bankName?: string;
    cardType?: string;
    nameOnCard?: string;
    expiryDate?: string;
}

