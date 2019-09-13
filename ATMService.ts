import { Injectable } from '@angular/core';
import { HttpClinet } from '@angular/common/http';

const AllBankAPI = 'https://testbank.data.carddetails'

@Injectable()
export class ATMService {

    public searchForCard(cardNo: number) {
        this.http.post(AllBankAPI, cardNo).map(data => data.json());
    }
}