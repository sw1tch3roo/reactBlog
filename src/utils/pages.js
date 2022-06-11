export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
  // округляем в большую сторону
  // постов 105 --> должно тогда страниц 11 быть
};

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
};
