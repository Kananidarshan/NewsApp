import React from "react";
import Newscard from "../components/News/Newscard";
const Entertainment = () => {
  return (
    <div>
      <Newscard
        isHome={false}
        category="entertainment"
        Title="ENTERTAINMENT NEWS"
      />
    </div>
  );
};

export default Entertainment;
