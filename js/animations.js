export const animateLeaves = (leaf1, leaf2, index) => {
  leaf1.style.transform = `translateX(${['-5', '5', '15', '30'][index]}px) translateY(-10px)`;
  leaf2.style.transform = `translateX(${-(index * 4)}px) translateY(4px)`;
};

export const resetLeaves = (leaf1, leaf2) => {
  leaf1.style.transform = `translateX(0) translateY(0)`;
  leaf2.style.transform = `translateX(0) translateY(0)`;
};
