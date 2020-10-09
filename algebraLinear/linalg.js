class LinearAlgebra {

  transpose(a) {
  
    let c;
  
    if (a instanceof Vector) {

      c = new Vector(a.size);
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
    
    let c = new Matrix(a.rows, a.cols, a.values.slice());
    
    //zerando a triangular inferior
    for (let j = 1; j <= c.rows; j++) {
      for (let i = j + 1; i <= c.rows; i++) {
        //verificar se o pivô é igual a zero
        //em caso de positivo substitui por uma linha 
        //com o elemento não nulo na mesma coluna.
        if (c.get(j, j) == 0) {
          for (let k = j + 1; k <= c.rows; k++) {
            if (c.get(k, j) != 0) {
              this.changeRows(c, j, k);
              break;
            }
          }
        //Verificar qnd uma coluna 
        //for toda igual a zero

        }

        let k = (-1 * c.get(i,j)) / c.get(j,j);
        this.miltiplyRowbyScalarAndPlusRow(c, j, k, i);
      }
    }
    
    //zerando a triangular superior
    for (let j = c.cols - 1; j >= 2; j --) {
      for (let i = j - 1; i >= 1; i --) {
        let k = (-1 * c.get(i,j)) / c.get(j,j);
        this.miltiplyRowbyScalarAndPlusRow(c, j, k, i);
      }
    }
    
    // Diagonal principal igual a 1
    for (let j = 1; j <= c.cols - 1; j ++) {
      this.multiplyRowByScalar(c, j, 1/ c.get(j, j));
    }

    let vector = new Vector(c.rows);
    for (let i = 1; i <= vector.size; i ++) {
      vector.set(i, c.get(i,c.cols));
    }
    
    return vector;
    
  }
  
  changeRows(a, ri, rj) {
    for (let j = 1; j <= a.cols; j++) {
      let aux = a.get(ri, j);
      a.set(ri, j, a.get(rj, j));
      a.set(ri, j, aux);
    }
  }

  multiplyRowByScalar(a, ri, k) {
    for (let j = 1; j <= a.cols; j++) {
      a.set(ri, j, k * a.get(ri,j));
    }
  }

  miltiplyRowbyScalarAndPlusRow(a, ri, k, rj) {
    for (let j = 1; j <= a.cols; j++) {
      a.set(ri, j, k * a.get(ri,j) + a.get(rj,j));
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
}




