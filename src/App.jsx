// Import our custom CSS
import '../src/scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
function App() {
  return (
    <>
      <Header />
      <Form />
    </>
  )
}

export default App
