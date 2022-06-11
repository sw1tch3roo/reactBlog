import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false); // для показа крутилки и окончания показа крутилки
  const [error, setError] = useState(""); // состояние для обработки ошибок

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args); // передаем аргументы лимит и пейдж
    } catch (error) {
      // обрабатываем ошибку
      setError(error.message);
    } finally {
      setIsLoading(false); // независимо от ошибки вырубаем крутилку
    }
  };

  return [fetching, isLoading, error];
};
