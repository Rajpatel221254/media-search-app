import React from "react";

let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

const loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses}`}></div>
      </div>
    </div>
  );
};

export default loader;
