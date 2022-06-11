import { useMemo } from "react";
// хук создан для сортировки массива постов, а также тут присутствует хук для поиска

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      // если массив существует хуярим сортировку
      return [...posts].sort(
        (stringOne, stringTwo) => stringOne[sort].localeCompare(stringTwo[sort]) // функция для сравнения строк
      );
    }

    return posts; //возвращаем тупо обычный массив
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort); // получаем отсортированный массив
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]); // функция для поиска нужного поста (включает ли в себя то или то слово написанное)

  return sortedAndSearchedPosts;
};
