import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Button,
  Col,
  Row,
  Select,
  Upload,
  Space,
  Form,
} from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import GROBAL from "../../../GOBAL";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineSolution,
  AiOutlinePhone,
  AiOutlineKey,
  AiOutlineUnlock,
  AiOutlineUserAdd,
  AiOutlineRollback,
} from "react-icons/ai";

const Register = () => {
  const routeParams = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    insert_user: "",
    user_id: "",
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
    user_type_id: routeParams.id,
    image: "",
    user_approve_status: routeParams.id2,
  });
  const getDataUserLast = async () => {
    const date = new Date();
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          action: "getUserLastID",
          code: "USID-U" + date.getFullYear(),
          digit: 3,
        }
      )
      setUser({ ...user, user_id: response.data.data[0].user_maxcode });
    } catch (error) {
      console.log(error);
    }
  }

  const checkSubmitPerson = () => {
    if (user.username === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลผู้ใช้",
        timer: 2000,
      });
      return false;
    } else if (user.password === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลรหัสผ่าน",
        timer: 2000,
      });
      return false;
    } else if (user.confirm_password === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลยืนยันรหัสผ่าน",
        timer: 2000,
      });
      return false;
    } else if (user.password !== user.confirm_password) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลรหัสไม่ตรงกัน",
        timer: 2000,
      });
      return false;
    } else if (user.first_name === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลชื่อ",
        timer: 2000,
      });
      return false;
    } else if (user.last_name === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลนามสกุล",
        timer: 2000,
      });
      return false;
    } else if (user.prefix_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลคำนำหน้า",
        timer: 2000,
      });
      return false;
    } else if (user.telephone === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลเบอร์โทร",
        timer: 2000,
      });
      return false;
    } else {
      return true;
    }
  };
  const checkSubmitStudent = () => {
    if (user.username === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลผู้ใช้",
        timer: 2000,
      });
      return false;
    } else if (user.student_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลรหัสนักศึกษา",
        timer: 2000,
      });
      return false;
    } else if (user.password === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลรหัสผ่าน",
        timer: 2000,
      });
      return false;
    } else if (user.confirm_password === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลยืนยันรหัสผ่าน",
        timer: 2000,
      });
      return false;
    } else if (user.password !== user.confirm_password) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลรหัสไม่ตรงกัน",
        timer: 2000,
      });
      return false;
    } else if (user.first_name === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลชื่อ",
        timer: 2000,
      });
      return false;
    } else if (user.last_name === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลนามสกุล",
        timer: 2000,
      });
      return false;
    } else if (user.prefix_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลคำนำหน้า",
        timer: 2000,
      });
      return false;
    } else if (user.yearclass === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลปีการศึกษา",
        timer: 2000,
      });
      return false;
    } else if (user.telephone === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลเบอร์โทร",
        timer: 2000,
      });
      return false;
    } else if (user.faculty_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลคณะ",
        timer: 2000,
      });
      return false;
    } else if (user.department_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลสาขา",
        timer: 2000,
      });
      return false;
    } else {
      return true;
    }
  };
  const checkusername = async () => {
    let response = await axios.post(
      `${GROBAL.BASE_SERVER.URL}user/index.php`,
      {
        action: "getUserByusername",
        username: user.username
      }
    );
    if (response.data.require) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "มีข้อมูลชื่อผู้ใช้ซ้ำ",
        timer: 3000,
      });
      return false
    } else {
      return true
    }
  }
  const SubmitStudent = async (event) => {
    event.preventDefault();
    try {
      if (checkSubmitStudent() && await checkusername()) {
        const res = await axios.post(
          `${GROBAL.BASE_SERVER.URL}user/insert/index.php`,
          {
            insert_user: user.insert_user,
            user_id: user.user_id,
            username: user.username,
            student_id: user.student_id,
            first_name: user.first_name,
            last_name: user.last_name,
            yearclass: user.yearclass,
            telephone: user.telephone,
            password: user.password,
            prefix_id: user.prefix_id,
            department_id: user.department_id,
            faculty_id: user.faculty_id,
            user_type_id: user.user_type_id,
            image: user.image,
            user_approve_status: user.user_approve_status,
          }
        );
        if (res.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 2000,
          }).then(() => {
            navigate(0);
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const SubmitPerson = async (event) => {
    event.preventDefault();
    try {
      if (checkSubmitPerson() && await checkusername()) {
        const res = await axios.post(
          `${GROBAL.BASE_SERVER.URL}user/insert/index.php`,
          {
            insert_user: user.insert_user,
            user_id: user.user_id,
            username: user.username,
            student_id: user.student_id,
            first_name: user.first_name,
            last_name: user.last_name,
            yearclass: user.yearclass,
            telephone: user.telephone,
            password: user.password,
            prefix_id: user.prefix_id,
            department_id: user.department_id,
            faculty_id: user.faculty_id,
            user_type_id: user.user_type_id,
            image: user.image,
            user_approve_status: user.user_approve_status,
          }
        );
        if (res.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 2000,
          }).then(() => {
            navigate(0);
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDatas = (datas) => {
    console.log(datas);
    setUser({ ...user, [datas.target.name]: datas.target.value });
  };
  const handleSelect = (key, data) => {
    setUser({ ...user, [key]: data });
  };
  const [prefix, setPrefix] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [department, setDepartment] = useState([]);
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
  useEffect(() => {
    getDataFaculty();
    getDataDepartment();
    getDataPrefix();
    getDataUserLast()
  }, []);
  const SearchSelectFaculty = (value) => {
    console.log("search:", value);
  };
  const SearchSelectDepartment = (value) => {
    console.log("search:", value);
  };

  return (
    <div>
      <br />
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16} xxl={14}>
          <Card className="cardlogin">
            <Form id="form" onSubmit={(e) => handleSubmit(e)}>
              <Row justify="center">
                <Col>
                  <h1>ลงทะเบียน</h1>
                  <>
                    {routeParams.id === "05" ? (
                      <>
                        <h6>รายละเอียดนักศึกษา</h6>
                      </>
                    ) : (<></>)}
                    {routeParams.id === "04" ? (
                      <>
                        <h6>รายละเอียดบุคคลภายนอก</h6>
                      </>
                    ) : (<></>)}
                  </>
                </Col>
              </Row>
              <br />
              <Row className="columns">
                <Col className="columnregister2">
                  <Row className="columnregister">
                    <Col>
                      <Select
                        className="inputregister2"
                        name="prefix_id"
                        placeholder="คำนำหน้า"
                        size="large"
                        onChange={(e) => handleSelect("prefix_id", e)}
                        required
                        options={DataPrefix}
                      />
                    </Col>
                    <Col>
                      <Input
                        className="inputregister2"
                        name="yearclass"
                        type="number"
                        min={1}
                        max={1}
                        size="large"
                        placeholder="ชั้นปี"
                        onChange={(e) => handleDatas(e)}
                        required
                      />
                    </Col>
                  </Row>
                </Col>
                <>
                  {routeParams.id === "05" ? (
                    <>
                      <Col>
                        <Input
                          className="inputregister"
                          name="student_id"
                          size="large"
                          placeholder="รหัสนักศึกษา"
                          prefix={<AiOutlineKey className="iconuser" />}
                          required
                          onChange={(e) => handleDatas(e)}
                        />
                      </Col>
                    </>
                  ) : (<></>)}
                </>
              </Row>
              <Row className="columns">
                <Col>
                  <Input
                    className="inputregister"
                    name="username"
                    size="large"
                    // autoComplete="username"
                    placeholder="ชื่อผู้ใช้"
                    prefix={<AiOutlineUser className="iconuser" />}
                    onChange={(e) => handleDatas(e)}
                    required
                  />
                </Col>
                <Col>
                  <Input
                    className="inputregister"
                    name="telephone"
                    size="large"
                    placeholder="เบอร์โทร"
                    prefix={<AiOutlinePhone className="iconuser" />}
                    required
                    onChange={(e) => handleDatas(e)}
                  />
                </Col>
              </Row>
              <Row className="columns">
                <Col>
                  <Input
                    className="inputregister"
                    name="password"
                    id="password"
                    type="password"
                    size="large"
                    placeholder="รหัสผ่าน"
                    prefix={<AiOutlineUnlock className="iconuser" />}
                    required
                    onChange={(e) => handleDatas(e)}
                  />
                </Col>
                <Col>
                  <Input
                    className="inputregister"
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    size="large"
                    placeholder="ยืนยันรหัสผ่าน"
                    prefix={<AiOutlineLock className="iconuser" />}
                    onChange={(e) => handleDatas(e)}
                    required
                  />
                </Col>
              </Row>
              <Row className="columns">
                <Col>
                  <Input
                    className="inputregister"
                    name="first_name"
                    size="large"
                    placeholder="ชื่อ"
                    prefix={<AiOutlineSolution className="iconuser" />}
                    required
                    onChange={(e) => handleDatas(e)}
                  />
                </Col>
                <Col>
                  <Input
                    className="inputregister"
                    name="last_name"
                    size="large"
                    placeholder="นามสกุล"
                    prefix={<AiOutlineSolution className="iconuser" />}
                    required
                    onChange={(e) => handleDatas(e)}
                  />
                </Col>
              </Row>
              <>
                {routeParams.id === "05" ? (
                  <>
                    <Row className="columns">
                      <Col>
                        <Select
                          className="inputregister"
                          showSearch
                          name="faculty_id"
                          placeholder="คณะ"
                          optionFilterProp="children"
                          onSearch={SearchSelectFaculty}
                          size="large"
                          onChange={(e) => handleSelect("faculty_id", e)}
                          filterOption={(input, option) =>
                            (option?.label ?? "")
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          }
                          options={DataFaculty}
                        />
                      </Col>
                      <Col>
                        <Select
                          className="inputregister"
                          showSearch
                          name="department_id"
                          placeholder="สาขา"
                          optionFilterProp="children"
                          size="large"
                          onChange={(e) => handleSelect("department_id", e)}
                          onSearch={SearchSelectDepartment}
                          filterOption={(input, option) =>
                            (option?.label ?? "")
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          }
                          options={DataDepartment}
                        />
                      </Col>
                    </Row>
                  </>
                ) : (<></>)}
              </>
              <br />
              <Row justify="center">
                <Col>
                  <Link to={"/Login"}>
                    <Button
                      size="large"
                      block
                    >
                      ย้อนกลับ
                    </Button>
                  </Link>
                </Col>
                <Col span={2}></Col>
                <>
                  {routeParams.id === "05" ? (
                    <>
                      <Col>
                        <Button
                          type="submit"
                          size="large"
                          onClick={(e) => SubmitStudent(e)}
                        >
                          ยืนยันสมัคร
                        </Button>
                      </Col>
                    </>
                  ) : (<></>)}
                  {routeParams.id === "04" ? (
                    <>
                      <Col>
                        <Button
                          type="submit"
                          size="large"
                          onClick={(e) => SubmitPerson(e)}
                        >
                          ยืนยันสมัคร
                        </Button>
                      </Col>
                    </>
                  ) : (<></>)}
                </>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
