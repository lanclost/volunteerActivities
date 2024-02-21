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
          console.log(response.data.message,'DeleteData');
        }
      }
    });
  };
  const columns = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "ชื่อกิจกรรม",
      dataIndex: "ac_name",
      key: "ac_name",
    },
    {
      title: "ประเภทด้านกิจกรรม",
      dataIndex: "ac_category_id",
      key: "ac_category_id",
    },
    {
      title: "ประเภทกิจกรรม",
      key: "ac_type_id",
      dataIndex: "ac_type_id",
    },
    {
      title: "จำนวนชั่วโมง",
      key: "hour_num",
      dataIndex: "hour_num",
    },
  ];
  const data = [
    {
      index: "1",
      ac_name: "บริจาคเลือด",
      ac_category_id: "ด้านที่ 6 กิจกรรมจิตอาสา เกี่ยวกับการเป็นอาสาสมัคร",
      ac_type_id: "กิจกรรมภายนอก",
      hour_num: 5,
    },
    {
      index: "2",
      ac_name: "กวาดลานวัด",
      ac_category_id: "ด้านที่ 2 กิจกรรมจิตอาสา เกี่ยวกับการทำความสะอาด",
      ac_type_id: "กิจกรรมภายใน",
      hour_num: 4,
    },
    {
      index: "3",
      ac_name: "อบรมกีฬา",
      ac_category_id: "ด้านที่ 1 กิจกรรมจิตอาสา เกี่ยวกับร่างกาย",
      ac_type_id: "กิจกรรมภายใน",
      hour_num: 3,
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
                ) : (
                  <></>
                )}
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
                ) : (
                  <></>
                )}
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
              ) : (
                <></>
              )}
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
                        placeholder="12"
                        required
                        disabled
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
                        placeholder="38"
                        required
                        disabled
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <Table columns={columns} dataSource={data} />
            </>
          ) : (
            <></>
          )}
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
              ) : (
                <></>
              )}
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
                  ) : (
                    <>
                    </>
                  )}
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
                      ) : (
                        <>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                    </>
                  )}
                </>
              </>
            ) : (
              <>
              </>
            )}
          </>
        </Row>
        <br />
      </Card>
    </>
  );
};
export default UserDetail;
