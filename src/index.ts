const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

export default function isValidABN(rawAbn: string | number): boolean {
  if (!rawAbn) {
    return false;
  }

  // strip non-alphanumeric characters
  const abn = rawAbn.toString().replace(/[^a-z\d]/gi, '');

  // check if length is 11 digits
  if (abn.length !== 11) {
    return false;
  }

  // apply ato check method
  let sum = 0;
  for (let position = 0; position < weights.length; position += 1) {
    const weight = weights[position];
    const digit = parseInt(abn[position], 10) - (position ? 0 : 1);
    sum += weight * digit;
  }

  const checksum = sum % 89;

  return checksum === 0;
}
