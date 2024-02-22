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

const ActivityCompletedExpose = () => {
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
      // else {
      //   console.log(response.data.message);
      // }
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
  useEffect(() => {
    getData()
    getActivityList()
  }, [])
  const DeleteData = async (activity_list_id) => {
    Swal.fire({
      title: "ลบข้อมูล?",
      text: "คุณยืนยันที่จะลบข้อมูล!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.post(
          `${GROBAL.BASE_SERVER.URL}activity-list/delete/index.php`,
          {
            activity_list_id: activity_list_id,
          }
        );
        if (response.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "ลบสำเร็จ",
            timer: 2000,
          }).then(() => {
            getActivityList();
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "ผิดพลาด",
            text: "ผิดพลาด",
            timer: 2000,
          });
        }
      }
    });
  };
  const columns = [
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
    {
      title: 'จัดการ',
      key: 'action',
      render: (_, record) => {
        return (
          <Space size="middle">
            <Link to={`/activity-check-evidence/${record.ac_id}/${record.user_id}`}>
              <Button type="primary">
                หลักฐานเข้ากิจกรรม
              </Button>
            </Link>
          </Space>
        )
      },
    },
  ];
  return (
    <>
      <Card title="รายละเอียดกิจกรรมเสร็จสิ้น" >
        <Row justify="center">
          <Col span={8}>
            <label>ชื่อ_นามสกุลผู้เปิดกิจกรรม</label>
            <br />
            <Input
              value={activity.name}
              bordered={false}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <label>ชื่อกิจกรรม</label>
            <br />
            <Input
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
              value={activity.participants_num}
              bordered={false}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <label>ด้านกิจกรรม</label>
            <br />
            <Input value={activity.category_num + " " + activity.category_name}
              bordered={false}
              style={{
                width: 390,
              }} />
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
                <DatePicker format={"DD/MM/YYYY"} bordered={false} value={moment(activity.date_start)} />
              </Col>
            </Row>
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <label>จำนวนชั่วโมง</label>
            <br />
            <Input
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
                <Input value={activity.type_name}
                  bordered={false} />
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
        <label>ผู้เข้าร่วมกิจกรรม</label>
        <Table columns={columns} dataSource={activityList} rowKey="activity_list_id" />
        <Row justify="center">
          <Col>
            <Link to={"/activity-completed"}>
              <Button>
                ย้อนกลับ
              </Button>
            </Link>
          </Col>
          <Col span={2}></Col>
          <Col>
            <Button disabled type="danger" onClick={() => {
              DeleteData()
            }}>
              ลบ
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default ActivityCompletedExpose
