
import { ATMCardInformation, SearchedCardResponse } from './ATMInterface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ATM {
    public errorOnCardRead: string;
    public proceedwithCardForOTP: string;

    constructor(atmService: ATMService) {
        ATMInfoForm = new FormGroup({
            cardNo: new FormControl('', [Validators.required, Validators.minlength]),
            nameOnCard: new FormControl('', [Validators.required]),
            expiryDate: new FormControl('', [Validators.required, Validators.date])
        });

        otpForm = new FormGroup({
            otpNo: new FormControl('', [Validators.required, Validators.minlength])
        });
    }

    ngOnInit() {
        // this is good place for Redux/Observable programming operation
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


    otpSubmitHandler = (form: FormGroup): boolean => {
        if (form.value !== null && form.value !== undefined) {
            let otp = form.value.otp;
            if (otp !== null && otp !== undefined) {
                // need to proceed if data is matched from database
            }
        }
    }

    get cardNo(): number {
        return this.form.get('cardNo');
    }

    get nameOnCard(): string {
        return this.form.get('nameOnCard');
    }

    get expiryDate(): string {
        return this.form.get('expiryDate');
    }

    ngOnDestroy() {
        // this is good place for unsubscribe the observable to save the memory when component is not in use
    }
}