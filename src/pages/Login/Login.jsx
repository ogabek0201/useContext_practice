import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../helpers/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const { logged, setLogged } = useContext(AuthContext);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      let { data } = await axios.post(
        "https://db-project-sy1b.onrender.com/login",
        values
      );
      localStorage.setItem("userToken", data.accessToken);
      setLogged(true);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    if (localStorage.getItem("userToken")) {
      setLogged(true);
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-[#F8F8F8] h-screen">
      <div className="container mx-auto h-screen flex flex-col justify-center items-center ">
        <h1 className="text-[#111111] mb-4 text-2xl font-medium">Login</h1>
        <div className="bg-white w-[420px] p-4 pt-10 rounded-lg">
          <Form
            name="normal_login"
            className="max-w-lg"
            onFinish={onFinish}
            // initialValues={{}}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

              <a className="float-right text-[#42a5f5]" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button bg-[#42a5f5]"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
