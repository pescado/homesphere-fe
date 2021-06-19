import { DogSearchFilter } from "../models/dog-search-filter";
import { DogSize, Breed, Status } from "../models/models";
import { DogService } from "./dog-service";


describe('DogService', () => {
    let service: DogService;
    let mockDogs = [
        { size: DogSize.small, hairLength: 'short', hairColor: 'brown', breed: Breed.terrier, status: Status.receivedShots },
        { size: DogSize.medium, hairLength: 'long', hairColor: 'tan', breed: Breed.mutt, status: Status.examCompleted },
        { size: DogSize.large, hairLength: 'long', hairColor: 'black', breed: Breed.shepherd, status: Status.newlyArrived },
        { size: DogSize.small, hairLength: 'short', hairColor: 'multi', breed: Breed.beagle, status: Status.foundHuman },
        { size: DogSize.large, hairLength: 'long', hairColor: 'golden', breed: Breed.retriever, status: Status.examCompleted },
        { size: DogSize.medium, hairLength: 'long', hairColor: 'brown', breed: Breed.shepherd, status: Status.receivedShots },
        { size: DogSize.medium, hairLength: 'short', hairColor: 'black', breed: Breed.retriever, status: Status.receivedShots },
        { size: DogSize.small, hairLength: 'short', hairColor: 'brown', breed: Breed.beagle, status: Status.receivedShots },
    ];
    beforeEach(() => { service = new DogService(); });

    it('#get$ should return dogs', () => {
        service.dogs = mockDogs;
        (done: DoneFn) => {
            service.get$().subscribe(dogs => {
                expect(dogs.length).toEqual(mockDogs.length);
                done();
            })
        };
    });

    it('#get$ should return filtered dogs', () => {
        service.dogs = mockDogs;
        const searchFilter: DogSearchFilter = {
            breed: [Breed.beagle],
            status: [Status.receivedShots]
        }

        return (done: DoneFn) => {
            service.get$(searchFilter).subscribe(dogs => {
                expect(dogs.length).toEqual(mockDogs.length);
                done();
            })
        };
    });

    it('#applySearchFilter should filter dogs by breed', () => {
        const searchFilter: DogSearchFilter = {
            breed: [Breed.beagle],
            status: []
        }
        expect(service.applySearchFilter(searchFilter, mockDogs).length).toEqual(2)
    });
    it('#applySearchFilter should filter dogs by status', () => {
        const searchFilter: DogSearchFilter = {
            breed: [],
            status: [Status.receivedShots]
        }
        expect(service.applySearchFilter(searchFilter, mockDogs).length).toEqual(4)
    });

    it('#applySearchFilter should filter dogs by status and breed', () => {
        const searchFilter: DogSearchFilter = {
            breed: [Breed.beagle],
            status: [Status.receivedShots]
        }
        expect(service.applySearchFilter(searchFilter, mockDogs).length).toEqual(1)
    });
});