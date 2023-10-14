const example = [
  ["O", "O", "O", "P"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"]
];


const whereIsWaldo = (matrix) => {
  const initial = matrix[0][0];
  if(initial !== matrix[0][1] && matrix[0][1] === matrix[0][2]) return [1, 1]

  else{
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(initial !== matrix[i][j]) return [i+1, j+1]
    }
  }
}
};


console.log(`Found Waldo in: `, whereIsWaldo(example))
/*

 
*/

/*
return the corrdinate [row, column] for the different char in a matrix 
full of same char, no matter the size of the matrix is.
*/