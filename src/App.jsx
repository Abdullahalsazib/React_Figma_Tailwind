import Header from "./Components/Header/Header";
import Buynav from "./Navbar/Buynav";
import Navbar, { Btn2Nav } from "./Navbar/Navbar";


function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <Header/>
          {/* <Btn2Nav/>
          <Buynav/> */}
        </div>
      </div>
    </>
  );
}

export default App;
