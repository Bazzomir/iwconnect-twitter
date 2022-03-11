import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

export const PostPage = (props: any) => {
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.id}`);
      const data = await response.json();
      setData(data);
    };
    if (!(location?.state as any)?.id) {
      fetchFromApi();
    }
  }, []);

  return <div>Post number {params.id}</div>;
};
