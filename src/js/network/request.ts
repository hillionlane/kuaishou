import axios, { AxiosRequestConfig } from 'axios';

const htmlEncode = (c: string) => {
  switch (c) {
    case '&':
      return '&amp;';
    case '<':
      return '&lt;';
    case '>':
      return '&gt;';
    case '"':
      return '&quot;';
    case ' ':
      return '&nbsp;';
    default:
      return `${c}`;
  }
};

/**
 * 不同cgi来源数据抹平
 *
 * @param {*} data
 * @param {AxiosRequestConfig} config
 * @returns
 */
const handleFormatResponseData = (data: any, config: AxiosRequestConfig) => {
  let { head, body } = data;
  // if (txDocCgiMap[config.url || ''] || txDocCgiMap[config.url?.replace(`//${window.location.host}`, '') || '']) {
  //   head = {
  //     ...data,
  //   };
  //   body = {
  //     ...data.result,
  //   };
  //   // 兼容没有 ret 的情况
  //   if (!head.ret) {
  //     head.ret = !isUndefined(head.retcode) ? head.retcode : head.cgicode;
  //   }
  // }
  return {
    head,
    body,
  };
};

// 新建一个 axios 实例
const httpResquest = axios.create({
  baseURL: 'https://www.fastmock.site/mock/92f730637c24c8d0c43149a4e29a84db/rest',
  headers: {},
  params: {},
  // transformResponse: (data: string) => {
  //   const parsedData = JSON.parse(data);
  //   return parsedData;
  // },
});

// 响应拦截器
httpResquest.interceptors.response.use(
  async (response) => {
    const { config, data } = response;
    // 空包
    if (!response.data) {
      return;
    }
    return response.data;
  },
  (error) => {
    const { url } = error.config || {};
    // 重试
    if (error?.config && error.config.retry > 0) {
      error.config.retry = error.config.retry - 1;
      return httpResquest(error.config);
    }
    throw error;
  },
);

export default httpResquest;
