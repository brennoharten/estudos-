class LinearAlgebra {

  transpose(a) {
    let c;
  
    if (a instanceof Vector) {

      c = new Vector(a.size());
      c.rows = a.cols;
      c.cols = a.rows
  
      for (let i = 1; i <= c.size; i++) {
      c.set(i, a.get(i));
      }
    } else if (a instanceof Matrix) {
      c = new Matrix(a.cols, a.rows);

      for(let j = 1; j <= c.cols; j++) {
       for(let i = 1 ; i <= c.rows; i++ ) {
          c.set(i,j, a.get(j, i))
        }
      }
    } else {
      throw "O parametro da função deve ser um objeto da classe vetor ou matriz."
    }
    return c 
  }

  plus(a,b) {
    //verifica se a e b são matrizes
    this.#isMatrix(a);
    this.#isMatrix(b);

    //Verifica se as matrizes são iguais
    this.#matrixesHasSameSize(a,b)
    
    let c = new Matrix(a.rows, a.cols);

    for(let i = 1; i <= c.rows; i++) {
      for(let j = 1 ; j <= c.cols; j++ ) {
        c.set(i,j, a.get(i, j) + b.get(i, j))
      }
    }
    return c 

  }
  
  times(a, b) {

    //verifica se b é uma matriz
    this.#isMatrix(b);

    let c = new Matrix(b.rows, b.cols);
    
    if(typeof a == "number"){      
      
      for(let i = 1; i <= c.rows; i++) {
        for(let j = 1 ; j <= c.cols; j++ ) {
          c.set(i,j, a * b.get(i, j))
        }
      }
    } else if(typeof a =='object' && a instanceof Matrix) {
      
      if(a.rows != b.rows || a.cols != b.cols) throw "As matrizes são incompatíveis."
      
      for(let i = 1; i <= c.rows; i++) {
        for(let j = 1 ; j <= c.cols; j++ ) {
          c.set(i,j, a.get(i, j) * b.get(i, j))
        }
      }
    } else {

      throw "O parâmetro a deve ser um escalar numérioco ou uma matriz."

    }
    return c 
  }

  div(a,b) {

    this.#isMatrix(a);
    this.#isMatrix(b);
    this.#matrixesHasSameSize(a, b);
    this.#matrixHasNullElement(b);

    let c = new Matrix(a.rows, a.cols);

    for(let i = 1; i <= c.rows; i++) {
      for(let j = 1 ; j <= c.cols; j++ ) {
        c.set(i,j, a.get(i, j) / b.get(i, j))
      }
    }
    return c 
  }

  dot(a,b){

    this.#isMatrix(a);
    this.#isMatrix(b);
    this.#matrixHasDotCompatibility(a, b);
    
    let c = new Matrix(a.rows, b.cols);

    for(let i = 1; i <= a.rows; i++) {
      for(let j = 1 ; j <= b.cols; j++ ) {
        for(let k = 1 ; k <= a.cols; k++ ) { 
          c.set(i,j, a.get(i, k) * b.get(k, j) + c.get(i, j));
        }  
      }
    }
    return c
  }

  solve(a) {
    this.#isMatrix(a);
    this.#matrixHasSolveCompatibility(a);
    
    
    //zerando a triangular inferior
    let c = this.gauss(a).matrix;

    //zerando a triangular superior
    for (let j = c.cols - 1; j >= 2; j --) {
      for (let i = j - 1; i >= 1; i --) {
        let k = (-1 * c.get(i,j)) / c.get(j,j);
        this.multiplyRowByScalarAndPlusRow(c, j, k, i);
      }
    }

    // Diagonal principal igual a 1
    for (let j = 1; j <= c.cols - 1; j ++) {
      this.multiplyRowByScalar(c, j, 1/ c.get(j, j));
    }

    let vector = new Vector(c.rows);
    for (let i = 1; i <= vector.size(); i ++) {
      vector.set(i, c.get(i,c.cols));
    }
    
    return vector;
    
  }

  det(a) {
    let c = this.gauss(a);
    let det = c.cof;

    for (let i = 1; i <= c.matrix.rows; i++) {
      det *= c.matrix.get(i, i);
    }
    return det
  }

  gauss(a){
    this.#isMatrix(a)
    this.#matrixHasGaussCompatibility(a)
    
    let c = {
      matrix: new Matrix(a.rows, a.cols, a.values.slice()),
      cof: 1

    }
    

    for (let j = 1; j <= c.matrix.rows; j++) {
      for (let i = j + 1; i <= c.matrix.rows; i++) {
        //verifica se o pivô é igual a zero
        //se sim troca por um elemento não nulo na msm coluna
        if (c.matrix.get(j, j) == 0) {
          for (let k = j + 1; k <= c.matrix.rows; k++) {
            if (c.matrix.get(k, j) != 0) {
              this.changeRows(c.matrix, j, k);
              c.cof *= -1
              break;
            }
          }
        }

        let k = (-1 * c.matrix.get(i,j)) / c.matrix.get(j,j);
        this.multiplyRowByScalarAndPlusRow(c.matrix, j, k, i);
      }
    }

    return c;
  }

  inverse(a) {
    this.#isMatrix(a)
    this.#matrixHasGaussCompatibility(a)
    
    let c = new Matrix(a.rows, a.cols); 
    
    //cria uma matriz identidade de A
    this.transformToIdentity(c)

    //começa a tranformação
    //zerando a triangular inferior
    for (let j = 1; j <= c.rows; j++) {
      for (let i = j + 1; i <= c.rows; i++) {
        //verifica se o pivô é igual a zero
        //se sim troca por um elemento não nulo na msm coluna
        if (a.get(j, j) == 0) {
          for (let k = j + 1; k <= c.rows; k++) {
            if (a.get(k, j) != 0) {
              this.changeRows(c, j, k);
              this.changeRows(a, j, k);
              break;
            }
          }
        }

        let k = (-1 * a.get(i,j)) / a.get(j,j);
        this.multiplyRowByScalarAndPlusRow(c, j, k, i);
        this.multiplyRowByScalarAndPlusRow(a, j, k, i);
      }
    }
    
    //zerando a triangular superior
    for (let j = c.cols ; j >= 2; j --) {
      for (let i = j - 1; i >= 1; i --) {
        let k = (-1 * a.get(i,j)) / a.get(j,j);
        this.multiplyRowByScalarAndPlusRow(c, j, k, i);
        this.multiplyRowByScalarAndPlusRow(a, j, k, i);
      }
    }

    
    // Diagonal principal igual a 1
    for (let j = 1; j <= c.cols ; j ++) {
      this.multiplyRowByScalar(c, j, 1/ a.get(j, j));
      this.multiplyRowByScalar(a, j, 1/ a.get(j, j));
    }
        
    return c
  }
  
  changeRows(a, ri, rj) {
    for (let j = 1; j <= a.cols; j++) {
      let aux = a.get(ri, j);
      a.set(ri, j, a.get(rj, j));
      a.set(rj, j, aux);
    }
  }

  multiplyRowByScalar(a, ri, k) {
    for (let j = 1; j <= a.cols; j++) {
      a.set(ri, j, k * a.get(ri,j));
    }
  }

  multiplyRowByScalarAndPlusRow(a, ri, k, rj) {
    for (let j = 1; j <= a.cols; j++) {
      a.set(rj, j, k * a.get(ri,j) + a.get(rj, j));
    }
  }

  transformToIdentity(a) {
    for (let i = 1; i < a.cols + 1; i++) {  
      a.set(i,i, 1)
      
    }
  }
  
  
  #isMatrix(a) {
    if(typeof a != "object" || !(a instanceof Matrix)) {
      throw "O parametro b deve ser uma matriz."
    }
  }

  #matrixHasNullElement(a) {
    for (let i = 0; i < a.values.lenght; i++) {
      if (a.values[i] == 0) {
        throw "A matriz b possui pelo menos um elemento nulo.";
      }
    }
  }
  
  #matrixesHasSameSize(a, b) {
    if(a.rows != b.rows || a.cols != b.cols) {
      throw "As matrizes passadas como parâmetro são incompatíveis!";
    }
  }

  #matrixHasDotCompatibility(a, b) {
    if (a.cols != b.rows) {
      throw "As matrizes passadas como parametro são imcompatíveis!";
    }
  }

  #matrixHasSolveCompatibility(a) {
    if (a.cols != a.rows + 1) {
      throw "A matriz passada como parametro é imcompatível!";
    }
  }

  #matrixHasGaussCompatibility(a) {
    if (a.cols >= a.rows + 1) {
      throw "A matriz passada como parametro é imcompatível!";
    }
  }
}




