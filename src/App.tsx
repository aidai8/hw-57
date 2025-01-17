import './App.css'
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import UserForm from "./components/UserForm/UserForm.tsx";
import {useState} from "react";
import {User} from "./types";
import Users from "./components/Users/Users.tsx";

const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (newUser: User) => {
        setUsers(prevState => [...prevState, newUser]);
    };

  return (
    <>
      <header className="mb-5">
        <Toolbar/>
      </header>
      <main className="container">
          <div className="row">
              <div className="col-6">
                  <UserForm onSubmitFormToAddUser={addUser}/>
              </div>
              <div className="col-6">
                    <Users users={users}/>
              </div>
          </div>
      </main>
    </>
  )
};

export default App
