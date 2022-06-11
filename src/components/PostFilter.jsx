import React from "react";
import NewSelect from "./UI/select/NewSelect";
import NewInput from "./UI/input/NewInput";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <NewInput
        value={filter.query}
        onChange={(el) => setFilter({ ...filter, query: el.target.value })} // toLowerCase()
        placeholder="Search..."
      ></NewInput>
      <NewSelect
        value={filter.sort}
        // вызываем функцию сетселектедсорт и передвать туда то что приходит из селекта (что выбрал пользователь)
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorted by"
        options={[
          {
            value: "title",
            name: "By name",
          },
          {
            value: "body",
            name: "By description",
          },
        ]}
      ></NewSelect>
    </div>
  );
};

export default PostFilter;
