// import useRedirect from "../../components/Hooks/useRedirect";
import LoginForm from "../../components/Login/LoginForm";

function TeacherLoginPage() {
  // const { render } = useRedirect();

  // if (render) {
  return (
    <div className="bg-gray-100">
      <LoginForm user="teacher" loginRoute="teacher" dashboardRoute="teacher" />
    </div>
  );
  // }
}

export default TeacherLoginPage;
