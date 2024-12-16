import { Form, Input, Button, Row, Col } from 'antd';
import {setToken} from "@/utils/token";
import {login} from "@/apis/user";
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom'

export default function Login() {
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    // 与后端接口交互逻辑
    const res = await login(values)
    console.log("res===>" + res)
    //setToken(res.data.token)

    const navigate = useNavigate();
    let location = useLocation();
    const [search,setSearch] = useSearchParams()
    const redirect = search.get('redirect')
    const redirectUri = redirect === null ? '/' : redirect
    // 跳转到首页
    navigate(redirectUri)
    message.success('登录成功')
  };
    return (
      <Row align="middle" justify="center" style={{ minHeight: '50vh' }}>
      <Col span={8}>
        <h3>系统登录</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true ,username:'admin',password: '123456'}}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input placeholder="用户名"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    )
  }