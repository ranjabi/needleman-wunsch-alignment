function run(up = 'ATGCT', left = 'AGCT') {
  let input = up
  var startTime = performance.now()
  // match go diagonal
  // not match go highest neighbor
  let solution = ''

  const matchScore = 1
  const mismatchScore = -1
  const gapScore = -2

  const filledColor = 'green-400'

  const row = up.length + 1 // 6
  const col = left.length + 1 // 5

  // create up+1 * left+1 array
  let arr = Array.from(Array(col), () => new Array(row))

  class Item {
    constructor(letter, value) {
      this.letter = letter
      this.value = value
      this.color = 'white'
    }
  }

  // initialization
  arr[0][0] = new Item('_', 0)

  for (let i = 1; i < row; i++) {
    arr[0][i] = new Item(up[i - 1], arr[0][i - 1].value + gapScore)
  }

  for (let j = 1; j < col; j++) {
    arr[j][0] = new Item(left[j - 1], arr[j - 1][0].value + gapScore)
  }

  // scoring
  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      // neighbor + gap
      let leftVal = arr[i][j - 1].value + gapScore
      let upVal = arr[i - 1][j].value + gapScore
      const isMatch = () => {
        if (arr[i][0].letter === arr[0][j].letter) {
          return matchScore
        } else {
          return mismatchScore
        }
      }
      let diagVal = arr[i - 1][j - 1].value + isMatch()
      // console.log(leftVal, upVal, diagVal)
      arr[i][j] = new Item('_', Math.max(leftVal, upVal, diagVal))
    }
  }

  const rows = left.length + 1 // 5
  const cols = up.length + 1 // 6

  arr[rows - 1][cols - 1].color = filledColor

  function traceback(i, j) {
    if (i > 0 && j > 0) {
      if (arr[i][0].letter === arr[0][j].letter) {
        arr[i][j].color = filledColor
        // console.log(i, j, 'match diag')
        solution += arr[i][0].letter
        traceback(i - 1, j - 1)
      } else {
        let diagVal = arr[i - 1][j - 1].value
        let leftVal = arr[i][j - 1].value
        let upVal = arr[i - 1][j].value
        if (diagVal >= leftVal && diagVal >= upVal) {
          // set diag val to green
          arr[i][j].color = filledColor
          // console.log(i, j, 'mismatch diag')
          traceback(i - 1, j - 1)
          solution += arr[i][0].letter
        } else if (leftVal >= diagVal && leftVal >= upVal) {
          // set left val to green
          arr[i][j].color = filledColor
          // console.log(i, j, 'gap left')
          solution += '-'
          traceback(i, j - 1)
        } else if (upVal >= diagVal && upVal >= leftVal) {
          arr[i][j].color = filledColor
          // console.log(i, j, 'gap up')
          solution += '-'
          traceback(i - 1, j)
        }
      }
    } else {
      arr[i][j].color = filledColor
      console.log(i, j, 'source')
    }
  }

  traceback(left.length, up.length)
  let finalSolution = solution.split('').reverse().join('')
  var endTime = performance.now()
  let runtime = endTime-startTime
  console.log(up.length)
  return { arr, input, finalSolution, runtime }
}

export default { run }