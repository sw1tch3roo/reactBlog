import React from "react";
import classes from "./NewInput.module.css";

const NewInput = React.forwardRef((props, ref) => {
  // выцепляем пропс.чилдрен, остальные пропсы оставляем как есть
  return <input ref={ref} className={classes.newInput} {...props}></input>;
});

export default NewInput;
