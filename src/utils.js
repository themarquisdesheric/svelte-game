export const fisherYatesShuffle = (owls) => {
  const shuffled = [...owls];
  // walk the array in reverse order and swap each element with a random one before it
  for (let i = shuffled.length - 1; i > 0; i--) {
    // get random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1)); 
    // swap elements
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const initializeOwls = (numberOfOwls) => {
  const owls = [];

  for (let i = 0; i < numberOfOwls; i++) {
    const owl = {
      id: i,
      winningOwl: (i === 0)
    };

    if (i < 1) {
      owl.color = 'gold';
    } else if (i < 3) {
      owl.color = 'red';
    } else if (i < 6) {
      owl.color = 'blue';
    } else if (i < 9) {
      owl.color = 'green';
    } else if (i < 12) {
      owl.color = 'purple';
    } else {
      owl.color = 'transparent';
    }
    
    owls[i] = owl;
  }

  return fisherYatesShuffle(owls);
};
