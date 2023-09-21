import {
  useState,
  useEffect
} from 'react'
import { AxiosRequestConfig } from 'axios'
import axios from '../../lib/axiosClient'


function AxiosSet() {

  const [ posts, setPosts ] = useState({
    isLoad: false,
    data: []
  });

  useEffect(() => {
    const options: AxiosRequestConfig = {
      url: '/set.json'
    }
  
    async function fetchData() {
      const response = await axios(options);
      setPosts({
        isLoad: true,
        data: response.data
      })
    }
    fetchData();
  },[])


  return posts.isLoad ? posts.data : '';
}


export default AxiosSet