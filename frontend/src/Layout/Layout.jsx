import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import { TaskContextProvider } from "../context/TaskContext";
function Layout() {
  const user = false;
  return (
    <TaskContextProvider>
      <Header user={user} />
      <main className=" ">
        <Routers />
      </main>
      <Footer />
    </TaskContextProvider>
  );
}

export default Layout;
