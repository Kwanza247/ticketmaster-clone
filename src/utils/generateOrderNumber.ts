import crypto from "crypto";

const generateOrderNumber = (): string => {
  const randomNumber = Math.floor(Math.random() * 90 + 10);
  

  const randomLetters = crypto.randomBytes(5)
    .toString("base64url") // Safe URL characters, no +, /, or =
    .substring(0, 5)
    .toUpperCase();

  return `${randomNumber}-${randomLetters}/TM1`;
};

export default generateOrderNumber;


