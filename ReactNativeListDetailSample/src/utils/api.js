import axios from 'axios';

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
};

export const request = ({
  method,
  urlEndpoint,
  data,
  header,
} = {}) => {
  const isPost = method === HTTP_METHODS.POST;
  const axiosConfig = {
    method,
    url: urlEndpoint,
    headers: {
      ...header,
    },
    timeout: 45000,
    params: isPost ? undefined : data,
    data: isPost ? data : undefined,
  };
  return axios(axiosConfig).then(res => res).catch((error) => {
    // eslint-disable-next-line no-console
    console.warn(`API ${method} ${urlEndpoint} request failed:`, error);
    throw error;
  });
};
