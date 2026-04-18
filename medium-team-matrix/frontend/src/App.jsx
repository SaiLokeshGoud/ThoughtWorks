import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Dashboard from './components/dashboard/dashboard';
import AddStory from './components/draft/AddStory';
import Drafts from './components/draft/drafts';
import PublishedStories from './components/draft/publishedStories.jsx';
import './App.css';
import StoryContent from "./components/dashboard/StoryContent.jsx";
import MyProfile from './components/Profile/MyProfile.jsx';
import UserPage from './components/UserProfile/UserPage.jsx';
import SearchPage from './components/Navbar/SearchPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/add-story' element={<AddStory />} />
        <Route path="/stories/drafts" element={<Drafts />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/story/:id" element={<StoryContent />} />
        <Route path="/stories/published-stories" element={<PublishedStories />} />
        <Route path='/user-profile/:id' element={<UserPage />}/>
        <Route path='/search-page' element={<SearchPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
