import Header from "../../Components/Header";
import "./ErrorPage.css";

function ErrorPage({ cart }) {
  return (
    <>
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="not-found-message">Page not found...</div>
    </>
  );
}

export default ErrorPage;
