const getRandomInt = (max = 2) =>
    Math.floor(Math.random() * max);

export const getRandomCoordinate = () => 
  getRandomInt() ? 'x' : 'y';

export const getRandomPolarity = (duration) => 
  getRandomInt() ? duration : -duration;

const fisherYatesShuffle = (owls) => {
  const shuffled = [...owls];
  // walk the array in reverse order and swap each element with a random one before it
  for (let i = shuffled.length - 1; i > 0; i--) {
    // get random index from 0 to i
    const j = getRandomInt(i + 1); 
    // swap elements
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const getRandomOwls = (numberOfOwls) => {
  const colors = ['hsl(57, 73%, 65%)', 'hsl(0, 73%, 65%)', 'hsl(199, 73%, 65%)', 'hsl(105, 73%, 65%)', 'hsl(285, 73%, 65%)'];
  const owls = [];

  for (let i = 0; i < numberOfOwls; i++) {
    const randomInt = getRandomInt(colors.length);
    const owl = {
      id: i,
      color: colors[randomInt]
    };

    owls[i] = owl;
  }

  return owls;
};

export const initializeOwls = (numberOfOwls) => {
  const owls = [];

  for (let i = 0; i < numberOfOwls; i++) {
    const owl = {
      id: i,
      winningOwl: (i === 0)
    };

    if (i < 1) {
      // yellow
      owl.color = 'hsl(57, 73%, 65%)';
    } else if (i < 3) {
      // red
      owl.color = 'hsl(0, 73%, 65%)';
    } else if (i < 6) {
      // blue
      owl.color = 'hsl(199, 73%, 65%)';
    } else if (i < 9) {
      // green
      owl.color = 'hsl(105, 73%, 65%)';
    } else if (i < 12) {
      // purple
      owl.color = 'hsl(285, 73%, 65%)';
    } else {
      owl.color = 'transparent';
    }
    
    owls[i] = owl;
  }

  return fisherYatesShuffle(owls);
};
