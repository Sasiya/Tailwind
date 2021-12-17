import React from "react";

const ButtonCustom = ({ name }) => {
  return (
    <button
      onClick={() => alert("ss")}
      //   className="justify-center align-middle bg-red-800 py-2 text-base px-2 rounded-md"
    >
      {name}
    </button>
  );
};

export default ButtonCustom;
