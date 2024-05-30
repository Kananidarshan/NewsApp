import React from "react";
import Newscard from "../components/News/Newscard";

const HealthNews = () => {
  return (
    <div>
      <Newscard isHome={false} category="health" Title="HEALTH NEWS" />
    </div>
  );
};

export default HealthNews;
