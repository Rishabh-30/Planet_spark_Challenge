function multiplyMatrices() {
    // Get matrix dimensions
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);
    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);


   // Validate dimensions for multiplication
    if (colsA !== rowsB) {
        alert("Matrix multiplication not possible. Columns of Matrix A must be equal to rows of Matrix B.");
        return;
    }

    // Perform matrix multiplication
    const matrixA = []; // Matrix A
    const matrixB = []; // Matrix B
    const result = []; // Result matrix

    // Initialize matrixA and matrixB with values from HTML input elements
    for (let i = 0; i < rowsA; i++) {
        matrixA[i] = [];
        for (let j = 0; j < colsA; j++) {
            matrixA[i][j] = parseInt(document.getElementById(`matrixA_${i}_${j}`).value);

        }
    }

    for (let i = 0; i < rowsB; i++) {
        matrixB[i] = [];
        for (let j = 0; j < colsB; j++) {
            matrixB[i][j] = parseInt(document.getElementById(`matrixB_${i}_${j}`).value);
        }
    }

    // Multiply matrices
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = "Matrix Multiplication Result:<br>" + result.map(row => row.join(' ')).join('<br>');
}

function generateMatrixA() {
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);


    const matrixContainer = document.getElementById('matrixContainerA');
    matrixContainer.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');
    table.id = 'matrixA';

    for (let i = 0; i < rowsA; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < colsA; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrixA_${i}_${j}`;
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    matrixContainer.appendChild(table);
}
function generateMatrixB() {
    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);


    const matrixContainer = document.getElementById('matrixContainerB');
    matrixContainer.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');
    table.id = 'matrixB';

    for (let i = 0; i < rowsB; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < colsB; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrixB_${i}_${j}`;
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    matrixContainer.appendChild(table);
}
