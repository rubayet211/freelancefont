import "@/styles/globals.css";
import "@/styles/App.css";
import "../styles/globals.css";
import { AuthProvider } from "./moderator/utils/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
