import React from "react";
import Newscard from "../components/News/Newscard";

const SportNews = () => {
  return (
    <div>
      <Newscard isHome={false} category="sports" Title="SPORT NEWS" />
    </div>
  );
};

export default SportNews;
