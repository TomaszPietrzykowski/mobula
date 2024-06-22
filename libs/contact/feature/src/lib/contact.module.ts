import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { StylesModule } from '@mobula/styles';

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
    ],
})
export class ContactModule {}
