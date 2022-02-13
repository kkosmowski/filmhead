export interface Person {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthday: string;
  gender: Gender;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Trans = 'trans',
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
  directors: Person[];
  genres: Genre[];
  releaseDate: string;
  staring: Person[];
}