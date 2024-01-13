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
            🤓 Welcome to Elena's dictionary📚
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/elena-poddighe-736276104/"
              target="_blank"
              rel="noreferrer"
            >
              Elena Poddighe
            </a>
            ,{" "}
            <a
              href="https://github.com/elenapoddighe/dictionary-react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-source
            </a>{" "}
            on GitHub and{" "}
            <a
              href="https://elenas-dictionary-react-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted
            </a>{" "}
            on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
