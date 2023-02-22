import Navigation from './Navigation'
import Footer from './Footer'
import Search from './Search'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Search />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
