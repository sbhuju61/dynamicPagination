"use strict";

const readTable = document
  .getElementById("bookTable")
  .getElementsByTagName("tbody")[0];

const itemPerPage = 6;
const pagesNeeded = Math.ceil(readTable.rows.length / itemPerPage);
let currentPage = 1;

const updatePagination = currentPage => {
  const allRows = table.rows;

  if (currentPage < 1) {
    currentPage = 1;
  }

  if (currentPage > pagesNeeded) {
    currentPage = pagesNeeded;
  }

  let startIndex = (currentPage - 1) * itemPerPage + 1;
  let endIndex = startIndex + itemPerPage - 1;
  //console.log("startIndex " + startIndex);
  //console.log("endIndex " + endIndex);

  for (let i = 0; i < allRows.length; i++) {
    if (i >= startIndex - 1 && i < endIndex) {
      allRows[i].classList.remove("inactive");
    } else {
      allRows[i].classList.add("inactive");
    }
  }
};

const createPagination = pagesNeeded => {
  const ul = document.querySelector("nav > ul");
  const prev = document.createElement("li");
  prev.innerHTML =
    "<li> <a href='#' onclick='prev()'>  <span aria-hidden='true'>«</span> </a></li>";
  ul.appendChild(prev);

  for (let i = 1; i <= pagesNeeded; i++) {
    let li = document.createElement("li");

    let a = document.createElement("a");
    a.href = "#";
    a.innerText = i;
    a.id = `page${i}`;
    a.onclick = event => {
      currentPage = event.target.innerText;
      updatePagination(currentPage);
    };
    li.appendChild(a);
    ul.appendChild(li);
  }
  const next = document.createElement("li");
  next.innerHTML =
    "<li> <a href='#' onclick='next()'>  <span aria-hidden='true'>»</span> </a></li>";
  ul.appendChild(next);
};

const prev = () => {
  if (currentPage > 1) {
    currentPage -= 1;
    updatePagination(currentPage);
  }
};

const next = () => {
  if (currentPage < pagesNeeded) {
    currentPage += 1;
    updatePagination(currentPage);
  }
};

createPagination(pagesNeeded);
updatePagination(currentPage);
