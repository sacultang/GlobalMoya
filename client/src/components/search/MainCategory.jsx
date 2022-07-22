import React from "react";
import { CategoryButton } from "../../styles/button";
import { Link } from "react-router-dom";
const maincate = [
  { category: "Index", path: "/index" },
  { category: "Macrotopic", path: "/macrotopic" },
  { category: "Fx", path: "/fx" },
  { category: "Events", path: "/events" },
  { category: "Topics", path: "/topics" },
  { category: "Commodities", path: "/commodities" },
  { category: "tikers", path: "/tikers" },
  { category: "Category", path: "/category" },
  { category: "Sectors", path: "/sectors" },
  { category: "Startup", path: "/startup" },
];
const MainCategory = () => {
  return (
    <>
      {maincate.map((category) => {
        return (
          <Link to={`/search${category.path}`} key={category.category}>
            <CategoryButton>{category.category}</CategoryButton>
          </Link>
        );
      })}
    </>
  );
};

export default MainCategory;
