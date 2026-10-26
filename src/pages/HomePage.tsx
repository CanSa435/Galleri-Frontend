import CarsSection from '../components/cars/CarsSection'
import CustomerSection from '../components/customers/CustomerSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
const HomePage = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CarsSection/>
        <CustomerSection/>
        <Footer />
    </>
  )
}

export default HomePage