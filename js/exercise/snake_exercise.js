const w = 6;
const h = 6;

function matrix(w, h) {
    let result = new Array(h).fill().map(() => new Array(w).fill('')),
        counter = 1,
        startCol = 0,
        endCol = w - 1,
        startRow = 0,
        endRow = h - 1;

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }

        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        } 

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }

    return result;
}

console.log(matrix(w, h));
