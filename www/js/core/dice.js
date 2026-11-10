export const DICE = {
  standardD6: {
    faces: [
      {
        value: 1,
        label: "1"
      },
      {
        value: 2,
        label: "2"
      },
      {
        value: 3,
        label: "3"
      },
      {
        value: 4,
        label: "4"
      },
      {
        value: 5,
        label: "5"
      },
      {
        value: 6,
        label: "6"
      }
    ]
  },

  explore: {
    faces: [
      {
        value: "1",
        label: "1"
      },
      {
        value: "1",
        label: "1"
      },
      {
        value: "1",
        label: "1"
      },
      {
        value: "2",
        label: "2"
      },
      {
        value: "2-skull",
        label: "{explore2Skull}"
      },
      {
        value: "3-skull",
        label: "{explore3Skull}"
      }
    ]
  }
};

export function rollDie(die) {
  if (!die?.faces?.length) {
    throw new Error("Cannot roll a die without faces.");
  }

  const index = Math.floor(
    Math.random() * die.faces.length
  );

  return die.faces[index];
}