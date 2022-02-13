import { Person } from 'domain/movie.interface';

const fullName = (person: Person): string =>
  `${ person.firstName }${ person.middleName ? ` ${ person.middleName }` : '' } ${ person.lastName }`;

export default fullName;