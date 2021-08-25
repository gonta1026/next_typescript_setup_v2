import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TPostState } from '../../reducks/modules/Post';
import { fetchPosts } from '../../reducks/services/Post';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: { postState: TPostState }) => state.postState);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {posts?.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </>
  );
};

export default Home;
