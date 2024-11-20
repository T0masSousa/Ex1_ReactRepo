import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats, incrementPage, decrementPage } from "./catSlice";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const CatList = () => {
  const dispatch = useDispatch();
  const { cats, status, error, page } = useSelector((state) => state.cats);

  useEffect(() => {
    dispatch(fetchCats(page));
  }, [dispatch, page]);

  return (
    <div style={{ textAlign: "center" }}>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>{error}</div>}
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <img src={cat.url} alt="Cat" width="150" />
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px" }}>
        <button
          className="btn toggle-btn"
          onClick={() => dispatch(decrementPage())}
          disabled={page === 1}
          style={{ marginRight: "10px" }}
        >
          <FaArrowLeftLong />
        </button>
        <button
          className="btn toggle-btn"
          onClick={() => dispatch(incrementPage())}
          style={{ marginLeft: "10px" }}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default CatList;
