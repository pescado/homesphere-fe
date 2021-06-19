import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Dog } from 'src/app/models/models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent extends BaseComponent implements OnInit {

  @Input() public dogs: Dog[];
  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
  }

}
