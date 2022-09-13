import Banner from "./Components/Banner/Banner";
import Experience from "./Components/Experience/Experience";
import Faq from "./Components/Faq/Faq";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Service from "./Components/Services/Service";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div className="">

        <Nav/>
        <Banner/>
        <Service/>
        <Experience/>
        <Feature/>
        <Faq/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

export default App;
