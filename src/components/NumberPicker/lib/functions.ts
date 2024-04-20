export function randomUniqueNum(range: number, outputCount: number) {
  const arr = [];
  for (let i = 1; i <= range; i++) {
    arr.push(i);
  }

  const result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}

export const getRes = (
  userFirstNumbers: number[],
  userSecondNumbers: number[]
) => {
  const fNumbers = randomUniqueNum(19, 8);
  let fMatches = 0;

  for (let i = 0; i < userFirstNumbers.length; i++) {
    if (fNumbers.includes(userFirstNumbers[i])) {
      fMatches++;
    }
  }

  console.log("fMatches", fMatches);

  if (fMatches < 3) {
    return false;
  }

  if (fMatches >= 4) {
    return true;
  }

  const sNumbers = randomUniqueNum(3, 1);
  let sMatches = 0;

  for (let i = 0; i < userSecondNumbers.length; i++) {
    if (sNumbers.includes(userSecondNumbers[i])) {
      sMatches++;
    }
  }

  if (sMatches > 1) {
    return true;
  }

  return false;
};
