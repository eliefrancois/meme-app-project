import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";
import Layout from "~/app/Layout";


const MyApp: AppType = ({ Component, pageProps }) => {
  return  (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
