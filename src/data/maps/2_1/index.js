const tiles = [
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 0, 0, 4, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 0, 2, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 4, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
  [7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7, 7, 7, 0, 0, 0],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 20, 9, 20, 7, 7, 7, 0, 3, 0],
];

const monsters = [
  {
    type: 'imp',
    position: [ 4, 5 ]
  },
  {
    type: 'imp',
    position: [ 5, 7 ]
  },
  {
    type: 'imp',
    position: [ 3, 8 ]
  }
];

const stairs = {
  down: '1_5',
  up: '2_2'
}

const message = {
  title: 'This is the Title!',
  body: 'Here is a sweet body...'
}

export default {
  tiles,
  monsters,
  stairs,
  message
};
