import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div>
        <h1>Sorry, an error has occurred</h1>
        {isError(error) && (
          <p className="text-base">{error.statusText}</p>
        )}
      </div>
    </>
  )
}

export default ErrorPage;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isError(error: any): error is { statusText: string } {
  return "statusText" in error;
}