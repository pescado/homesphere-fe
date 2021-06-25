import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DogHandler } from "src/app/models/models";

const dogHandlers: DogHandler[] = [
  { name: 'Jane', status: 'Full time', yearsExperience: 2 },
  { name: 'Bob', status: 'Part time', yearsExperience: 1 },
  { name: 'Waldo', status: 'Unknown', yearsExperience: 0 },
  { name: 'Jimbo', status: 'Full time', yearsExperience: 4 },
  { name: 'Glenda', status: 'Part time', yearsExperience: 3 }
];

@Injectable({
  providedIn: 'root'
})
export class DogHandlerController {
  dogHandlers$: Observable<DogHandler[]> = of(dogHandlers);
}