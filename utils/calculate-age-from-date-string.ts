const calculateAgeFromDateString = (string: string): number => {
  const [birthYear, birthMonth, birthDay] = string.split('-').map(value => +value);
  const today = new Date();
  const [todayYear, todayMonth, todayDay] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];

  let yearDifference = todayYear - birthYear;

  if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
    return yearDifference - 1;
  }
  return yearDifference;
};

export default calculateAgeFromDateString;