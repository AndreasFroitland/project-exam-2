import Head from "../components/layout/head";
import Layout from "../components/layout/layout";
import ContactForm from "../components/form/ContactForm"

export default function Contact() {
  return (
    <Layout>
      <Head />
        <div className="container">
          <h1>Contact page</h1>
        </div>
        <ContactForm />
    </Layout>
 );
}