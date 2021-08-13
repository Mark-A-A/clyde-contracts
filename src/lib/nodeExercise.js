export const questionOne = () => {
  return 0;
}

export const questionTwo = async () => {
  return await 2;
}

export const questionThree = async () => {
  return Promise.resolve(3);
}

export const questionFour = async () => {
  return Promise.reject(4);
}
