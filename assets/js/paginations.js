'use strict'

const readTable = document.getElementById("bookTable").getElementsByTagName("tbody")[0];

//itemPerPage;
const pagesNeeded = Math.ceil(readTable.rows.length / 6);
let startIndex = 0;
let endIndex = 6;

const pagination = (table) => {
    let currentPage = 1;

    const allRows = table.rows;
    //totalrow;
    const totalRow =  allRows.length;
    //console.log("totalRow "+ totalRow);

    if (currentPage < 1){
        currentPage = 1;
    }

    if (currentPage > totalRow){
        currentPage = totalRow;
    }
    

    

   for (let i = 0; i < allRows.length; i++){
    if ( i >= 0 && i < 6){
        allRows[i].classList.remove("inactive");
    }
    else{
        allRows[i].classList.add("inactive");
    }
   }

    //index
   
    //allRows[0].classList.add("inactive");
//console.log(allRows);
}

const createPagination = (pagesNeeded) => {
    console.log("pageNeeded " +pagesNeeded)
    for (let i =1; i <= pagesNeeded; i++){
        console.log(i);
    }
}
createPagination(pagesNeeded);
pagination(readTable);