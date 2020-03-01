"use strict";

const readTable = document
  .getElementById("bookTable")
  .getElementsByTagName("tbody")[0];

//itemPerPage;
const itemPerPage = 6;
const pagesNeeded = Math.ceil(readTable.rows.length / itemPerPage);

let currentPage = 2;
const updatePagination = (currentPage) => {
  const allRows = table.rows;
  //totalrow;
  const totalRow = allRows.length;
  //console.log("totalRow "+ totalRow);

  if (currentPage < 1) {
    currentPage = 1;
  }

  if (currentPage > pagesNeeded) {
    currentPage = pagesNeeded;
  }
  let startIndex = (currentPage - 1) * itemPerPage + 1;;
  let endIndex = startIndex + itemPerPage -1;
  console.log("startIndex " + startIndex);
  console.log("endIndex " + endIndex);

  for (let i = 0; i < allRows.length; i++) {
    if (i >= startIndex-1 && i < endIndex) {
      allRows[i].classList.remove("inactive");
    } else {
      allRows[i].classList.add("inactive");
    }
  }
};

const createPagination = pagesNeeded => {
  const ul = document.querySelector("nav > ul");

  for (let i = 1; i <= pagesNeeded; i++) {
    let li = document.createElement("li");

    let a = document.createElement("a");
    a.href = "#";
    a.innerText = i;
    a.id = `page${i}`;
    a.onclick= (event) => {
        currentPage = event.target.innerText;
        updatePagination(currentPage)
    }
    li.appendChild(a);
    ul.appendChild(li);
  }
};

const prev = () => {
  currentPage -= 1;
  updatePagination(currentPage);
};

const next = () => {
  currentPage += 1;
  updatePagination(currentPage);
};

createPagination(pagesNeeded);
updatePagination(currentPage);
