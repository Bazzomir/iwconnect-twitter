import React, {useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch';
import {Post as PostType} from '../Home/components/Main/types';

export const PostPage = (props: any) => {
  const params = useParams();
  const location = useLocation();
  // const [data, setData] = useState();

  // const {data, fetchFromApi} = useFetch<PostType>(`posts/${params.id}`, {} as PostType);
  // console.log('post', data);

  // useEffect(() => {
  //   if (!(location?.state as any)?.id) {
  //     fetchFromApi();
  //   }
  // }, []);

  return <div>Post number {params.id}</div>;
};
