
export function validatePhoneNumber(phonenumber: string) {

  //check if the length of the number is 10

  if (phonenumber.length === 10 && phonenumber.charAt(0) === '0') {
    return "233" + phonenumber.slice(1)
  }

  return phonenumber;
}