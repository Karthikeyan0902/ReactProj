import './Home.css';
import Card from '../Components/Card';
import Sidebar from '../Components/SideBar';
import FindingBar from '../Components/FindingBar';
import ErrorBoundary from '../Components/ErrorBoundary';
import BuggyComponent from '../Components/BuggyComponent';

function Home() {
  return (
    <div className="home-container">
      <FindingBar />
      <Card
        header="Welcome to the Home Page"
        content="This is the home page content."
        footer="© 2025 My Website"
      />

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>

      <Sidebar />
    </div>
  );
}

export default Home;
