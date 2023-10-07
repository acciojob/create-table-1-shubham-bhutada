function insert_Row() {
    //Write your code here
   let row = document.createElement("tr");
   let col1 = document.createElement("td");
   let col2 = document.createElement("td");
	col1.textContent = "New Cell1";
	col2.textContent = "New Cell2";
	row.appendChild(col1);
	row.appendChild(col2);
	const table = document.getElementById("sampleTable");
  table.insertBefore(row, table.children[0]);
  
}
