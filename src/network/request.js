import axios from "axios";

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000,
  });

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // console.log(config);
      return config;
    },
    (err) => {
      console.log(err);
    }
  );
  // 响应拦截器
  instance.interceptors.response.use(
    (res) => {
      // console.log(res);
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  // 发送真正的网络请求
  return instance(config);
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000,
//     });
//     instance(config)
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// export function request(config, success, failure) {
//   // 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000,
//   });

//   instance(config)
//     .then((res) => {
//       success(res);
//     })
//     .catch((err) => {
//       failure(err);
//     });
// }
// // 调用
// request(
//   {
//     url: '',
//   },
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
