// react-route-dom
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom'
// pages
import HomePage from './Page/HomePage'
import MainLayout from './Layout/MainLayout'
import CategoryPage from './Page/CategoryPage'
import ShowPage from './Page/ShowPage'
import { FilterContextProvider } from './context'
import CartPage from './Page/CartPage'
import Favorites from './component/favorites/Favorites'

// layouts

function App() {


    const routes = createBrowserRouter(
        createRoutesFromElements(

            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/categories/:slug' element={<CategoryPage />} />
                <Route path='/showpage/:slug' element={<ShowPage />} />
                <Route path='/cartpage' element={<CartPage />} />
                <Route path='/favorites' element={<Favorites />} />
            </Route>

        )
    )

    return (

        <FilterContextProvider>
            <div className='App'>
                <RouterProvider router={routes} />
            </div>
        </FilterContextProvider>

    )
}

export default App
