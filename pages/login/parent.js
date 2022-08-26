// import useRedirect from "../../components/Hooks/useRedirect";
import LoginForm from "../../components/Login/LoginForm";

function ParentLoginPage() {
  // const { render } = useRedirect();

  // if (render) {
  return (
    <div className="bg-gray-100">
      <LoginForm user="parent" loginRoute="parent" dashboardRoute="parent" />
    </div>
  );
  // }
}

export default ParentLoginPage;
