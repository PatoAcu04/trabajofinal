import { useState, useEffect } from "react";

// Import our custom CSS
import "../src/scss/styles.scss";

import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Table from "./Components/Table/Table";
import Footer from "./Components/Footer/Footer";

function App() {
  const [users, setUsers] = useState("");
  const [classes, setClasses] = useState("");
  const [isEditing, setEditing] = useState(-1);
  const [usersDBError, setUsersDBError] = useState("");
  const [classDBError, setClassDBError] = useState("");

  function fetchUsers() {
    fetch("http://localhost:3001/Users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log("ERROR: " + err);
        setUsersDBError(err);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3001/Classes")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => setClassDBError(err));
    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <Form
        UsersActive={users}
        setActiveUsers={setUsers}
        isEditing={isEditing}
        setEditing={setEditing}
        Classes={classes}
        classDBError={classDBError}
        fetchUsers={fetchUsers}
      />
      <Table
        UsersActive={users}
        setActiveUsers={setUsers}
        setEditing={setEditing}
        usersDBError={usersDBError}
        fetchUsers={fetchUsers}
      />
      <Footer />
    </>
  );
}

export default App;
