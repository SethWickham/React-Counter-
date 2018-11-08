export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const addNumber = () => (
  {
      type: 'ADD_NUMBER'
  }
)

export const numberChanged = (number) => (
  {
      type: 'NUMBER_CHANGED',
      number
  }
)


