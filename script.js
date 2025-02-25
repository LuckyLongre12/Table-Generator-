function Generate() {
    let num = document.getElementById("num").value;
    let tableContainer = document.getElementById("multiplicationTable");

    if (num === "" || num <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    tableContainer.innerHTML = ""; // Clear previous table

    for (let i = 1; i <= 10; i++) {
        let row = tableContainer.insertRow();
        let cell = row.insertCell();
        cell.textContent = `${num} × ${i} = ${num * i}`;
    }
}
