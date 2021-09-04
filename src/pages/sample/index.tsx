import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { TPostState } from '../../reducks/modules/Post';
import { fetchPosts } from '../../reducks/services/Post';
import { Counter } from '../../reducks/counter/Counter';
import SampleRenderInput from '../../components/UiKit/sample/SampleRenderInput';
import FrameworkList from '../../components/UiKit/sample/FrameworkList';
import MockServer from '../../components/UiKit/sample/MockServer';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  // const { posts } = useSelector((state: { postState: TPostState }) => state.postState);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const outputConsole = () => console.log('test');

  const frameworks = [
    {
      id: 1,
      item: 'React',
    },
    {
      id: 2,
      item: 'Angular',
    },
    {
      id: 3,
      item: 'Vue',
    },
  ];
  return (
    <>
      <SampleRenderInput {...{ outputConsole }} />
      <FrameworkList {...{ frameworks }} />
      <MockServer />
      <Counter />
      {/* {posts?.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))} */}
    </>
  );
};

export default Home;
