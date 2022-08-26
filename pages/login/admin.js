// import useRedirect from "../../components/Hooks/useRedirect";
import LoginForm from "../../components/Login/LoginForm";

function AdminLoginPage() {
  // const { render } = useRedirect();

  // if (render) {
  return (
    <div className="bg-gray-100">
      <LoginForm user="admin" loginRoute="admin" dashboardRoute="admin" />
    </div>
  );
  // }
}

export default AdminLoginPage;
