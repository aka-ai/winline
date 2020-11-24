const generateBoardWithId = () => {
  //each cell in the board has {id, color}
  const board = []
  for (let i = 0; i < 9; i++) {
    const arr = []
    for (let j = 0; j < 9; j++) {
      arr.push({ id: [i, j], color: null })
    }
    board.push(arr)
  }
  return board
}

const board = generateBoardWithId()

export default board