import Head from "../components/layout/head";
import Layout from "../components/layout/layout";
import LoginForm from "../components/form/LoginForm";

export default function Login() {
  return (
    <Layout>
      <Head />
        <div className="container">
          <h1>Login page</h1>
        </div>
        <LoginForm />
    </Layout>
 );
}