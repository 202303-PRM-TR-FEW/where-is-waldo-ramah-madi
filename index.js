const example = [
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]];

const whereIsWaldo = (matrix) => {
  const initial = matrix[0][0]
  for(let i=0; i< matrix.length; i++){
       for(let j=0; j < matrix[i].length; j++){
           if(matrix[i][j] !== initial) return [i+1,j+1]   
        }
    }
  }


console.log(`Found Waldo in: `, whereIsWaldo(example))
/*

 
*/

/*
return the corrdinate [row, column] for the different char in a matrix 
full of same char, no matter the size of the matrix is.
*/