import Income from "../components/Income";
import Layout from "../layout/Layout";

const IncomePage = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Income />
      </div>
    </Layout>
  );
};

export default IncomePage;
