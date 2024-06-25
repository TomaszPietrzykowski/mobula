import { Component, Inject } from '@angular/core';
import { MOBULA_ENV } from '@mobula/environment';
import { MobulaEnvironment } from '@mobula/model';

@Component({
    selector: 'mobula-featured',
    templateUrl: './featured.component.html',
    styleUrl: './featured.component.scss',
})
export class FeaturedComponent {
    constructor(@Inject(MOBULA_ENV) private config: MobulaEnvironment) {
        console.log(config);
    }
}
