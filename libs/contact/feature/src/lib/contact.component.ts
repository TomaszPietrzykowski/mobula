/* eslint-disable no-debugger */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mobula-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
    text = 'initial';

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('/api/email').subscribe({
            next: (res) => {
                this.text = res.toString();
                console.log(res);
            },
            error: (e) => {
                console.log(e);
            },
        });
    }
}
