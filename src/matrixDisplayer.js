export class matrixDisplayer{
    static createTable(tableData) {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        tableData.forEach(function (rowData) {
            var row = document.createElement('tr',);

            rowData.forEach(function (cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
                row.setAttribute("style","font-size:0.5rem;")
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        return table;

    }


}