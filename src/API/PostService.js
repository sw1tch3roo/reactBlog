import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      //   https://jsonplaceholder.typicode.com/posts?_limit={ЗНАЧЕНИЕ limit}&_page={ЗНАЧЕНИЕ page }
      {
        // но аксиос может сам их подставить
        params: {
          _limit: limit,
          _page: page,
        },
      }
    ); // сюда будет помещен результат выполнения запроса

    return response;
  }

  static async getById(id) {
    // для возврата ссылки с айди поста (в PostIdPage)
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    ); // сюда будет помещен результат выполнения запроса

    return response;
  }

  static async getCommentsByPostId(id) {
    // для возврата ссылки с айди поста (в PostIdPage)
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    ); // сюда будет помещен результат выполнения запроса

    return response;
  }
}
