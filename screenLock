const pad = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']]

const isSmallLeftRightPossible = ({ xDiff, yDiff }) => xDiff + yDiff === 1

const isSmallDiagonalPossible = ({ xDiff, yDiff }) =>
  (xDiff === 1 && yDiff === 1) ||
  (xDiff === 1 && yDiff === 2) ||
  (xDiff === 2 && yDiff === 1)

const isLeapLeftRightPossible = ({ xDiff, yDiff, x, y, usedDots }) => {
  if (xDiff === 2 && yDiff === 0) {
    return usedDots.includes(pad[1][y])
  }
  if (xDiff === 0 && yDiff === 2) {
    return usedDots.includes(pad[x][1])
  }
  return false
}

const isLeapDiagonalPossible = ({ xDiff, yDiff, usedDots }) =>
  xDiff === 2 && yDiff === 2 && usedDots.includes(pad[1][1])

const countPatternsFrom = (dot, length, usedDots = [dot]) => {
  if (length < 1 || length > 9) return 0
  if (length === 1) return 1

  const availablePad = pad.map((row) =>
    row.map((d) => (usedDots.includes(d) ? '' : d))
  )
  const currentDotCoords = pad.reduce(
    (acc, row, y) =>
      acc
        ? acc
        : row.reduce(
            (a, letter, x) => (a ? a : letter === dot ? { x, y } : undefined),
            acc
          ),
    undefined
  )

  const nextPossibleDots = availablePad.reduce(
    (acc, row, y) =>
      row.reduce((a, letter, x) => {
        if (!letter) return a
        const xDiff = Math.abs(x - currentDotCoords.x)
        const yDiff = Math.abs(y - currentDotCoords.y)

        if (
          isSmallLeftRightPossible({ xDiff, yDiff }) ||
          isSmallDiagonalPossible({ xDiff, yDiff }) ||
          isLeapLeftRightPossible({ xDiff, yDiff, x, y, usedDots }) ||
          isLeapDiagonalPossible({ xDiff, yDiff, usedDots })
        ) {
          return [...a, letter]
        }

        return a
      }, acc),
    []
  )

  return nextPossibleDots.reduce(
    (acc, nextDot) =>
      acc + countPatternsFrom(nextDot, length - 1, [...usedDots, nextDot]),
    0
  )
}
