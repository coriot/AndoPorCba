import axios from "axios";

export const callApi = async (url,method,body) => {
  var data = JSON.stringify(body);
  var config = {
    method: method,
    url: `${url}`,
    headers: {
      //'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};