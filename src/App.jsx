// Import our custom CSS
import '../src/scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Header from './Components/Header/Header'
import Table from './Components/Table/Table'

export let Users = [
  {
    id: 1,
    name: "Santiago Brahim",
    tel: "381 631 1300",
    mail: "brahimsantiag04gmail.com",
    asistingClass: "Gimnasio",
    hour: "11:00"
  },
  {
    id: 2,
    name: "Pato Acuna",
    tel: "381 111 2222",
    mail: "patoacu04@gmail.com",
    asistingClass: "Salsa y Bachata",
    hour: "19:00"
  },
  {
    id: 3,
    name: "Valentino Queiro",
    tel: "381 333 4444",
    mail: "valentinoqueiro@gmail.com",
    asistingClass: "Salsa y Bachata",
    hour: "20:00"
  }
]

function App() {
  return (
    <>
      <Header />
      <Table users={Users}/>
    </>
  )
}

export default App
