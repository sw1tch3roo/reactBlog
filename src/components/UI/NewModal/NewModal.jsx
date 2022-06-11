import React from "react";
import classes from "./NewModal.module.css";

const NewModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.newModal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    // join вернет строку (два класса, склеенных по пробелу)
    // stopPropagation() - чтоб контентная часть не закрывалась
    // предотвращаем всплытие события
    <div className={[rootClasses.join(" ")]} onClick={() => setVisible(false)}>
      <div
        className={classes.newModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default NewModal;
