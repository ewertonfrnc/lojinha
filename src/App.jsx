import { Routes, Route } from 'react-router-dom'

// COMPONENTS
import Navigation from './routes/Navigation/Navigation.component'
import Home from './routes/Home/Home.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
