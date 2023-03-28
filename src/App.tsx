import './App.css';
import iconmenu from './assets/images/icon-menu.svg'
import logo from './assets/images/logo.svg'

function App() {
  return (
    <div className="App">
      <main className="container">
        <header className="App-header">
          <img src={logo} alt="logomarca" id="logo" />
          <nav>
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </nav>
        </header>

        <div className="top">
          <div className="mainimageandnew">
            <div className="mainimage">

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
          </div>

          <section className="sidetopics">
            <h2>New</h2>
            <article className="item1">
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <article className="item2">
              <h3>The Downsides of AI Artistry</h3>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </article>
            <article className="item3">
              <h3>Is VC Funding Drying Up?</h3>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </article>
          </section>
        </div>
        <div className="bottom">
          <article className="new01">
            <img src="" alt="" />
            <div className="text">
              <h3>01</h3>
              <h4>Reviving Retro PCs</h4>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>

          <article className="new02">
            <img src="" alt="" />
            <div className="text">
              <h3>02</h3>
              <h4>Top 10 Laptops of 2022</h4>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </article>

          <article className="new03">
            <img src="" alt="" />
            <div className="text">
              <h3>03</h3>
              <h4>The Growth of Gaming</h4>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}

export default App;
