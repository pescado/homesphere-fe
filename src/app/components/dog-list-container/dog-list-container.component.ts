import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dog } from 'src/app/models/models';

@Component({
  selector: 'app-dog-list-container',
  templateUrl: './dog-list-container.component.html',
  styleUrls: ['./dog-list-container.component.scss'],
})
export class DogListContainerComponent implements OnInit {
  ourDogs: BehaviorSubject<Dog[]>;

  constructor() { }

  ngOnInit() {
  }
}
