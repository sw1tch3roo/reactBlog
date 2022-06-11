import React from "react";
import classes from "./NewButton.module.css";

const NewButton = ({ children, ...props }) => {
  // выцепляем пропс.чилдрен, остальные пропсы оставляем как есть
  return (
    // чтобы все пропсы применялись, делаем деструктуризацию внутри дом-кнопки
    <button {...props} className={classes.newBtn}>
      {children}
    </button>
  );
};

export default NewButton;
