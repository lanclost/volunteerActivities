import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Row, Col, Card, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineTeam, AiOutlineLock } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import GROBAL from "../../../GOBAL";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const imageLogormuti = {
    uri: "./android-chrome-192x192.png",
  };
  const checkSubmit = () => {
    if (user.username === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล ชื่อผู้ใช้",
        timer: 2000,
      });
      return false;
    } else if (user.password === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล รหัสผ่าน",
        timer: 2000,
      });
      return false;
    } else {
      return true;
    }
  }
  const checkApprove = async () => {
    let response = await axios.post(
      `${GROBAL.BASE_SERVER.URL}user/index.php`,
      {
        action: "getUserByApprove",
        user_approve_status: "wait",
        username: user.username,
      }
    );
    if (response.data.data.length > 0) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล ผู้ใช้ใหม่",
        timer: 2000,
      });
      return false
    } else {
      return true
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (checkSubmit() && await checkApprove()) {
        const res = await axios.post(
          `${GROBAL.BASE_SERVER.URL}user/login/index.php`,
          {
            username: user.username,
            password: user.password,
          }
        ).then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          console.log(JSON.parse(localStorage.getItem("user")));
          window.location.reload();
        });
      }
    } catch (error) {
      localStorage.clear()
    }
  };


  return (
    <div>
      <div className="logincontainer">
        <Card className="cardlogin">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col span={5}></Col>
              <Col>
                <img src={imageLogormuti.uri} />
              </Col>
              <Col span={5}></Col>
            </Row>
            <br />
            <Row>
              <Col span={8}></Col>
              <Col>
                <h4>เข้าสู่ระบบ</h4>
              </Col>
              <Col span={8}></Col>
            </Row>
            <br />
            <Row>
              <Col span={24}>
                <Input
                  prefix={<AiOutlineTeam className="iconuser" />}
                  placeholder="ชื่อผู้ใช้"
                  name="username"
                  autoComplete="username"
                  // bordered={false}
                  size="large"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  required
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={24}>
                <Input
                  prefix={<AiOutlineLock className="iconuser" />}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  // bordered={false}
                  size="large"
                  value={user.password}
                  name="password"
                  type="password"
                  placeholder="รหัสผ่าน"
                  autoComplete="current-password"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={9}></Col>
              <Col>
                <Link to={"/repassword"}>
                  <label>ลืมรหัสผ่าน?</label>
                </Link>
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <Col span={24}>
                <Button
                  size="large"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  block
                >
                  เข้าสู่ระบบ
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={9}></Col>
              <Col>
                <label onClick={showModal}>สมัครสมาชิก!</label>
              </Col>
            </Row>
            <Modal title="สมัครสมาชิก!" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Link to={"/registertype"}>
                <Button type="primary">อาจารย์ เจ้าหน้าที่ และบุคคลทั่วไป</Button>
              </Link>
              <br />
              <br />
              <Link to={"/register"}>
                <Button>นักศึกษา</Button>
              </Link>
            </Modal>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
