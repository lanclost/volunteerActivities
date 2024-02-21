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
  Image,
  Upload,
} from "antd";
import GROBAL from "../../../GOBAL";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UserUpdate = () => {
  const routeParams = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [userS, setUserS] = useState({
    insert_user: "",
    username: "",
    student_id: "",
    first_name: "",
    last_name: "",
    yearclass: "",
    telephone: "",
    password: "",
    confirm_password: "",
    prefix_id: "",
    department_id: "",
    faculty_id: "",
    user_type_id: "",
    image: "",
    user_approve_status: "",
  });
  console.log(userS);
  const getDataUser = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          user_id: routeParams.id,
        }
      );
      if (response.data.require) {
        setUserS(response.data.data[0]);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาด',
          text: response.data.message,
          timer: 2000
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkSubmit = () => {
    if (userS.prefix_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล คำนำหน้า",
        timer: 2000,
      });
      return false;
    } else if (userS.telephone === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล เบอร์โทร",
        timer: 2000,
      });
      return false;
    } else if (userS.first_name === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล ชื่อ",
        timer: 2000,
      });
      return false;
    } else if (userS.last_name === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล นามสกุล",
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
          `${GROBAL.BASE_SERVER.URL}user/update/index.php`,
          {
            user_id: userS.user_id,
            username: userS.username,
            student_id: userS.student_id,
            first_name: userS.first_name,
            last_name: userS.last_name,
            yearclass: userS.yearclass,
            telephone: userS.telephone,
            password: userS.password,
            prefix_id: userS.prefix_id,
            department_id: userS.department_id,
            faculty_id: userS.faculty_id,
            user_type_id: userS.user_type_id,
            image: userS.image,
            user_approve_status: userS.user_approve_status,
          }
        );
        if (res.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 2000,
          }).then(() => {
            navigate("/user");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [prefix, setPrefix] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [department, setDepartment] = useState([]);
  const [userType, setUserType] = useState([]);
  const getUserType = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user-type/index.php`,
        {
          action: "getUserTypeBy"
        }
      )
      if (response.data.require) {
        setUserType(response.data.data);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาด',
          text: response.data.message,
          timer: 2000
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataPrefix = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}prefix/index.php`,
        {
          action: "getPrefixBy"
        }
      )
      if (response.data.require) {
        setPrefix(response.data.data);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาด',
          text: response.data.message,
          timer: 2000
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataFaculty = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}faculty/index.php`, {
        action: "getFacultyTypeBy"
      }
      );
      if (response.data.require) {
        setFaculty(response.data.data);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาด',
          text: response.data.message,
          timer: 2000
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataDepartment = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}department/index.php`, {
        action: "getDepartmentTypeBy"
      }
      );
      if (response.data.require) {
        setDepartment(response.data.data);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาด',
          text: response.data.message,
          timer: 2000
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  const DataDepartment = department.map((departmentdatas) => ({
    value: departmentdatas.department_id,
    label: departmentdatas.department_name,
  }));
  const DataFaculty = faculty.map((facultydatas) => ({
    value: facultydatas.faculty_id,
    label: facultydatas.faculty_name,
  }));
  const DataPrefix = prefix.map((prefixdatas) => ({
    value: prefixdatas.prefix_id,
    label: prefixdatas.prefix_name,
  }));
  const DataUserType = userType.map((usertypedatas) => ({
    value: usertypedatas.user_type_id,
    label: usertypedatas.type_name,
  }));
  useEffect(() => {
    getDataUser();
    getDataFaculty();
    getDataDepartment();
    getDataPrefix();
    getUserType()
  }, []);
  const handleDatas = (datas) => {
    setUserS({ ...userS, [datas.target.name]: datas.target.value });
  };
  const handleSelect = (key, data) => {
    setUserS({ ...userS, [key]: data });
  };
  const SearchSelectFaculty = (value) => {
    console.log("search:", value);
  };
  const SearchSelectDepartment = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <Card title="แก้ไขผู้ใช้">
        <Row>
          <Col span={3}></Col>
          <Col span={18}>
            <Row justify="center">
              <Col span={11}>
                <label>ระดับผู้ใช้</label>
                <br />
                <>
                  {user.type_name === "แอดมิน" ? (
                    <>
                      <Select
                        name="user_type_id"
                        value={userS.type_name}
                        onChange={(e) => handleSelect("user_type_id", e)}
                        required
                        options={DataUserType}
                        style={{
                          width: 400,
                        }}
                      />
                    </>
                  ) : (
                    <>{userS.type_name}</>
                  )}
                </>
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>คำนำหน้า</label>
                <br />
                <Select
                  name="prefix_id"
                  value={userS.prefix_name}
                  onChange={(e) => handleSelect("prefix_id", e)}
                  required
                  options={DataPrefix}
                />
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <Col span={11}>
                <label>ชื่อผู้ใช้</label>
                <br />
                <Input
                  name="username"
                  value={userS.username}
                  onChange={(e) => handleDatas(e)}
                  required
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>เบอร์โทร</label>
                <br />
                <Input
                  name="telephone"
                  value={userS.telephone}
                  onChange={(e) => handleDatas(e)}
                  required
                />
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <Col span={11}>
                <label>ชื่อ</label>
                <br />
                <Input
                  name="first_name"
                  value={userS.first_name}
                  onChange={(e) => handleDatas(e)}
                  required
                  span={2}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>นามสกุล</label>
                <br />
                <Input
                  name="last_name"
                  value={userS.last_name}
                  onChange={(e) => handleDatas(e)}
                  required
                />
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <Col span={11}>
                <label>รหัสผ่าน</label>
                <br />
                <Input
                  name="password"
                  type="password"
                  onChange={(e) => handleDatas(e)}
                  required
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>ยืนยันรหัสผ่าน</label>
                <br />
                <Input
                  name="confirm_password"
                  type="password"
                  onChange={(e) => handleDatas(e)}
                  required
                />
              </Col>
            </Row>
            <Row justify="center">
              <Col span={11}>
                <label>ชั้นปี</label>
                <br />
                <Input
                  name="yearclass"
                  value={userS.yearclass}
                  type="number"
                  onChange={(e) => handleDatas(e)}
                  required
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>รหัสนักศึกษา</label>
                <br />
                <Input
                  name="student_id"
                  onChange={(e) => handleDatas(e)}
                  required
                />
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <Col span={11}>
                <label>คณะ</label>
                <br />
                <Select
                  showSearch
                  name="faculty_id"
                  value={userS.faculty_id}
                  optionFilterProp="children"
                  onSearch={SearchSelectFaculty}
                  onChange={(e) => handleSelect("faculty_id", e)}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  style={{
                    width: 400,
                  }}
                  options={DataFaculty}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>สาขา</label>
                <br />
                <Select
                  showSearch
                  name="department_id"
                  value={userS.department_id}
                  placeholder="เลือก"
                  optionFilterProp="children"
                  onChange={(e) => handleSelect("department_id", e)}
                  onSearch={SearchSelectDepartment}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  style={{
                    width: 400,
                  }}
                  options={DataDepartment}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <>
            {user.user_type_id === '01' ? (
              <>
                <Col span={2}>
                  <Link to={`/user-detail/${userS.user_id}`}>
                    <Button>
                      ย้อนกลับ
                    </Button>
                  </Link>
                </Col>
              </>
            ) : (
              <></>
            )}
          </>
          <Col span={2}></Col>
          <Col span={2}>
            <Button

              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              บันทึก
            </Button>
          </Col>
        </Row>
        <br />
      </Card>
    </>
  );
};
export default UserUpdate;
