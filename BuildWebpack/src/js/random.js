

const getRandom = () => {
  return Math.random();
};

export const getRandomArbitrary = (min, max) => {
  return getRandom() * (max - min) + min;
};

export const getRandomInt = (min, max) => {
  return Math.floor(getRandom() * (max - min) + min);
};

export const getRandomIntInclusive = (min, max) => {
  return Math.floor(getRandom() * (max - min + 1) + min);
};
