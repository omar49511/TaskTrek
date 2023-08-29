import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
function Layout() {
  const user = false;
  return (
    <>
      <Header user={user} />
      <main className=" h-full bg-[#F5F5F5] w-full flex-grow flex items-center justify-center px-4 md:px-80 ">
        <Routers />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
