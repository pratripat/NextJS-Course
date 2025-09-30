import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList'

function Posts() {
  return (
    <>
      <main>
        <Outlet />
        <PostList />
      </main>
    </>
  );
}

export default Posts;
