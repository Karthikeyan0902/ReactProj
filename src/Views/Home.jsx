import SideBar from '../Components/SideBar';
import Card from '../Components/Card';

function Home() {
  return (
    <div>
        <SideBar/>
        <div style={{textAlign : 'center'}}>
        <Card title="Welcome" content="This is the home page." />
      {/* <h1 style={{textAlign: ' center'}}>Welcome to the Home Page</h1> */}
        </div>
    </div>
  );
}

export default Home;