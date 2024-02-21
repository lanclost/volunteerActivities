import {
  Card,
  Input,
  Button,
  Col,
  Row,
  Select,
  DatePicker,
  TimePicker,
  notification,
} from "antd";
import Swal from "sweetalert2";
import moment from "moment";
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import GROBAL from "../../GOBAL";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CalendarUpdate = () => {
  const routeParams = useParams();
  const navigate = useNavigate();
  const { TextArea } = Input;
  const [calendar, setCalendar] = useState({
    insert_calendar: "",
    calendar_start: "",
    calendar_end: "",
    calendar_detail: "",
    calendar_id: "",
  });
  const getData = async () => {

    try {
      const resp = await axios.post(
        `${GROBAL.BASE_SERVER.URL}calendar/index.php`,
        {
          action: "getCalendarByID",
          calendar_id: routeParams.id,
        }
      );
      if (resp.data.require) {
        setCalendar(resp.data.data[0]);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาดของระบบ',
          text: response.data.message,
          timer: 2000
        })
      }
      console.log(calendar);
      // var date = moment(calendar.calendar_end);
      // var dateMonthAsWord = moment(calendar.calendar_end).format("DD-MMM-YYYY");
      // console.log("ASDASD");
      // console.log(date, dateMonthAsWord);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const checkSubmit = () => {
    if (calendar.calendar_start === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลวันที่เปิดกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (calendar.calendar_end === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลวันที่ปิดกิจกรรม",
        timer: 2000,
      });
      return false;
    } else if (calendar.calendar_detail === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลรายละเอียด",
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
          `${GROBAL.BASE_SERVER.URL}calendar/update/index.php`,
          {
            calendar_start: calendar.calendar_start,
            calendar_end: calendar.calendar_end,
            calendar_detail: calendar.calendar_detail,
            calendar_id: calendar.calendar_id,
          }
        );
        if (res.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 2000,
          }).then(() => {
            navigate("/calendar-view");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDatas = (datas) => {
    setCalendar({ ...calendar, [datas.target.name]: datas.target.value });
  };
  const onChangeDate = (date, dateString, name) => {
    if (date === null) {
      let dD = new Date().getDate()+1;
      let dM = new Date().getMonth()
      let dY = new Date().getFullYear()
      const reSetDate = (`${dY}-${dM}-${dD}`);
      setCalendar({ ...calendar, [name]: reSetDate });
      return;
    }
    let D_date = dateString.split("/")[0];
    let M_date = dateString.split("/")[1];
    let Y_date = dateString.split("/")[2];
    const Newdate = (`${Y_date}-${M_date}-${D_date}`);
    setCalendar({ ...calendar, [name]: Newdate });
  };
  return (
    <>
      <Card title="แก้ไขปฏิทินกิจกรรม">
        <Row justify="center">
          <Col span={8}>
            <Row justify="center">
              <Col>
                <label>วันที่เปิดกิจกรรม</label>
                <br />
                <DatePicker
                  format={"DD/MM/YYYY"}
                  value={moment(calendar.calendar_start)}
                  onChange={(e, dateString) => 
                    onChangeDate(e, dateString, "calendar_start")}
                  required
                />
              </Col>
              <Col span={2}></Col>
              <Col>
                <label>วันที่ปิดกิจกรรม</label>
                <br />
                <DatePicker
                  format={"DD/MM/YYYY"}
                  value={moment(calendar.calendar_end)}
                  onChange={(e, dateString) => {
                    onChangeDate(e, dateString, "calendar_end");
                  }}
                  required
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col span={8}>
            <label>รายละเอียด</label>
            <TextArea
              rows={5}
              placeholder="...."
              name="calendar_detail"
              onChange={handleDatas}
              value={calendar.calendar_detail}
              required
            />
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col span={2}>
            <Link to={"/calendar-view"}>
              <Button>
                ย้อนกลับ
              </Button>
            </Link>
          </Col>
          <Col span={1}></Col>
          <Col span={2}>
            <Button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              block
            >
              บันทึก
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default CalendarUpdate;
