import Header from "./components/global/header/Header.jsx";
import Footer from "./components/global/footer/Footer.jsx";



function App() {
  return (
    <>
    <header>
      <div className="container">
      <div class="logo">
                <a href="#">MyWebsite</a>
            </div>
      <nav>
        <ul>
          <Header title="Home" />
          <Header title="About" />
          <Header title="Services" />
          <Header title="Contact" />
        </ul>
      </nav>
      </div>
    </header>

    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
