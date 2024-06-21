import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewModule } from '@mobula/main-view';

import { RouterModule } from '@angular/router';
import { FooterModule } from '@mobula/footer';
import { HeaderModule } from '@mobula/header';

import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
        CommonModule,
        MainViewModule,
        RouterModule,
        FooterModule,
        HeaderModule,
    ],
    declarations: [LayoutComponent],
    exports: [LayoutComponent],
})
export class LayoutModule {}
