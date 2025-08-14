import { Routes, Route } from 'react-router-dom';
import { ForumLayout } from './components/ForumLayout';
import { ForumIndex } from './pages/ForumIndex';
import { CategoryThreads } from './pages/CategoryThreads';
// import { ThreadView } from './pages/ThreadView';
// import { NewThread } from './pages/NewThread';
// import { Search } from './pages/Search';
// import { Activity } from './pages/Activity';

export function ForumRoutes() {
  return (
    <ForumLayout>
      <Routes>
        <Route index element={<ForumIndex />} />
        <Route path="c/:slug" element={<CategoryThreads />} />
        {/* <Route path="t/:id" element={<ThreadView />} />
        <Route path="new" element={<NewThread />} />
        <Route path="search" element={<Search />} />
        <Route path="activity" element={<Activity />} /> */}
      </Routes>
    </ForumLayout>
  );
}
