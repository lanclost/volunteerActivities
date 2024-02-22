import React, { useState, useEffect, useRef } from "react";
import {
  Space,
  Table,
  Tag,
  Card,
  Input,
  Button,
  Col,
  Row,
  Select,
  DatePicker,
  TimePicker,
  Upload,
  InputNumber,
} from "antd";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineUnlock,
  AiOutlineRollback,
} from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import GROBAL from "../../../GOBAL";
import Swal from "sweetalert2";

const Repassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState({
    username: "",
    password: "",
    confirm_password: "",
  })
  const checkSubmit = () => {
    if (password.username === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลผู้ใช้",
        timer: 2000,
      });
      return false;
    } else if (password.password === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลรหัสผ่าน",
        timer: 2000,
      });
      return false;
    } else if (password.confirm_password === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลยืนยันรหัสผ่าน",
        timer: 2000,
      });
      return false;
    } else if (password.password !== password.confirm_password) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "ข้อมูลรหัสผ่านไม่ตรงกัน",
        timer: 2000,
      });
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (checkSubmit()) {
        const res = await axios.post(
          `${GROBAL.BASE_SERVER.URL}user/repassword/index.php`,
          {
            username: password.username,
            password: password.password,
          }
        );
        if (res.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 2000,
          }).then(() => {
            navigate("/login");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDatas = (datas) => {
    setPassword({ ...password, [datas.target.name]: datas.target.value });
  };
  return (
    <div>
      <div>
      <br />
        <Card >
          <Row justify="center">
            <Col span={6}></Col>
            <Col>
              <h4>รีเซ็ตรหัสผ่าน</h4>
            </Col>
            <Col span={6}></Col>
          </Row>
          <br />
          <Row justify="center">
            <Col span={16}>
              <Input
                name="username"
                placeholder="ชื่อผู้ใช้"
                onChange={(e)=>handleDatas(e)}
                prefix={<AiOutlineUser className="iconuser" />}
                required
              />
            </Col>
          </Row>
          <br />
          <Row justify="center">
            <Col span={16}>
              <Input
                type="password"
                name="password"
                placeholder="รหัสผ่านใหม่"
                onChange={(e)=>handleDatas(e)}
                prefix={<AiOutlineUnlock className="iconuser" />}
                required
              />
            </Col>
          </Row>
          <br />
          <Row justify="center">
            <Col span={16}>
              <Input
                type="password"
                name="confirm_password"
                placeholder="ยืนยันรหัสผ่าน"
                onChange={(e)=>handleDatas(e)}
                prefix={<AiOutlineLock className="iconuser" />}
                required
              />
            </Col>
          </Row>
          <br />
          <Row justify="center">
            <Col span={8}>
              <Link to={"/Login"}>
                <Button>
                  ย้อนกลับ
                </Button>
              </Link>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <Button
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                บันทึก
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default Repassword;
