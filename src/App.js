import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1
            className="text-center
          "
          >
            Welcome to Elena's dictionary app
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by Elena Poddighe, open-source on GitHub and hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
