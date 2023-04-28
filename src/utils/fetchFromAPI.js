import axios from "axios";



const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
// const options = {
//     method: 'GET',
//     url: BASE_URL,
//     params: {
//       part: 'snippet',
//       videoId: 'M7FIvfx5J10'
//     },
//     headers: {
//       'content-type': 'application/octet-stream',
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };

const options = {
    // method: 'GET',
    // url: BASE_URL,
    params: {
      
      maxResults: '50'
    },
    headers: {
      // 'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': "d54fa40da4msh403db611adfecc4p14f1e8jsn7bce46997439",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`,options)

   return data
}