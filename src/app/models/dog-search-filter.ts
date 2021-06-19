import { Breed, DogSize, Status } from "./models";

export interface DogSearchFilter {
    size?: DogSize[],
    hairLength?: string,
    hairColor?: string,
    breed?: Breed[],
    status?: Status[],
}