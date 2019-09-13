
import { ATMCardInformation, SearchedCardResponse } from './ATMInterface';

export class ATM {
    public errorOnCardRead: string;
    public proceedwithCardForOTP: string;


    constructor(atmService: ATMService) {

    }

    ngOnInit() {
        form = new FormGroup({
            cardNo: new FormControl('', [Validators.required, Validators.minlength]),
            nameOnCard: new FormControl('', [Validators.required]),
            expiryDate: new FormControl('', [Validators.required, Validators.date])
        });
    }

    cardSubmitHandler = (form: FormGroup): void => {
        if (form.value !== null && form.value !== undefined) {
            let cardNo = form.value.cardNo;
            let nameOnCard = form.value.nameOnCard;
            let expiryDate = form.value.expiryDate;
            if (cardNo !== null && cardNo !== undefined) {
                const responseForCard: SearchedCardResponse = this.atmService.searchForCard(cardNo);
                if (cardNo === responseForCard.cardNo) {
                    //If card no is valid make call to API/database to get card details and if data is true then need to send OTP
                    if (nameOnCard === responseForCard.nameOnCard && expiryDate === responseForCard.expiryDate) {
                        this.proceedwithCardForOTP = 'we have sent an OTP to your registerd mobile no'
                    }
                }
                //else if card invalid return error 
                else {
                    this.errorOnCardRead = 'Card no is invalid. Please check your card number.'
                }
            }
        }
    }

    get cardNo() {
        return this.form.get('cardNo');
    }

    get nameOnCard() {
        return this.form.get('nameOnCard');
    }

    get expiryDate() {
        return this.form.get('expiryDate');
    }
}