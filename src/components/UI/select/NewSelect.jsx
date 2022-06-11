import React from "react";
import classes from "./NewSelect.module.css";

const NewSelect = ({ options, defaultValue, value, onChange }) => {
  // принимаем пропсы
  // 1 - массив опций
  // 2 - дефолтная опция (сортировка по) а потом уже пункьы меню
  // выцепляем пропс.чилдрен, остальные пропсы оставляем как есть
  //   теперь по массиву опций при помощи мэп можем итерироваться
  //        и для каждой опции отрисовывать html-тег option
  return (
    <select
      value={value}
      // передаем значение, которое выбрал пользователь (лежит в ивент таргет)
      onChange={(event) => onChange(event.target.value)}
      style={{ display: "flex", marginLeft: "auto" }}
      className={classes.newSelect}
    >
      {/* disabled так как нахуя выбирать Sorted by) */}
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        // option.value - ключ обязательный когад перебираем массив
        // консоль жалуется браузер жалуется а вэлью в опшн будет уникальным во-во
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default NewSelect;
