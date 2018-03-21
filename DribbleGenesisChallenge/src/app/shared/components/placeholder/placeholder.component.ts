import { Component, Input } from '@angular/core';
import { IPlaceholderModel } from '../../interfaces/placeholder.model';

@Component({
    selector: 'placeholder',
    templateUrl: './placeholder.component.html',
    styleUrls: ['./placeholder.component.less']
})

export class PlaceholderComponent {
    @Input() placeholder: IPlaceholderModel;
}