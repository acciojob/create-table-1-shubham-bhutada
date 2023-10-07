function insert_Row() {
    //Write your code here
   let row = document.createElement("tr");
  row.innerHTML = ` <td>New Cell1</td>
                    <td>New Cell2</td>`
  const table = document.getElementById("sampleTable");
  table.insertBefore(row, table.children[0]);
  
}
