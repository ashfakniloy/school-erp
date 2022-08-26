// import useRedirect from "../../components/Hooks/useRedirect";
import LoginForm from "../../components/Login/LoginForm";

function SuperAdminLoginPage() {
  // const { render } = useRedirect();

  // if (render) {
  return (
    <div className="bg-gray-100">
      <LoginForm
        user="super admin"
        loginRoute="super_admin"
        dashboardRoute="admin"
      />
    </div>
  );
  // }
}

export default SuperAdminLoginPage;
