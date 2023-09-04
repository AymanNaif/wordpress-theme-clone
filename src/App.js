// import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import HomePageTwo from './Pages/HomePageTwo';
import Blog from './Pages/Blog';
import RootLayout from './Pages/RootLayout';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/home-two', element: <HomePageTwo /> },
        { path: '/blog', element: <Blog /> }
      ]
    }]
  )
  return <RouterProvider router={router} />
}

export default App;
