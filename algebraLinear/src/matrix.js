class Matrix{
  
  constructor(rows,cols,values){
    this.rows = rows;
    this.cols = cols;
    
    if(values == undefined) {
      this.values = [];
      for (let i = 0; i < this.rows * this.cols; i++) {
        this.values.push(0)
      }

    } else {
      if(values.length == this.rows * this.cols) {
        this.values = values;
      } else {throw "A quantidade de elementos é incompativel com o tamanho da matriz."}
    }
  }

  get(i,j) {
    return this.values[this.getIndex(i,j)]
  }

  set(i,j, value) {
    this.values[this.getIndex(i,j)] = value
  }

  getIndex(i,j) {
    if (i < 1 || i > this.rows) throw "O índice da linha não corresponde ao tamanho da matriz"
    if (j < 1 || j > this.cols) throw "O índice da coluna não corresponde ao tamanho da matriz"

    return (j - 1) + (i - 1) * this.cols
  }

  show() {
    for (let i = 1; i <= this.rows; i++) {
      let line = "";

      switch(i) {
        case 1:
          line += String.fromCharCode(9121) + " ";
          break;

        case this.rows:
          line += String.fromCharCode(9123) + " ";
          break;

        default:
          line += String.fromCharCode(9122) + " ";
          
      }
      
      for (let j = 1; j <= this.cols; j++) {
        if (this.get(i, j) >=0) {
          line += " " + this.get(i, j).toFixed(4) + "  ";
        } else {
          line += this.get(i, j).toFixed(4) + "  ";
        }
      }

      switch(i){
        case 1:
          line += String.fromCharCode(9124); 
          break;
        
        case this.rows:
          line += String.fromCharCode(9126) + "\n\n";
          break;

        default:
          line += String.fromCharCode(9125);    
      }
    }  
  }
}

