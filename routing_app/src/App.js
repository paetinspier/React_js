import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to="/invoices"><button>Invoices</button></Link> |{" "}
        <Link to="/expenses"><button>Expenses</button></Link> |{" "}
        <Link to="/"><button>Home</button></Link>
        
      </nav>
      <Outlet />
    </div>
  );
}
