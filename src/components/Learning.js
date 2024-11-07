// import React from "react";
// import LearningMain from "../Learning/LearningMain";
// export const Learning = () => {
//   return (
//     <div>
//       <LearningMain />
//     </div>
//   );
// };
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LearningMain from "../Learning/LearningMain.js";

export const Learning = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showSandbox, setShowSandbox] = useState(false);

  const handleStartClick = () => {
    setShowOptions(true);
  };

  const handleSandboxClick = () => {
    setShowSandbox(true);
  };

  return (
    <div className="learning-container">
      <LearningMain />
    </div>
  );
};
