import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShotService } from '../../services/shot.service';
import { IShotDetailsModel } from '../../interfaces/shot-details.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'shot-details',
    templateUrl: './shot-details.component.html',
    styleUrls: ['./shot-details.component.less']
})

export class ShotDetailsComponent implements OnInit {
    
    shotDetails: IShotDetailsModel;

    public constructor(private route: ActivatedRoute, private shotService: ShotService) { }

    ngOnInit() {
        this.route.params.map(params => params['id'])
            .subscribe(id => this.getDetails(parseInt(id, 10)));
    }

    private getDetails(id: number) {
        this.shotService.getShotDetails(id)
            .subscribe(result => this.shotDetails = result);
    }
}