import './App.css';
import iconmenu from './assets/images/icon-menu.svg'
import logo from './assets/images/logo.svg'
import retro from './assets/images/image-retro-pcs.jpg'
import laptop from './assets/images/image-top-laptops.jpg'
import game from './assets/images/image-gaming-growth.jpg'
import Footer from './components/Footer';
import hamburger from './assets/images/icon-menu.svg'
import hamburgerclose from './assets/images/icon-menu-close.svg'

function App() {

  function ativaMenu(e: string) {
    const iconehamb = document.getElementById(e)!;  /* hamburger */
    const hambclose = document.getElementById("hamburgerclose")!;
    const menub = document.getElementById("navegationb")!;
    iconehamb.addEventListener("click",
      () => {
        console.log(menub)
        menub.style.display = "flex";
        hambclose.style.display = "block";
        /* menu.classList.toggle("mostrarmenu"); */
      }
    )
    hambclose.addEventListener("click",
      () => {
        menub.style.display = "none";
        hambclose.style.display = "none";
      }
    )
  }


  return (
    <div className="App">
      <main className="container">  {/* GRID */}


        <header className="header">
          <img src={logo} alt="logomarca" id="logo" />
          <img src={hamburger} id="hamburger" alt="hamburger" onLoad={() => ativaMenu("hamburger")} />
          <img src={hamburgerclose} id="hamburgerclose" alt="hamburger" />
          <nav id='navegation'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">New</a></li>
              <li><a href="#">Popular</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Categories</a></li>
            </ul>
          </nav>
          <nav id='navegationb'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">New</a></li>
              <li><a href="#">Popular</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Categories</a></li>
            </ul>
          </nav>
        </header>


        <div className="mainnew">{/* BBBBBBBBBBB */}
          <div className="mainimage">
            {/* <img src={imagedesk} id="mainimage" alt="image" /> */}

          </div>
          <div className="maintopic">
            <div className="topic">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="introduction">
              <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <a href="#"> READ MORE </a>
            </div>
          </div>
        </div>{/* BBBBBBBBBBBBBBB */}

        <section className="sidetopics"> {/* CCCCCCCCCCCCCC */}
          <h2>New</h2>
          <article className="item1 items">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article className="item2 items">
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </article>
          <article className="item3 items">
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>
        </section> {/* CCCCCCCCCCCCCCCCCCC */}

        <div className="bottom"> {/* DDDDDDDDDDDDDDDDDDDDDD */}
          <article className="new01 news">
            <img src={retro} alt="pc retro" />
            <div className="text">
              <h3>01</h3>
              <a href='#' >Reviving Retro PCs</a>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>

          <article className="new02 news">
            <img src={laptop} alt="laptop" />
            <div className="text">
              <h3>02</h3>
              <a href='#' >Top 10 Laptops of 2022</a>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </article>

          <article className="new03 news">
            <img src={game} alt="game control" />
            <div className="text">
              <h3>03</h3>
              <a href='#'>The Growth of Gaming</a>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>

        </div>  {/* DDDDDDDDDDDDDDDDDDDDDD */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
