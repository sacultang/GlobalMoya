import React, { useEffect, useRef } from "react";
import { mainCategory } from "../category";
import { useParams, Link } from "react-router-dom";
import { RadiusButton } from "@styles/common/button/button";
import { QuickButtonWrap } from "@styles/quickGuide/categorySearch/quickCate";
import { useDispatch } from "react-redux";
import { isLoading } from "@redux/categorySlice";
import _ from "lodash";
const CategoryButton = () => {
  const params = useParams();
  const btnRef = useRef([]);
  const dispatch = useDispatch();
  useEffect(() => {
    btnRef.current.forEach((item, idx) => {
      if (item.innerText.toLowerCase() === params.id) {
        btnRef.current[idx].scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }, [params]);

  return (
    <QuickButtonWrap id="scroll-container">
      {_.map(mainCategory, (category, idx) => {
        return (
          <Link
            to={`/quick${category.path}`}
            key={category.id}
            id={category.id}
          >
            <RadiusButton
              orange={params.id === category.id}
              ref={(el) => (btnRef.current[idx] = el)}
              onClick={() => {
                dispatch(isLoading(true));
              }}
            >
              {category.category}
            </RadiusButton>
          </Link>
        );
      })}
    </QuickButtonWrap>
  );
};

export default CategoryButton;
