import { useState } from 'react'

// Import our custom CSS
import '../src/scss/styles.scss'

import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Table from './Components/Table/Table'
import Footer from './Components/Footer/Footer'

export let Users = [
  {
    id: 1,
    name: "Santiago Brahim",
    tel: "381 631 1300",
    mail: "brahimsantiag04gmail.com",
    asistingClass: "Gimnasio",
    state: "Activo",
    hour: "11:00"
  },
  {
    id: 2,
    name: "Pato Acuna",
    tel: "381 111 2222",
    mail: "patoacu04@gmail.com",
    asistingClass: "Salsa y Bachata",
    state: "Inactivo",
    hour: "19:00"
  },
  {
    id: 3,
    name: "Valentino Queiro",
    tel: "381 333 4444",
    mail: "valentinoqueiro@gmail.com",
    asistingClass: "Salsa y Bachata",
    state: "Activo",
    hour: "20:00"
  }
]

export const Classes = [
  {
    id: 1,
    className: "Salsa y Bachata",
    hours: ["09:30 - 11:00", "16:15 - 17:45", "20:00 - 21:30"]
  },
  {
    id: 2,
    className: "Gimnasio",
    hours: ["08:15 - 09:45", "12:30 - 14:00", "18:00 - 19:30"]
  },
  {
    id: 3,
    className: "Zumba",
    hours: ["10:00 - 11:30", "15:00 - 16:30", "19:45 - 21:15"]
  },
  {
    id: 4,
    className: "Pole Dance",
    hours: ["09:00 - 10:30", "13:15 - 14:45", "17:30 - 19:00"]
  },
];


function App() {
  const [UsersActive, setActiveUsers] = useState(Users);
  const [isEditing, setEditing] = useState(-1);
  return (
    <>
      <Header />
      <Form UsersActive={UsersActive} setActiveUsers={setActiveUsers} isEditing={isEditing} setEditing={setEditing}/>
      <Table UsersActive={UsersActive} setActiveUsers={setActiveUsers} setEditing={setEditing}/>
      <Footer />
    </>
  )
}

export default App
