import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
function Layout() {
  const user = false;
  return (
    <>
      <Header user={user} />
      <main className="flex-grow flex items-center justify-center px-4 md:px-80 min-h-screen">
        <Routers className="w-full max-w-screen-md" />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
