import { Injectable } from '@angular/core';
import { HttpClinet } from '@angular/common/http';

// sample API call
const AllBankAPI = 'https://testbank.data.carddetails'

@Injectable()
export class ATMService {

    constructor(http: HttpClient) {

    }

    public searchForCard(cardNo: number) {
        this.http.post(AllBankAPI, { cardNo: cardNo }).map(data => data.json());
    }

    public sendOTPToUser(mobileNumber: number) {
        this.http.post('https://someapicall', { mobileNo }).map(res => res.json())
    }
}