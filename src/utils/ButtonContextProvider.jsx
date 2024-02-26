import React, { useState } from "react";
import ButtonContext from "./ButtonContext";

const ButtonContextProvider = ({ children }) => {
  const [leftbutton, setleftbutton] = useState(false);
  const [rightbutton, setrightbutton] = useState(false);

  return (
    <ButtonContext.Provider
      value={{
        leftbutton: leftbutton,
        setleftbutton: setleftbutton,
        rightbutton: rightbutton,
        setrightbutton: setrightbutton,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContextProvider;
