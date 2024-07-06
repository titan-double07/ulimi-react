import DepartmentTable from "./components/DepartmentTable";
import NavBar from "./components/NavBar";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <NavBar />
        <main className="bg-gray-100 min-h-screen">
          <div className="px-10 py-5">
            <DepartmentTable />
          </div>
        </main>
      </ProductProvider>
    </>
  );
}

export default App;
