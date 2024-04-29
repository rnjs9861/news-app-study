import React from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";
  //카테고리를 담던지 아니면 all로 해라

  return (
    <div>
      {/* <h2>뉴스 목록 페이지입니다. </h2> */}
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </div>
  );
};

export default NewsPage;
