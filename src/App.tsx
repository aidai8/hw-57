import './App.css'
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import UserForm from "./components/UserForm/UserForm.tsx";
import UserItem from "./components/UserItem/UserItem.tsx";

const App = () => {

  return (
    <>
      <header className="mb-5">
        <Toolbar/>
      </header>
      <main className="container">
          <div className="row">
              <div className="col-6">
                  <UserForm/>
              </div>
              <div className="col-6">
                  <UserItem/>
              </div>
          </div>
      </main>
    </>
  )
};

export default App
