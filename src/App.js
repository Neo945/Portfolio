import { Page, Navbar } from "./components";

function App() {
  return (
    <div style={{backgroundColor: 'black'}}>
      <Navbar/>
      <div>
        <Page />
        <Page />
        <Page />
        <Page />
      </div>
    </div>
  );
}

export default App;
