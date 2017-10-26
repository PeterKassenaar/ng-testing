import {Component, OnInit} from '@angular/core';

@Component({
	selector   : 'app-e2e-cmp',
	templateUrl: './e2e-cmp.component.html',
	styleUrls  : ['./e2e-cmp.component.css']
})
export class E2eComponent implements OnInit {

	title: string = 'Example e2e testing component';
	points        = 1;

	plus1() {
		this.points++;
	}

	reset() {
		this.points = 0;
	}

	constructor() {
	}

	ngOnInit() {
	}

}
