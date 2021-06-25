export interface Dog {
  size: DogSize,
  hairLength: string,
  hairColor: string,
  breed: Breed,
  status: Status,
  yearsExperienceNeeded?: number,
  availableDogHandlers?: string
}

export interface DogHandler {
  name: string;
  status: string;
  yearsExperience: number;
}

export enum Breed {
  shepherd = 'Shepherd',
  mutt = 'Mutt',
  terrier = 'Terrier',
  beagle = 'Beagle',
  retriever = 'Retriever',
  borderCollie = 'Border Collie'
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


