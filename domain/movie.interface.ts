export interface Person {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthday: string;
  gender: Gender;
  occupation: Occupation;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Trans = 'trans',
}

export enum Occupation {
  Actor = 'actor',
  Director = 'director',
}

export enum Genre {
  Action = 'action',
  Adventure = 'adventure',
  Animation = 'animation',
  Comedy = 'comedy',
  Crime = 'crime',
  Drama = 'drama',
  Family = 'family',
  Fantasy = 'fantasy',
  Gangster = 'gangster',
  Historical = 'historical',
  Horror = 'horror',
  Mystery = 'mystery',
  Psychological = 'psychological',
  Romance = 'romance',
  SciFi = 'sci-fi',
  Thriller = 'thriller',
  Western = 'western',
  War = 'war',
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  directors: number[];
  genres: Genre[];
  releaseDate: string;
  cast: number[];
}