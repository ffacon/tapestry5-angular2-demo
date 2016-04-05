import {Component} from "angular2/core";

import { Travel } from './travel'


@Component({
    selector: 'travel-show',
    template: `
        <style>
            table#travel-show img {
                width: 400px;
                height: 300px;
            }
            table#travel-show td.label {
                width: 25%;
                text-align: right;
                color: #555;
            }
        </style>
        <div *ngIf="travel">
            <h2>Travel details:</h2>
            <table class="pure-table pure-table-bordered"  id="travel-show">
                <tbody>
                    <tr>
                        <td class="label">Place</td>
                        <td>{{travel.place}}</td>
                    </tr>
                    <tr [hidden]="!travel.country">
                        <td class="label">Country</td>
                        <td>{{travel.country}}</td>
                    </tr>
                    <tr [hidden]="!travel.year">
                        <td class="label">Year</td>
                        <td>{{travel.year}}</td>
                    </tr>
                    <tr>
                        <td class="label">Picture</td>
                        <td><img src="img/{{travel.img}}"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    directives: [],
    inputs: ['travel']
})
export class TravelShow {
    travel: Travel;
    constructor() {
    }
}
