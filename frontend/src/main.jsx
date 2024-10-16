import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom"
import HomeScreen from './Pages/HomeScreen.jsx'
import UploadScreen from './Pages/UploadScreen.jsx'
import GetScreen from './Pages/GetScreen.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index path='/' element={<HomeScreen/>} />
      <Route path='uploadfile' element={<UploadScreen/>} />
      <Route path='getfile' element={<GetScreen/>} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
