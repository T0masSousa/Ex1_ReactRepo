import React, { useState } from "react";
import { useFetchCatsQuery } from "./catAPI";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const CatList = () => {
  const [page, setPage] = useState(1);
  const limit = 1;
  const order = "asc";
  const apiKey = process.env.REACT_APP_CAT_API_KEY;

  const {
    data: cats,
    error,
    isLoading,
  } = useFetchCatsQuery({ page, limit, order, apiKey });

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <ul>
        {cats &&
          cats.map((cat) => (
            <li key={cat.id}>
              <img src={cat.url} alt="Cat" width="200" />
            </li>
          ))}
      </ul>
      <button
        className="btn toggle-btn"
        style={{ marginLeft: "10px" }}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        <FaArrowLeftLong />
      </button>
      <button
        className="btn toggle-btn"
        style={{ marginLeft: "10px" }}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default CatList;
