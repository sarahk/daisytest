import "styles/globals.css";
import Navbar from "components/navbar/Navbar";

import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container rounded-lg mx-1 md:mx-auto h-full debug-screens">
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}

export default MyApp;
