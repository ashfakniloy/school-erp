import Layout from "../../components/Admin/Layout";
// import Layout from "../../components/Layout";
import EmailForm from "../../components/Admin/Form/EmailForm";

function EmailPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Email</h1>
        <div className="mt-8">
          <EmailForm />
        </div>
      </div>
    </Layout>
  );
}

export default EmailPage;
