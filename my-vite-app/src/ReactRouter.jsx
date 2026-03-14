
import {BrowserRouter,Routes, Route} from "react-router-dom"
import HomePage from './HomePage'
import AboutDetail from './AboutDetail'
const ReactRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <h1>React router Example</h1>
      <a href = "/">Homepage</a>
      <a href = "/AboutDetail">AboutDetail</a>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutDetail" element={<AboutDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ReactRouter
