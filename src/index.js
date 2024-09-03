module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  
  let sortMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      let columnInd = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      sortMatrix.push(matrix[i][columnInd]);
    }
  }
  return sortMatrix
}
