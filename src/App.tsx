import './App.css'
import Toolbar from "./components/Toolbar/Toolbar.tsx";

const App = () => {

  return (
    <>
      <header className="mb-5">
        <Toolbar/>
      </header>
      <main className="container">
        Content will be here
      </main>
    </>
  )
};

export default App
