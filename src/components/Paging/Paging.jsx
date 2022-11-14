/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import stl from "./Paging.module.css";

export default function Paging({ photosPerPage, photos, paging, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(photos / photosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={stl.navPagination}>
      <ul className={stl.pagination}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li
              className={currentPage === number ? stl.selected : stl.pagenr}
              key={number}
            >
              <a onClick={() => paging(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
