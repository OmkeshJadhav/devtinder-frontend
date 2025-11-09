import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import { Provider } from "react-redux"
import appStore from "./store/appStore"
import Feed from "./pages/Feed"
import Connections from "./pages/Connections"
import RequestsReceived from "./pages/RequestsReceived"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/feed" element={<Feed/>}/>
              <Route path="/connections" element={<Connections/>}/>
              <Route path="/requestsReceived" element={<RequestsReceived/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
