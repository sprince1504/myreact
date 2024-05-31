import Header from "./components/global/header/Header.jsx";
import Footer from "./components/global/footer/Footer.jsx";
import PageContent from "./components/global/pageContent/PageContent.jsx";



function App() {
  return (
    <>
    <header>
      <div className="container">
      <div className="logo">
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
    <main>
    <section className="home">
      <PageContent />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
