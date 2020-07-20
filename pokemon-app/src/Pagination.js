import React from "react";

export default function Pagination({ gotToNextPage, gotToPreviousPage }) {
  return (
    <div>
      {gotToPreviousPage && (
        <button onClick={gotToPreviousPage}>Previous</button>
      )}
      {gotToNextPage && <button onClick={gotToNextPage}>Next</button>}
    </div>
  );
}
