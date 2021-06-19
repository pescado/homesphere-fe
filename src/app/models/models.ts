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


