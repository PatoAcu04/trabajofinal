import { useState, useEffect } from 'react'

// Import our custom CSS
import '../src/scss/styles.scss'

import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Table from './Components/Table/Table'
import Footer from './Components/Footer/Footer'




function App() {
  const [users, setUsers] = useState("");
  const [classes, setClasses] = useState("");
  const [isEditing, setEditing] = useState(-1);

  useEffect(() => {
    fetch("http://localhost:3001/Users")
      .then(res => res.json())
      .then(data => setUsers(data));

    fetch("http://localhost:3001/Classes")
      .then(res => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <>
      <Header />
      <Form UsersActive={users} setActiveUsers={setUsers} isEditing={isEditing} setEditing={setEditing} Classes={classes}/>
      <Table UsersActive={users} setActiveUsers={setUsers} setEditing={setEditing}/>
      <Footer />
    </>
  )
}

export default App
