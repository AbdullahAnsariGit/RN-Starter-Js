import axios from 'axios';

export const postMethod = data => {
return  axios.post('https://jsonplaceholder.typicode.com/posts', {
      //   method: 'POST',
      data: data,
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
    })
    .then(response => {
      return response?.data;
    });
};
