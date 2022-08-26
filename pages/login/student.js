// import useRedirect from "../../components/Hooks/useRedirect";
import LoginForm from "../../components/Login/LoginForm";

function StudentLoginPage() {
  // const { render } = useRedirect();

  // if (render) {
  return (
    <div className="bg-gray-100">
      <LoginForm user="student" loginRoute="student" dashboardRoute="student" />
    </div>
  );
  // }
}

export default StudentLoginPage;
