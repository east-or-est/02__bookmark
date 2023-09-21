import {
  useState,
  useEffect
} from 'react'
import { AxiosRequestConfig } from 'axios'
import axios from '../../lib/axiosClient'


interface AxiosMarkdownProps {
  year?: number;
  cat?: string;
}


function AxiosMarkdown({ year, cat } : AxiosMarkdownProps) {

  const [ posts, setPosts ] = useState({
    isLoad: false,
    data: []
  });

  useEffect(() => {
    const options: AxiosRequestConfig = {
      url: '/md/' +  year + '-' + cat + '.md'
    }
  
    async function fetchData() {
      const response = await axios(options);
      setPosts({
        isLoad: true,
        data: response.data
      })
    }
    fetchData();
  },[year, cat])


  return posts.isLoad ? posts.data : '';
}


export default AxiosMarkdown