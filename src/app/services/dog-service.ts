import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { DogSearchFilter } from "../models/dog-search-filter";
import { Breed, Dog, DogSize, Status } from "../models/models";
import { isArrayWithLength } from "../utils";


@Injectable({
    providedIn: 'root'
})
export class DogService implements FilterableEntityService<DogSearchFilter, Dog> {

    // TODO move this to a service call
    public dogs: Dog[] = [
        { size: DogSize.small, hairLength: 'short', hairColor: 'brown', breed: Breed.terrier, status: Status.receivedShots },
        { size: DogSize.medium, hairLength: 'long', hairColor: 'tan', breed: Breed.mutt, status: Status.examCompleted },
        { size: DogSize.large, hairLength: 'long', hairColor: 'black', breed: Breed.shepherd, status: Status.newlyArrived },
        { size: DogSize.small, hairLength: 'short', hairColor: 'multi', breed: Breed.beagle, status: Status.foundHuman },
        { size: DogSize.large, hairLength: 'long', hairColor: 'golden', breed: Breed.retriever, status: Status.examCompleted },
        { size: DogSize.medium, hairLength: 'long', hairColor: 'brown', breed: Breed.shepherd, status: Status.receivedShots },
        { size: DogSize.medium, hairLength: 'short', hairColor: 'black', breed: Breed.retriever, status: Status.receivedShots },
        { size: DogSize.small, hairLength: 'short', hairColor: 'brown', breed: Breed.beagle, status: Status.receivedShots },
    ]

    constructor() {
    }

    public get$(searchFilter?: DogSearchFilter): Observable<Dog[]> {

        // if endpoint is paginated on the backend pass search filter to BE service.
        //'of' to simulate an Http request.
        const request$ = of(this.dogs)

        return request$.pipe(catchError(() => of([] as Dog[])), map(response => searchFilter ? this.applySearchFilter(searchFilter, response) : response));
    }

    public applySearchFilter(searchFilter: DogSearchFilter, items: Dog[]): Dog[] {
        const filterFunctions: ((dog) => boolean)[] = [];
        if (isArrayWithLength(searchFilter.breed)) {
            filterFunctions.push((dog) => searchFilter.breed.indexOf(dog.breed) >= 0)
        }

        if (isArrayWithLength(searchFilter.status)) {
            filterFunctions.push((dog) => searchFilter.status.indexOf(dog.status) >= 0)
        }

        return filterFunctions.reduce((dogs, currentFilter) => {
            return dogs.filter(currentFilter);
        }, items)
    }
}

export interface FilterableEntityService<T, E> {
    get$: (searchFilter: T) => Observable<E[]>;
    applySearchFilter: (searchFilter: T, items: E[]) => E[];
}