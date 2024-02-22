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
} from "antd";
import GROBAL from "../../../GOBAL";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UserDetail = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();
  const routeParams = useParams();
  //ternary if
  const [users, setUserS] = useState([]);
  const [userApprove, setUserApprove] = useState({
    user_id: "",
    user_approve_status: "",
  });
  const [accumulatedList, setAccumulatedList] = useState([])
  const [accumulatedRemaining, setAccumulatedRemaining] = useState([])
  const getData = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          user_id: routeParams.id,
        }
      );
      if (response.data.require) {
        setUserS(response.data.data[0]);
      }
      // else {
      //   console.log(response.data.message);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataAccumulatedRemaining = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}accumulated/index.php`,
        {
          action: "getAccumulatedByRemaining",
          user_id: routeParams.id,
        }
      );
      if (response.data.require) {
        setAccumulatedRemaining(response.data.data[0]);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataAccumulatedList = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}accumulated/index.php`,
        {
          action: "getAccumulatedByList",
          user_id: routeParams.id,
        }
      );
      response.data.data.forEach((element, index) => {
        element["index"] = index + 1
      })
      if (response.data.require) {
        setAccumulatedList(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkSubmit = () => {
    if (user.user_approve_status === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล",
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
          `${GROBAL.BASE_SERVER.URL}user/user-approve-status/index.php`,
          {
            user_id: users.user_id,
            user_approve_status: userApprove.user_approve_status,
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
  const handleDatas = () => {
    setUserApprove({ ...userApprove, user_approve_status: "allow" })
  };
  useEffect(() => {
    handleDatas();
    getData();
  }, []);
  useEffect(() => {
    getDataAccumulatedList()
    getDataAccumulatedRemaining()
  }, []);
  const DeleteData = async (user_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await axios.post(
          `${GROBAL.BASE_SERVER.URL}user/delete/index.php`,
          {
            user_id: user_id,
          }
        );
        if (resp.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "ลบสำเร็จ",
            timer: 2000,
          }).then(() => {
            getData();
            navigate("/user-request");
          });
        } else {
          console.log(response.data.message, 'DeleteData');
        }
      }
    });
  };
  const columns = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "ชื่อกิจกรรม",
      dataIndex: "activity_name",
      key: "activity_name",
    },
    {
      title: "ประเภทด้านกิจกรรม",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "ประเภทกิจกรรม",
      key: "type_name",
      dataIndex: "type_name",
    },
    {
      title: "จำนวนชั่วโมง",
      key: "accumulated_hours",
      dataIndex: "accumulated_hours",
    },
  ];
  return (
    <>
      <Card title="รายละเอียดผู้ใช้">
        <Row>
          <Col span={3}></Col>
          <Col span={18}>
            <Row justify="center">
              <Col span={11}>
                <label>ชื่อ-นามสกุล</label>
                <br />
                <Input
                  bordered={false}
                  value={users.name}
                  span={2}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>เบอร์โทร</label>
                <br />
                <Input
                  bordered={false}
                  value={users.telephone}
                />
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <>
                {users.type_name === "นักศึกษา" ? (
                  <>
                    <Col span={11}>
                      <label>ชั้นปี</label>
                      <br />
                      <Input
                        bordered={false}
                        value={users.class}
                      />
                    </Col>
                  </>
                ) : (<></>)}
              </>
              <Col span={2}></Col>
              <>
                {users.type_name === "นักศึกษา" ? (
                  <>
                    <Col span={11}>
                      <label>รหัสนักศึกษา</label>
                      <br />
                      <Input
                        bordered={false}
                        value={users.student_id}
                      />
                    </Col>
                  </>
                ) : (<></>)}
              </>
            </Row>
            <br />
            <>
              {users.type_name !== "บุคคลภายนอก" ? (
                <>
                  <Row justify="center">
                    <Col span={11}>
                      <label>คณะ</label>
                      <br />
                      <Input
                        bordered={false}
                        value={users.faculty_name}
                      />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                      <label>สาขา</label>
                      <br />
                      <Input
                        bordered={false}
                        value={users.department_name}
                      />
                    </Col>
                  </Row>
                </>
              ) : (<></>)}
            </>
          </Col>
        </Row>
        <br />
        <>
          {users.type_name === "นักศึกษา" ? (
            <>
              <Row justify="center">
                <Col>
                  <Row justify="pace-evenly">
                    <Col>
                      <label>จำนวนชั่วโมงสะสมภาคการศึกษา</label>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={8}>
                      <Input
                        value={accumulatedRemaining.maximum_hour}
                        bordered={false}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="pace-evenly">
                    <Col>
                      <label>จำนวนชั่วโมงที่ขาด</label>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={8}>
                      <Input
                        value={accumulatedRemaining.remaining_hours}
                        bordered={false}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <Table columns={columns} dataSource={accumulatedList} rowKey="accumulated_id" />
            </>
          ) : (<></>)}
        </>
        {/* <Row justify="center">
          <Col span={2}>
            <Link to={"/User"}>
              <Button>
                ย้อนกลับ
              </Button>
            </Link>
          </Col>
          <Col span={2}></Col>
          <Col span={2}>
            <Link to={`/user-update/${users.user_id}`}>
              <Button>
                แก้ไข
              </Button>
            </Link>
          </Col>
        </Row> */}
        <Row justify="center">
          <Col span={4}>
            <>
              {user.user_approve_status === "wait" ? (
                <Link to={"/user/"}>
                  <Button block>
                    ย้อนกลับ
                  </Button>
                </Link>
              ) : (
                user.user_approve_status === "allow" ? (
                  <Link to={"/user/"}>
                    <Button block>
                      ย้อนกลับ
                    </Button>
                  </Link>
                ) : null
              )}
            </>
          </Col>
          <Col span={1}></Col>
          <Col span={2}>
            <>
              {user.user_type_id === "01" ? (
                <Col span={2}>
                  <Link to={`/user-update/${users.user_id}`}>
                    <Button>
                      แก้ไข
                    </Button>
                  </Link>
                </Col>
              ) : (<></>)}
            </>
          </Col>
          <Col span={1}></Col>
          <>
            {users.user_approve_status === "wait" ? (
              <>
                <>
                  {user.user_type_id === "01" ? (
                    <>
                      <Col span={2}>
                        <Button onClick={(e) => handleSubmit(e)}>
                          อนุมัติ
                        </Button>
                      </Col>
                      <Col span={1}></Col>
                      <Col span={2}>
                        <Button onClick={() => {
                          DeleteData(users.user_id);
                        }}>
                          ไม่อนุมัติ
                        </Button>
                      </Col>
                    </>
                  ) : (<></>)}
                </>
                <>
                  {users.user_id ? (
                    <>
                      {user.user_type_id !== "01" ? (
                        <>
                          <Col span={2}>
                            <Link to={`/user-update/${users.user_id}`}>
                              <Button>
                                แก้ไข
                              </Button>
                            </Link>
                          </Col>
                        </>
                      ) : (<></>)}
                    </>
                  ) : (<></>)}
                </>
              </>
            ) : (<></>)}
          </>
        </Row>
        <br />
      </Card>
    </>
  );
};
export default UserDetail;
