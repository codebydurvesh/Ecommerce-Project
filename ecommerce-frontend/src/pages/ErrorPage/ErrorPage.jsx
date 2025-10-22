import "./ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <html className="errorpage-html">
        <body className="errorpage-body">
          <div class="mars"></div>
          <img
            src="https://assets.codepen.io/1538474/404.svg"
            class="logo-404"
          />
          <img
            src="https://assets.codepen.io/1538474/meteor.svg"
            class="meteor"
          />
          <p class="title">Oh no!!</p>
          <p class="subtitle">
            You are either misspelling the URL <br /> or requesting a page
            that's no longer here.
          </p>
          <div align="center">
            <Link to="/">
              <button className="btn-back">Back to home</button>
            </Link>
          </div>
          <img
            src="https://assets.codepen.io/1538474/astronaut.svg"
            class="astronaut"
          />
          <img
            src="https://assets.codepen.io/1538474/spaceship.svg"
            class="spaceship"
          />
        </body>
      </html>
    </>
  );
}

export default ErrorPage;
