import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Fonts.css";
import BackArrow from "../image/back_arraw.png";
import Published_2023 from "../image/published_2023.png";
import Donated from "../image/donated.png";
import BookCoverExample from "../image/book_example.png";
import EmptyButton from "../image/empty_button.png";
import ReadButton from "../image/read_button.png";
import HeartClicked from "../image/heart_clicked.png";
import HeartUnclicked from "../image/heart_unclicked.png";
import Raising from "../image/raising.png";
import "./ScrollBar.css";

import axios from "axios";

const book = {
  book_id: 123,
  mainCategory_id: 1,
  subCategory_id: 2,
  book_Name: "김남혁 자서전",
  author: "천하제일김남혁",
  is_popular: true,
  publication_year: 2023,
  views: 7777777777777,
  like: 888888888,
  average_rating: 5.5,
  book_introduction: "text\n\ntext kiki\n",
  book_status: "text",
  created_at: "2021-05-01",
};

function BookInfo() {
  const { bookId } = useParams();
  const navigate = useNavigate(); // useNavigate hook 사용
  const [selectedIcon, setSelectedIcon] = useState(null);
  // 뒤로 가기 함수 정의
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleReadClick = () => {
    navigate(`/read/${bookId}`);
  };

  return (
    <div style={{ height: "1024px", width: "1615px" }}>
      <div
        style={{
          position: "absolute",
          left: 414 - 305,
          top: 186,
          maxWidth: "794px",
          fontFamily: "SDB",
          fontSize: "40px",
        }}
      >
        {book.book_Name}
      </div>
      <div
        style={{
          position: "absolute",
          left: 414 - 305,
          top: 249,
          maxWidth: "794px",
          fontFamily: "SDSB",
          fontSize: "30px",
          color: "#545454",
        }}
      >
        {book.author}
      </div>

      <div
        className="custom-scrollbar"
        style={{
          overflow: "auto",
          position: "absolute",
          left: 414 - 305,
          top: 410,
          width: "792px",
          maxHeight: "563px",
          fontFamily: "SDSB",
          fontSize: "20px",
          color: "#8F8F8F",
          lineHeight: "160%",
          textAlign: "left",
        }}
      >
        {book.book_introduction}
      </div>

      <img
        src={Published_2023}
        alt="Published_2023"
        style={{ position: "absolute", left: 414 - 305, top: 309 }}
      />
      <img
        src={Donated}
        alt="Donated"
        style={{ position: "absolute", left: 509 - 305, top: 309 }}
      />

      <img
        src={BookCoverExample}
        alt="BookCover"
        style={{ position: "absolute", left: 1356 - 305, top: 186 }}
      />

      <img
        src={Raising}
        alt="Raising"
        style={{ position: "absolute", left: 1399 - 305, top: 840 }}
      />
      <div
        style={{
          position: "absolute",
          top: 881,
          left: 1414 - 305,
          fontFamily: "SDEB",
          color: "#3477CF",
          fontSize: "25px",
        }}
      >
        {book.average_rating}
      </div>

      <img
        src={selectedIcon === "heartclicked" ? HeartClicked : HeartUnclicked}
        alt="heart_unclicked"
        style={{ position: "absolute", left: 1550 - 305, top: 852 }}
      />

      <div
        style={{
          position: "absolute",
          top: 881,
          left: 1537 - 305,
          fontFamily: "SDEB",
          color: "#8F8F8F",
          fontSize: "25px",
        }}
      >
        {book.like}
      </div>
      <img
        src={EmptyButton}
        alt="EmptyButton"
        style={{ position: "absolute", left: 1514 - 305, top: 840 }}
        onClick={() => {
          setSelectedIcon(
            selectedIcon === "heartclicked" ? null : "heartclicked"
          );
        }}
      />
      <img
        src={ReadButton}
        alt="ReadButton"
        style={{
          position: "absolute",
          left: 1629 - 305,
          top: 840,
          cursor: "pointer",
        }}
        onClick={handleReadClick}
      />
      <img
        src={BackArrow}
        alt="BackArrow"
        style={{
          position: "absolute",
          left: 377 - 305,
          top: 78,
          cursor: "pointer",
        }}
        onClick={handleGoBack}
      />
    </div>
  );
}

export default BookInfo;
