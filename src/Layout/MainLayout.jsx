import { NavLink, Outlet } from "react-router-dom"
import Navbar_top from "../component/navbar-top/Navbar_top"
import Navbar_main from "../component/navbar-main/Navbar_main"
import Footer from "../component/footer/Footer"

function MainLayout() {
  return (
    <div>

      <nav>
        <Navbar_top />
        <Navbar_main />
      </nav>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout