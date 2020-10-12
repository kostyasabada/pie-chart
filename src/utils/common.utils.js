export const randomColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215).toString(16);
  const color = '0'.repeat(6 - randomNumber.length) + randomNumber;
  return color;
};
