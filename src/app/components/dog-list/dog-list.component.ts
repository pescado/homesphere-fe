import { Component, OnInit, Input } from '@angular/core';
import { Dog } from 'src/app/models/models';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
