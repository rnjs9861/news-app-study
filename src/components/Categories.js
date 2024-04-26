import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비지니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sport", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = () => {
  return (
    <div>
      {categories.map(category => (
        <NavLink
          key={category.name}
          to={category.name === "all" ? "/" : `/${category.name}`}
        >
          {category.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
