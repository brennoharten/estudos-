const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener("change", function (event) {
  const files = event.target.files;

  for (var f = 0; f < files.length; f++) {
    
    let file = files.item(f);

    if (file) {
      let reader = new FileReader(file);
      let firstLine = true;

      reader.onload = function () {
        let lines = reader.result.split("\n");
        let matrix;

        for (let i = 0; i < lines.length; i++) {
          if (!lines[i].startsWith("%" ) && lines[i] != "") {
            let aux = lines[i].split(" ");
            if (firstLine) {
              matrix = new Matrix(parseInt(aux[0]), parseInt(aux[1]));
              firstLine = false;
            } else {
              matrix.set(parseInt(aux[0]), parseInt(aux[1]), parseInt(aux[2]));

            }
          }
        }

        let la = new LinearAlgebra();

        let start = Date.now();
        let result = la.solve(matrix);
        let end = Date.now();
        let elapsedTime = end - start;
        //matrix.show();
        //result.show();

        console.log(`[FILE: ${file.name}, ROWS: ${matrix.rows}] Elapsed Time: ${elapsedTime} ms`);
      };
      reader.readAsText(file);
    }
  }
});
