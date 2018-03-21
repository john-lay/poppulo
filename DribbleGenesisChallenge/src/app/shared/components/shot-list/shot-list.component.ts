import { Component, OnInit } from '@angular/core';
import { IShotModel } from '../../interfaces/shot.model';
import { ShotService } from '../../services/shot.service';
import { PlaceholderService } from "../../services/placeholder.service";
import { IPlaceholderModel } from "../../interfaces/placeholder.model";

@Component({
    selector: 'shot-list',
    templateUrl: './shot-list.component.html'
})

export class ShotListComponent implements OnInit {
    
    shots: IShotModel[] = this.shotService.getShots();    
    placeholdersGrid: IPlaceholderModel[][];

    public constructor(private shotService: ShotService, private placeholderService: PlaceholderService) { }

    ngOnInit(): void {
        this.getPlaceholders();
    }

    showDetails(i: number) {
        this.shots[i].ShowDetails = true;
    }

    hideDetails(i: number) {
        this.shots[i].ShowDetails = false;
    }

    private getPlaceholders() {      
        this.placeholderService.getPlaceholder()
            .subscribe(result => this.buildPlaceholdersGrid(result));
    }

    private buildPlaceholdersGrid(placeholdersList: IPlaceholderModel[]) {

        // trim the list to 10 items for the sake of brevity
        var list = placeholdersList.splice(0, 10);

        var grid: IPlaceholderModel[][] = [];

        for (var i = 0; i < list.length; i+= 3) {
            var row: IPlaceholderModel[] = [];

            for (var j=0; j<3; j++) {
                var value: IPlaceholderModel = list[i + j];

                if (!value) {
                    break;
                }

                row.push(value);
            }
            grid.push(row);
        }

        this.placeholdersGrid = grid;
    }
}