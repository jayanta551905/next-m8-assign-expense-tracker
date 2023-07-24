import { NavLink } from "react-router-dom";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="card w-96 bg-gray-100 shadow-x mx-auto my-12">
        <div className="w-96 mx-16 my-8">
          <NavLink to={"/income"}>
            <button className="btn btn-wide mb-2 bg-white shadow-md">
              Income
            </button>
          </NavLink>
          <NavLink to={"/expense"}>
            <button className="btn btn-wide bg-white shadow-md">Expense</button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
