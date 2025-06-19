// Import our custom CSS
import '../src/scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Header from './Components/Header/Header'
<<<<<<< HEAD
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

=======
import Form from './Components/Form/Form'
>>>>>>> 6ac51e6af6ba9db9d8576c89c4d596e5aac609c5
function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Table users={Users}/>
=======
      <Form />
>>>>>>> 6ac51e6af6ba9db9d8576c89c4d596e5aac609c5
    </>
  )
}

export default App
