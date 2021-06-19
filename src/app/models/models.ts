export interface Dog {
  size: DogSize,
  hairLength: string,
  hairColor: string,
  breed: Breed,
  status: Status,
}

export enum Breed {
  shepherd = 'Shepherd',
  mutt = 'Mutt',
  terrier = 'Terrier',
  beagle = 'Beagle',
  retriever = 'Retriever'
}

export enum DogSize {
  small = 'Small',
  medium = 'Medium',
  large = 'Large'
}

export enum Status {
  newlyArrived = 'Newly Arrived',
  receivedShots = 'Received Shots',
  examCompleted = 'Exam Completed',
  foundHuman = 'Found Human',
  readyToTakeHome = 'Ready to Take Home'
}

export const dogs: Dog[] = [
  { size: DogSize.small, hairLength: 'short', hairColor: 'brown', breed: Breed.terrier, status: Status.receivedShots },
  { size: DogSize.medium, hairLength: 'long', hairColor: 'tan', breed: Breed.mutt, status: Status.examCompleted },
  { size: DogSize.large, hairLength: 'long', hairColor: 'black', breed: Breed.shepherd, status: Status.newlyArrived },
  { size: DogSize.small, hairLength: 'short', hairColor: 'multi', breed: Breed.beagle, status: Status.foundHuman },
  { size: DogSize.large, hairLength: 'long', hairColor: 'golden', breed: Breed.retriever, status: Status.examCompleted },
  { size: DogSize.medium, hairLength: 'long', hairColor: 'brown', breed: Breed.shepherd, status: Status.receivedShots },
  { size: DogSize.medium, hairLength: 'short', hairColor: 'black', breed: Breed.retriever, status: Status.receivedShots },
  { size: DogSize.small, hairLength: 'short', hairColor: 'brown', breed: Breed.beagle, status: Status.receivedShots },
]

