const intersperse = <T>(array: T[], separator: string): (T | string)[] => {
  return array.reduce((arr, nextItem) => arr.concat([separator, nextItem]), []).splice(1);
}

export default intersperse;