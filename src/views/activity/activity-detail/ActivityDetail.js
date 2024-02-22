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
  Modal,
  Upload,
  message,
} from "antd";
import GROBAL from "../../../GOBAL";
import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const ActivityDetail = () => {
  const routeParams = useParams();
  const navigate = useNavigate();
  const { Option } = Select;
  const { TextArea } = Input;
  //ternary if
  const user = JSON.parse(window.localStorage.getItem("user"));
  //datebase
  const [activity, setActivity] = useState({
    ac_id: "",
    ac_name: "",
    location: "",
    participants_num: "",
    date_start: "",
    date_end: "",
    time_start: "",
    time_end: "",
    hour_num: "",
    detail: "",
    image: "",
    ac_type_id: "",
    ac_category_id: "",
    ID: "",
    first_name: "",
    last_name: "",
    class: "",
    department_id: "",
    faculty_id: "",
    activity_approve_status: "",
  });
  const [activityApprove, setActivityApprove] = useState({
    ac_id: "",
    activity_approve_status: "",
  });
  const [activityList, setActivityList] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity/index.php`,
        {
          action: "getActivityByID",
          ac_id: routeParams.id,
        }
      );
      if (response.data.require) {
        setActivity(response.data.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getActivityList = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity-list/index.php`,
        {
          action: "getActivityListByParticipants",
          ac_id: routeParams.id,
        }
      );
      if (response.data.require) {
        setActivityList(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkSubmit = () => {
    if (activity.activity_approve_status === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล",
        timer: 3000,
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
          `${GROBAL.BASE_SERVER.URL}activity/activity-approve-status/index.php`,
          {
            ac_id: activity.ac_id,
            activity_approve_status: activityApprove.activity_approve_status,
          }
        );
        if (res.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 3000,
          }).then(() => {
            navigate("/activity");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkListUser = async () => {
    if (activityList.length >= activity.participants_num) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "จำนวนผู้เข้าร่วมกิจกรรมเต็ม",
        timer: 3000,
      });
      return false
    } else {
      return true
    }
  }
  const SubmitComeActivity = async (event) => {
    event.preventDefault();
    try {
      if (await checkListUser()) {
        const res = await axios.post(
          `${GROBAL.BASE_SERVER.URL}activity-list/insert/index.php`,
          {
            insertActivityListByComeActivity: "",
            ac_id: activity.ac_id,
            user_id: user.user_id,
          }
        );
        if (res.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 3000,
          }).then(() => {
            navigate("/activity");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getActivityList()
  }, []);
  const DeleteData = async (ac_id) => {
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
        const response = await axios.post(
          `${GROBAL.BASE_SERVER.URL}activity/delete/index.php`,
          {
            ac_id: ac_id,
          }
        );
        if (response.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "ลบสำเร็จ",
            timer: 3000,
          }).then(() => {
            getData();
            navigate("/activity");
          });
        } else {
          console.log(error);
        }
      }
    });
  };
  //table
  const columns = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "รหัสนักศึกษา",
      dataIndex: "student_id",
      key: "student_id",
    },
    {
      title: "ชื่อ-นามสกุล",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "คณะ",
      dataIndex: "faculty_name",
      key: "faculty_name",
    },
    {
      title: "สาขา",
      key: "department_name",
      dataIndex: "department_name",
    },
  ];

  const handleDatas = () => {
    setActivityApprove({ ...activityApprove, activity_approve_status: "allow" })
  };
  useEffect(() => {
    handleDatas();
  }, []);
  return (
    <>
      <Card title="รายละเอียดกิจกรรม" >
        <Row justify="center">
          <Col span={8}>
            <label>ชื่อ_นามสกุลผู้เปิดกิจกรรม</label>
            <br />
            <Input
              id="name"
              name="name"
              value={activity.name}
              bordered={false}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <label>ชื่อกิจกรรม</label>
            <br />
            <Input
              id="ac_name"
              name="ac_name"
              value={activity.ac_name}
              bordered={false}
            />
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col span={8}>
            <label>จำนวนเปิดรับสมัคร</label>
            <br />
            <Input
              id="participants_num"
              name="participants_num"
              value={activity.participants_num}
              bordered={false}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <label>ด้านกิจกรรม</label>
            <br />
            <Input
              value={activity.category_num + " " + activity.category_name}
              bordered={false}
              style={{
                width: 390,
              }}
            />
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col span={8}>
            <Row>
              <Col>
                <label>วันที่เปิดกิจกรรม</label>
                <br />
                <DatePicker format={"DD/MM/YYYY"} bordered={false} value={moment(activity.date_start)} />
              </Col>
              <Col span={2}></Col>
              <Col>
                <label>วันที่ปิดกิจกรรม</label>
                <br />
                <DatePicker format={"DD/MM/YYYY"} bordered={false} value={moment(activity.date_end)} />
              </Col>
            </Row>
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <label>จำนวนชั่วโมง</label>
            <br />
            <Input
              id="hour_num"
              name="hour_num"
              value={activity.hour_num}
              bordered={false}
            />
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col span={8}>
            <Row>
              <Col>
                <label>เวลาเริ่มกิจกรรม</label>
                <br />
                <TimePicker format={"HH:mm"} bordered={false} value={moment(activity.time_start, "HH:mm")} />
              </Col>
              <Col span={3}></Col>
              <Col>
                <label>เวลาสิ้นสุดกิจกรรม</label>
                <br />
                <TimePicker format={"HH:mm"} bordered={false} value={moment(activity.time_end, "HH:mm")} />
              </Col>
            </Row>
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <Row>
              <Col>
                <label>กำหนดรูปแบบ</label>
                <br />
                <Input
                  bordered={false}
                  value={activity.type_name}
                  style={{
                    width: 155,
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col span={8}>
            <label>สถานที่</label>
            <TextArea
              rows={5}
              value={activity.location}
              maxLength={6}
              id="location"
              name="location"
              bordered={false}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <label>รายละเอียด</label>
            <TextArea rows={5} value={activity.detail} maxLength={6} bordered={false} />
          </Col>
        </Row>
        <br />
        <br />
        <label>ผู้เข้าร่วมกิจกรรม</label>
        <Table columns={columns} dataSource={activityList} rowKey="activity_list_id" />
        <br />
        <Row justify="center">
          <Col span={4}>
            <>
              {activity.activity_approve_status === "wait" ? (
                <Link to={"/activity-request/"}>
                  <Button block>
                    ย้อนกลับ
                  </Button>
                </Link>
              ) : (
                activity.activity_approve_status === "allow" ? (
                  <Link to={"/activity/"}>
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
                  <Link to={`/activity-update/${activity.ac_id}`}>
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
            {activity.activity_approve_status === "wait" ? (
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
                          DeleteData(activity.ac_id);
                        }}>
                          ไม่อนุญาต
                        </Button>
                      </Col>
                    </>
                  ) : (
                    <>
                    </>
                  )}
                </>
                <>
                  {activity.user_id ? (
                    <>
                      {user.user_type_id !== "01" ? (
                        <>
                          <Col span={2}>
                            <Link to={`/activity-update/${activity.ac_id}`}>
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
          <Col span={3}>
            <>
              {user.user_type_id === "05" ? (
                <>
                  {activityList.length > 0 ? (
                    <>
                      {(activityList.find((e) => e.user_id === user.user_id)) ? (
                        <>
                          <Link to={`/activity-check-evidence/${activity.ac_id}/${user.user_id}`}>
                            <Button
                              type="submit"
                            >
                              ส่งหลักฐาน
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Button
                            type="submit"
                            onClick={(e) => SubmitComeActivity(e)}
                          >
                            เข้าร่วมกิจกรรม
                          </Button>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Button
                        type="submit"
                        onClick={(e) => SubmitComeActivity(e)}
                      >
                        เข้าร่วมกิจกรรม
                      </Button>
                    </>
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default ActivityDetail;
