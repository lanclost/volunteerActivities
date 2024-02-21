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
} from "antd";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import GROBAL from "../../../GOBAL";

const ActivityUpdate = () => {
  const routeParams = useParams();
  const navigate = useNavigate();
  const { TextArea } = Input;
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
    user_id: "",
    activity_approve_status: "",
  });
  const getData = async () => {
    try {
      const resp = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity/index.php`,
        {
          action: "getActivityByID",
          ac_id: routeParams.id,
        }
      );
      if (resp.data.require) {
        setActivity(resp.data.data[0]);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาด',
          text: resp.data.message,
          timer: 2000
        })
        navigate("/activity");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkSubmit = () => {
    if (activity.ac_name === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลชื่อกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.location === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลสถานที่กิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.participants_num === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลจำนวนเปิดรับสมัคร",
        timer: 2000,
      });
      return false;
    } else if (activity.date_start === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลวันที่เปิดกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.date_end === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลวันที่ปิดกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.time_start === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลเวลาเปิดกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.time_end === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลเวลาปิดกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.hour_num === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลจำนวนชั่วโมงกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.hour_num === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลจำนวนชั่วโมงกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.ac_type_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลประเภทกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (activity.ac_category_id === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลด้านกิจกรรม",
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
          `${GROBAL.BASE_SERVER.URL}activity/update/index.php`,
          {
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
            ID: activity.ID,
            first_name: activity.first_name,
            last_name: activity.last_name,
            class: activity.class,
            department_id: activity.department_id,
            faculty_id: activity.faculty_id,
            user_id: activity.user_id,
            activity_approve_status: activity.activity_approve_status,
          }
        );
        if (res.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 2000,
          }).then(() => {
            navigate(`/activity-detail/${routeParams.id}`);
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [activityList, setActivityList] = useState([]);
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
  const dataCategory = category.map((categorys) => ({
    value: categorys.ac_category_id,
    label: categorys.category_num + " " + categorys.category_name
  }))
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
          timer: 2000
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
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
            navigate(`/activity-detail/${routeParams.id}`);
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
  const dataActivityType = activityType.map((activityTypes) => ({
    value: activityTypes.ac_type_id,
    label: activityTypes.type_name
  }))
  useEffect(() => {
    getData();
    getActivityList()
    getDataCategory()
    getDataActivityType()
  }, []);
  const handleDatas = (datas) => {
    setActivity({ ...activity, [datas.target.name]: datas.target.value });
  };
  const handleSelect = (key, data) => {
    setActivity({ ...activity, [key]: data });
  };
  const handleDate = (date, dateString, name) => {
    if (date === null) {
      let dD = new Date().getDate()+1;
      let dM = new Date().getMonth()
      let dY = new Date().getFullYear()
      const reSetDate = (`${dY}-${dM}-${dD}`);
      setActivity({ ...activity, [name]: reSetDate });
      return;
    }
    let d_Date = dateString.split("/")[0];
    let m_Date = dateString.split("/")[1];
    let y_Date = dateString.split("/")[2];
    const Newdate = (`${y_Date}-${m_Date}-${d_Date}`);
    setActivity({ ...activity, [name]: Newdate });
  };
  const handleTime = (timeString, name) => {
    setActivity({ ...activity, [name]: timeString });
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
      title: "จัดการ",
      key: "action",
      render: (_, record) => {
        return (
          <Button type="danger" onClick={() => {
            DeleteData(record.activity_list_id);
          }}>
            ลบ
          </Button>
        )
      }
    },
  ];

  return (
    <>
      <Card title="แก้ไขกิจกรรม">
        <Row justify="center">
          <Col span={8}>
            <label>ชื่อ_นามสกุลผู้เปิดกิจกรรม</label>
            <br />
            <Input
              id="user_id"
              name="user_id"
              value={activity.name}
              onChange={handleDatas}
              required
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
              value={activity.participants_num}
              onChange={handleDatas}
              required
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
              value={activity.ac_category_id}
              onChange={(e) => handleSelect("ac_category_id", e)}
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
                  format={"DD/MM/YYYY"}
                  onChange={(e, dateString) => handleDate(e, dateString, "date_start")}
                  value={moment(activity.date_start)}
                />
              </Col>
              <Col span={2}></Col>
              <Col>
                <label>วันที่ปิดกิจกรรม</label>
                <br />
                <DatePicker
                  format={"DD/MM/YYYY"}
                  onChange={(e, dateString) => handleDate(e, dateString, "date_end")}
                  value={moment(activity.date_end)}
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
              onChange={handleDatas}
              required
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
                <TimePicker format={"HH:mm"}
                  value={activity.time_start ? moment(activity.time_start, "HH:mm") : null}
                  onChange={(e, timeString) => handleTime(timeString, "time_start")}
                />
              </Col>
              <Col span={3}></Col>
              <Col>
                <label>เวลาสิ้นสุดกิจกรรม</label>
                <br />
                <TimePicker format={"HH:mm"}
                  value={activity.time_end ? moment(activity.time_end, "HH:mm") : null}
                  onChange={(e, timeString) => handleTime(timeString, "time_end")}
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
                  value={activity.ac_type_id}
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
              rows={5}
              value={activity.location}
              onChange={handleDatas}
              maxLength={6}
              id="location"
              name="location"
            />
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <label>รายละเอียด</label>
            <TextArea rows={5}
              value={activity.detail}
              onChange={handleDatas}
              maxLength={6} />
          </Col>
        </Row>
        <br />
        <br />
        <Table columns={columns} dataSource={activityList} rowKey="activity_list_id" />
        <Row justify="center">
          <Col span={2}>
            <Link to={`/activity-detail/${routeParams.id}`}>
              <Button>
                ย้อนกลับ
              </Button>
            </Link>
          </Col>
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
export default ActivityUpdate;