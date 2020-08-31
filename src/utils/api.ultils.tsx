import axios from "axios";

/**
 * @todo
 * This will be used once this app can be authorized via Web application flow
 */
export const makeConfig = () => {
  //   axios.interceptors.request.use((config) => {
  //     config.headers = {
  //       ...config.headers,
  //       Authorization: `Authorization: token ${"LOGINED_USER_TOKEN_HERE"}`,
  //     };
  //     return config;
  //   });
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      return Promise.reject(
        error.response ? error.response.message : "Something went wrong"
      );
    }
  );
};
export const getLastPage = (response: any) => {
  if (!response.headers["link"]) {
    return 0;
  }
  const links = response.headers["link"].split(",");
  const pageMatched = links[links.length - 1].match(
    /[&]page=(\d+).*; rel="last"$/
  );
  return pageMatched && pageMatched[1] ? +pageMatched[1] : 0;
};
