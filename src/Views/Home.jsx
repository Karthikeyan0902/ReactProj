import './Home.css';
import Card from '../Components/Card';
import Sidebar from '../Components/SideBar';

function Home() {
  return (
    <div className="home-container">
      <Card 
        header="Welcome to the Home Page"
        content="This is the home page content."
        footer="© 2025 My Website"
      />

      <Sidebar/>
    </div>
  );
}

export default Home;
