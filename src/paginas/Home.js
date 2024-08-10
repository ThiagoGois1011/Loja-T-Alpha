import Banner from "../components/Banner";
import Categorias from "../components/Categorias";
import Footer from "../components/Footer";
import Header from "../components/Header";


function Home() {

  const animacaoHeader = () =>{

    const scroll = window.scrollY;
    const header = document.querySelector(".header-area");
    const box = document.querySelector(".header-text");
    
    
    if(scroll >= box.offsetTop){
      header.classList.add("background-header");
    }else{
      header.classList.remove("background-header");
    }
  }

  document.onscroll = animacaoHeader;

  return (
    <div style={{fontFamily: "'Roboto', sans-serif"}}>
      <Header/>
      <Banner/>
      <Categorias/>
      <Footer/>
    </div>
  );
}

export default Home;
