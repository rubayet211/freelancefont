import "@/styles/globals.css";
import "@/styles/App.css";
import "../styles/globals.css";
import { AuthProvider } from "./moderator/utils/authContext";
import { DrawerProvider } from "./moderator/utils/drawerContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </AuthProvider>
  );
}
