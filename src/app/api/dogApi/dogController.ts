import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Breed, Dog, DogSize, Status } from "src/app/models/models";

const dogs: Dog[] = [
  { size: DogSize.small, hairLength: 'short', hairColor: 'brown', breed: Breed.terrier, status: Status.receivedShots, yearsExperienceNeeded: 1 },
  { size: DogSize.medium, hairLength: 'long', hairColor: 'tan', breed: Breed.mutt, status: Status.examCompleted, yearsExperienceNeeded: 3 },
  { size: DogSize.large, hairLength: 'long', hairColor: 'black', breed: Breed.shepherd, status: Status.newlyArrived, yearsExperienceNeeded: 3 },
  { size: DogSize.small, hairLength: 'short', hairColor: 'multi', breed: Breed.beagle, status: Status.foundHuman, yearsExperienceNeeded: 0 },
  { size: DogSize.large, hairLength: 'long', hairColor: 'golden', breed: Breed.retriever, status: Status.examCompleted, yearsExperienceNeeded: 1 },
  { size: DogSize.medium, hairLength: 'long', hairColor: 'brown', breed: Breed.shepherd, status: Status.receivedShots, yearsExperienceNeeded: 1 },
  { size: DogSize.medium, hairLength: 'short', hairColor: 'black', breed: Breed.retriever, status: Status.receivedShots, yearsExperienceNeeded: 0 },
  { size: DogSize.small, hairLength: 'short', hairColor: 'brown', breed: Breed.beagle, status: Status.receivedShots, yearsExperienceNeeded: 0 },
  { size: DogSize.medium, hairLength: 'long', hairColor: 'multi', breed: Breed.borderCollie, status: Status.newlyArrived, yearsExperienceNeeded: 3 }
]

@Injectable({
  providedIn: 'root'
})
export class DogController {
  dogs$: Observable<Dog[]> = of(dogs);
}