import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DogSearchFilter } from 'src/app/models/dog-search-filter';
import { Breed, Dog, Status } from 'src/app/models/models';
import { DogService } from 'src/app/services/dog-service';
import { BaseComponent } from '../base.component';
@Component({
  selector: 'app-dog-list-container',
  templateUrl: './dog-list-container.component.html',
  styleUrls: ['./dog-list-container.component.scss'],
})
export class DogListContainerComponent extends BaseComponent implements OnInit {
  public ourDogs$: Observable<Dog[]>;
  public filterForm: FormGroup;
  public breedOptions = Breed
  public statusOptions = Status
  private currentSearchFilter$ = new BehaviorSubject<DogSearchFilter>(null);

  constructor(private dogService: DogService, private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.ourDogs$ = this.currentSearchFilter$.pipe(switchMap(searchFilter =>
      this.dogService.get$(searchFilter)), this.takeUntilDestroyed());

    this.filterForm = this.buildForm();
    this.filterForm.valueChanges.pipe(this.takeUntilDestroyed()).subscribe((formVal: DogSearchFilter) => {
      this.currentSearchFilter$.next(formVal)
    });
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      status: this.fb.control([]),
      breed: this.fb.control([])
    });
  }
}
