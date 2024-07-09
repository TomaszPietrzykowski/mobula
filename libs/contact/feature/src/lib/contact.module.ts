import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

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
    HttpClientModule,
],
})
export class ContactModule {}
