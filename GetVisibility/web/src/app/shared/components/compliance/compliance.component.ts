import { Component, OnInit } from '@angular/core';
import { ComplianceService } from "../../services/compliance.service";
declare var Chart;

@Component({
    selector: 'compliance',
    templateUrl: './compliance.component.html',
    styleUrls: ['./compliance.component.less']
})

export class ComplianceComponent implements OnInit {

    public constructor(private complianceService: ComplianceService) { }

    ngOnInit() {
        this.getComplianceData();
    }

    private getComplianceData() {
        this.complianceService.getData()
            .subscribe(result => this.drawChart(result));
    }

    private drawChart(complianceData: number[]) {

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        complianceData[0],
                        100 - complianceData[0]
                    ],
                    backgroundColor: [
                        "#27e375",
                        "#4d4a44"
                    ],
                }, {
                    data: [
                        complianceData[1],
                        100 - complianceData[1]
                    ],
                    backgroundColor: [
                        "#f0bc43",
                        "#4d4a44"
                    ],
                }, {
                    data: [
                        complianceData[2],
                        100 - complianceData[2]
                    ],
                    backgroundColor: [
                        "#f54c62",
                        "#4d4a44"
                    ],
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    enabled: false
                }
            }
        };
        
        var ctx = (<any>document.getElementById("ChartArea")).getContext("2d");
        var myDoughnut = new Chart(ctx, config);
    }
}