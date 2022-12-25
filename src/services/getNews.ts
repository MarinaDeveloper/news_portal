import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getNews = (): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
    params: {q: 'Elon Musk', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
    headers: {
      'X-RapidAPI-Key': '3716638155msh9daebeab1833a00p192dd9jsn7b2a6e001a5f',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };

  return axios.request(options);
}

export default getNews;