import { Component, OnInit } from '@angular/core';
import { IShotModel } from '../../interfaces/shot.model';
import { ShotService } from '../../services/shot.service';
import { PlaceholderService } from "../../services/placeholder.service";
import { IPlaceholderModel } from "../../interfaces/placeholder.model";

@Component({
    selector: 'shot-list',
    templateUrl: './shot-list.component.html',
    styleUrls: ['./shot-list.component.less']
})

export class ShotListComponent implements OnInit {
    
    shotsGrid: IShotModel[][];
    placeholdersGrid: IPlaceholderModel[][];

    public constructor(private shotService: ShotService, private placeholderService: PlaceholderService) { }

    ngOnInit(): void {
        this.getShots();
        this.getPlaceholders();
    }

    showDetails(id: number) {        
        this.findShot(id).ShowDetails = true;
    }

    hideDetails(id: number) {
        this.findShot(id).ShowDetails = false;
    }

    private getShots() {
        this.shotService.getShots()
            .subscribe(result => this.shotsGrid = this.buildGrid(result, 3));
    }

    private getPlaceholders() {      
        this.placeholderService.getPlaceholder()
            .subscribe(result => this.placeholdersGrid = this.buildGrid(result, 3));
    }

    private buildGrid(list: any, columns: number): any[] {

        // trim the list to 10 items for the sake of brevity
        if (list.length > 10) {
            list = list.splice(0, 10);
        }

        var grid: any[][] = [];

        for (var i = 0; i < list.length; i += columns) {
            var row: IPlaceholderModel[] = [];

            for (var j = 0; j < columns; j++) {
                var value: IPlaceholderModel = list[i + j];

                if (!value) {
                    break;
                }

                row.push(value);
            }
            grid.push(row);
        }

        return grid;
    }

    private findShot(id: number): IShotModel {
        // flatten shotGrid to 1d array for filtering
        let shotsList: IShotModel[] = [].concat.apply([], this.shotsGrid);

        return shotsList.filter(shot => shot.Id == id)[0];
    }
}