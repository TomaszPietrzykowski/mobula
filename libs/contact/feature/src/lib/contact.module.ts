import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { StylesModule } from '@mobula/styles';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ContactComponent,
            },
        ]),
        StylesModule,
        HttpClientModule,
    ],
})
export class ContactModule {}
