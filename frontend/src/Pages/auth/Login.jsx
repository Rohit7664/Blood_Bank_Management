import React from "react";
import logo from "../../assets/banner1.jpg";
import Form from "../../Components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../Components/shared/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{toast(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src={logo} alt="imge" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
