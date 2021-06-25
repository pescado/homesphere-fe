import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DogHandlerController } from 'src/app/api/dogHandlerApi/dogHandlerController';
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
  dogsWithHandlers$;

  constructor(private dogService: DogService, private fb: FormBuilder, private dogHandlerController: DogHandlerController) {
    super();
  }

  ngOnInit() {
    this.ourDogs$ = this.currentSearchFilter$.pipe(switchMap(searchFilter =>
      this.dogService.get$(searchFilter)), this.takeUntilDestroyed());

    this.dogsWithHandlers$ = zip([this.ourDogs$, this.dogHandlerController.dogHandlers$]).pipe(
      map(([dogs, handlers]) => {
        return { dogs: dogs, handlers: handlers };
      })
    );

    // this.dogsWithHandlers$ = this.ourDogs$;

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
