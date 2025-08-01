import {isValidUsername} from "6pp"

export const usernameValidator = (username) => {
  if (!isValidUsername(username)) {
    return { isValid: false, errormessage: "Username is invalid" };
  }
  return { isValid: true };
};
