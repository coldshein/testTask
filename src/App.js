import logo from './logo.svg';
import './App.scss';
import CardItem from './components/CardItem';
import Get from './pages/Get';
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="header-inner">
            <div className="logo-wrapper">
              <img src="img/logo.svg" alt=""/>
            </div>
            <nav>
              <button className="yellow-btn">Users</button>
              <button className="yellow-btn">Sign up</button>
            </nav>
          </div>
        </div>
      </header>
      <section className="hero container">
        <div className="mini-container">
          <div className="hero-inner">
            <h1>Test assignment for front-end developer</h1>
            <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a
              vast understanding of User design thinking as they'll be building web interfaces with accessibility
              in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
            </p>
            <button className="yellow-btn">Sign up</button>
          </div>
        </div>
      </section>
     <Get/>
      <PostItem/>
      {/* <script>
        document.getElementById("FileAttachment").onchange = function () {
          document.getElementById("fileuploadurl").value = this.value.replace(/C:\\fakepath\\/i, '');
};
      </script> */}
    </div>
  );
}

export default App;
