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
  Form,
} from "antd";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import GROBAL from "../../../GOBAL";
import UserModal from "./components/user-modal";
import moment from "moment";
const ActivityInsert = (props) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();
  const { TextArea } = Input;
  const [activity, setActivity] = useState({
    insert_activity: "",
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
    user_id: "",
    activity_approve_status: "",
  });
  const [users, setUsers] = useState([]);
  const checkSubmit = () => {

    if (activity.ac_name === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลชื่อกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.location === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลสถานที่กิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.participants_num === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลจำนวนเปิดรับสมัคร",
        timer: 3000,
      });
      return false;
    } else if (activity.date_start === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลวันที่เปิดกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.date_end === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลวันที่ปิดกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.time_start === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลเวลาเปิดกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.time_end === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลเวลาปิดกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.hour_num === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลจำนวนชั่วโมงกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.hour_num === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลจำนวนชั่วโมงกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.ac_type_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลประเภทกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.ac_category_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลด้านกิจกรรม",
        timer: 3000,
      });
      return false;
    } else if (activity.hour_num > category.find((e) => e.ac_category_id === activity.ac_category_id).hour_max) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล จำนวนชั่วโมง",
        timer: 3000,
      });
      return false;
    } else if (users.length > activity.participants_num) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "นักศึกษาที่เข้าร่วมเกินจำนวนเปิดรับสมัคร",
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
      await checkUserType().then(async () => {

        if (checkSubmit() && checkDate()) {

          const response = await axios.post(
            `${GROBAL.BASE_SERVER.URL}activity/insert/index.php`,
            {
              insert_activity: activity.insert_activity,
              ac_id: activity.ac_id,
              ac_name: activity.ac_name,
              location: activity.location,
              participants_num: activity.participants_num,
              date_start: activity.date_start,
              date_end: activity.date_end,
              time_start: activity.time_start,
              time_end: activity.time_end,
              hour_num: activity.hour_num,
              detail: activity.detail,
              image: activity.image,
              ac_type_id: activity.ac_type_id,
              ac_category_id: activity.ac_category_id,
              user_id: activity.user_id,
              first_name: activity.first_name,
              last_name: activity.last_name,
              class: activity.class,
              department_id: activity.department_id,
              faculty_id: activity.faculty_id,
              activity_approve_status: activity.activity_approve_status,
              users: users
            }
          );
          if (response.data.require) {
            Swal.fire({
              icon: "success",
              title: "สำเร็จ",
              text: "บันทึกสำเร็จ",
              timer: 3000,
            }).then(() => {
              navigate("/activity");
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "ผิดพลาด",
              text: "ไม่สามารถบันทึกได้",
              timer: 3000,
            })
          }
        }
      })
    } catch (error) {
      console.log(error);
    }
  };
  const checkUserType = async () => {
    if (user.type_name === "นักศึกษา") {
      setActivity({ ...activity, activity_approve_status: "wait", user_id: user.user_id })
    } else {
      setActivity({ ...activity, activity_approve_status: "allow", user_id: user.user_id })
    }
  };
  const [category, setCategory] = useState([])
  const getDataCategory = async () => {
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity-category/index.php`,
        {
          action: "getActivityCategoryBy",
        }
      );
      if (response.data.require) {
        setCategory(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dataCategory = category.map((categorys) => ({
    value: categorys.ac_category_id,
    label: categorys.category_num + " " + categorys.category_name,
    hour_max: categorys.hour_max,
  }))
  const getDataActivityLast = async () => {
    const date = new Date();
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity/index.php`,
        {
          action: "getActivityLastID",
          code: "ACID-U" + date.getFullYear(),
          digit: 3,
        }
      )
      setActivity({ ...activity, ac_id: response.data.data[0].activity_maxcode });
    } catch (error) {
      console.log(error);
    }
  }
  const [activityType, setActivityType] = useState([])
  const getDataActivityType = async () => {
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity-type/index.php`,
        {
          action: "getActivityTypeBy",
        }
      )
      if (response.data.require) {
        setActivityType(response.data.data);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาด',
          text: response.data.message,
          timer: 3000
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
  const dataActivityType = activityType.map((activityTypes) => ({
    value: activityTypes.ac_type_id,
    label: activityTypes.type_name
  }))
  useEffect(() => {
    checkUserType()
  }, [activity.user_id, activity.activity_approve_status]);
  useEffect(() => {
    getDataActivityLast()
    getDataCategory()
    getDataActivityType()
  }, [])
  const handleDatas = (datas) => {
    setActivity({ ...activity, [datas.target.name]: datas.target.value });
  };

  const handleSelectCategory = (key, data) => {
    let activityCopy = { ...activity };
    if (key === 'ac_category_id') {
      let selectedCategory = dataCategory.find(category => category.value === data);
      setActivity({ ...activityCopy, hour_num: selectedCategory.hour_max, [key]: data});
    }
  };//Set the category data and send the maximum hour data into hour_num
  const handleSelect = (key, data) => {
    setActivity({ ...activity, [key]: data });
  };
  const handleDate = (dateString, name) => {
    let D_date = dateString.split("/")[0];
    let M_date = dateString.split("/")[1];
    let Y_date = dateString.split("/")[2];
    const date =(`${Y_date}-${M_date}-${D_date}`);
    setActivity({ ...activity, [name]: date });
  };
  const handleTime = (timeString, name) => {
    setActivity({ ...activity, [name]: timeString });
  };
  const checkDate = () => {
    //Date
    const date_start = new Date(activity.date_start).getTime()
    const date_end = new Date(activity.date_end).getTime()
    const date_current = Date.now()
    //Time
    const startTime = new Date(`2023-01-01T${activity.time_start}`)
    const endTime = new Date(`2023-01-01T${activity.time_end}`);
    const hourDifference = (endTime - startTime) / 3600000 // Convert milliseconds to hours
    if (date_start <= date_current) {
      Swal.fire({
        title: 'เกิดความผิดพลาด',
        text: 'กรุณาใส่ข้อมูล วันที่เปิดกิจกรรมใหม่',
        timer: 3000
      })
      return false
    } else if (date_end < date_start) {
      Swal.fire({
        title: 'กรุณาใส่ข้อมูลใหม่',
        text: 'กรุณาใส่ข้อมูล วันที่ปิดกิจกรรม',
        timer: 3000
      })
      return false
    } else if (hourDifference < activity.hour_num) {
      Swal.fire({
        title: 'กรุณาใส่ข้อมูลใหม่',
        text: 'ช่วงระยะเวลาเปิด/ปิด น้อยกว่าจำนวนชั่วโมงกิจกรรม',
        timer: 3000
      })
      return false
    } else {
      return true
    }
  }
  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showInsertUser = () => {
    setIsModalOpen(true);
  };
  const handleOk = (e) => {
    setUsers(e)
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {

  }, [isModalOpen, users, activity.participants_num])

  //table
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
  ];

  return (
    <>
      <Card title="เพิ่มกิจกรรม">
        <Form>
          <Row justify="center">
            <Col span={8}>
              <label>ชื่อ-นามสกุล ผู้เปิดกิจกรรม</label>
              <br />
              <Input
                id="user_id"
                name="user_id"
                value={user.name}
                onChange={handleDatas}
                disabled
              />
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <label>ชื่อกิจกรรม</label>
              <br />
              <Input
                id="ac_name"
                name="ac_name"
                required
                onChange={handleDatas}
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
                placeholder=""
                required
                type="number"
                onChange={handleDatas}
              />
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <label>ด้านกิจกรรม</label>
              <br />
              <Select
                required
                defaultValue="เลือก"
                style={{
                  width: 390,
                }}
                onChange={(e) => handleSelectCategory("ac_category_id", e)}
                options={dataCategory}
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
                  <DatePicker
                    name="date_start"
                    onChange={(e, dateString) =>
                      handleDate(dateString, "date_start")
                    }
                    format={"DD/MM/YYYY"}
                    placeholder="เลือก"
                    required
                  />
                </Col>
                <Col span={2}></Col>
                <Col>
                  <label>วันที่ปิดกิจกรรม</label>
                  <br />
                  <DatePicker
                    name="date_end"
                    onChange={(e, dateString) =>
                      handleDate(dateString, "date_end")
                    }
                    format={"DD/MM/YYYY"}
                    placeholder="เลือก"
                    required
                  />
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
                placeholder="จำนวนชั่วโมงจะใส่ได้ไม่เกินกว่าด้านกิจกรรมที่เลือก"
                required
                type="number"
                onChange={handleDatas}
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
                  <TimePicker
                    format={"HH:mm"}
                    placeholder="เลือก"
                    onChange={(e, timeString) =>
                      handleTime(timeString, "time_start")
                    }
                    required
                  />
                </Col>
                <Col span={3}></Col>
                <Col>
                  <label>เวลาสิ้นสุดกิจกรรม</label>
                  <br />
                  <TimePicker
                    format={"HH:mm"}
                    placeholder="เลือก"
                    onChange={(e, timeString) =>
                      handleTime(timeString, "time_end")
                    }
                    required
                  />
                </Col>
              </Row>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <Row>
                <Col>
                  <label>ประเภทกิจกรรม</label>
                  <br />
                  <Select
                    required
                    defaultValue="เลือก"
                    style={{
                      width: 140,
                    }}
                    options={dataActivityType}
                    onChange={(e) => handleSelect("ac_type_id", e)}
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
                required
                rows={5}
                name="location"
                placeholder="ที่ตั้งกิจกรรม"
                onChange={handleDatas}
              />
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <label>รายละเอียด</label>
              <TextArea
                required
                name="detail"
                rows={5}
                placeholder="...."
                onChange={handleDatas}
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <Button
                onClick={(e) => showInsertUser(e)}
              >
                กำหนดผู้เข้าร่วม
              </Button>
            </Col>
          </Row>
          <br />
          <Table columns={columns} dataSource={users} rowKey="user_id" />
          <Row justify="center">
            <Col span={2}>
              <Link to={"/activity/"}>
                <Button block>
                  ย้อนกลับ
                </Button>
              </Link>
            </Col>
            <Col span={2}></Col>
            <Col span={2}>
              <Button type="submit" onClick={(e) => handleSubmit(e)}>
                บันทึก
              </Button>
            </Col>
          </Row>
          <br />
        </Form>
      </Card>
      <UserModal
        isModalOpen={isModalOpen}
        handleOk={(e) => handleOk(e)}
        handleCancel={(e) => handleCancel(e)}
        ac_id={activity.ac_id}
        users={users}
        participants_num={activity.participants_num}
      />
    </>
  );
};
export default ActivityInsert;
