import {
  Card,
  Input,
  Button,
  Col,
  Row,
  DatePicker,
} from "antd";
import Swal from "sweetalert2";
import GROBAL from "../../GOBAL";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CalendarInsert = () => {

  const navigate = useNavigate();
  const { TextArea } = Input;
  const [calendar, setCalendar] = useState({
    insert_calendar: "",
    calendar_id: "",
    calendar_start: "",
    calendar_end: "",
    calendar_detail: "",
  });
  const getDataCalendarLastID = async () => {
    const date = new Date();
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}calendar/index.php`,
        {
          action: "getCalendarLastID",
          code: "CDID-U" + date.getFullYear(),
          digit: 3,
        }
      )
      setCalendar({ ...calendar, calendar_id: response.data.data[0].calendar_maxcode });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDataCalendarLastID()
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
        const response = await axios.post(
          `${GROBAL.BASE_SERVER.URL}calendar/insert/index.php`,
          {
            insert_calendar: calendar.insert_calendar,
            calendar_id: calendar.calendar_id,
            calendar_start: calendar.calendar_start,
            calendar_end: calendar.calendar_end,
            calendar_detail: calendar.calendar_detail,
          }
        );
        if (response.data.require) {
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
  const onChange = (dateString, name) => {
    setCalendar({ ...calendar, [name]: dateString });
    // setCalendar({...calendar,"calendar_start": dateString});
  };
  return (
    <>
      <Card title="เพิ่มปฏิทินกิจกรรม">
        <Row justify="center">
          <Col span={8}>
            <Row justify="center">
              <Col>
                <label>วันที่เปิดกิจกรรม</label>
                <br />
                <DatePicker
                  format={"DD/MM/YYYY"}
                  name="calendar_start"
                  onChange={(e, dateString) =>
                    onChange(dateString, "calendar_start")
                  }
                  required
                />
              </Col>
              <Col span={2}></Col>
              <Col>
                <label>วันที่ปิดกิจกรรม</label>
                <br />
                <DatePicker
                  format={"DD/MM/YYYY"}
                  onChange={(e, dateString) =>
                    onChange(dateString, "calendar_end")
                  }
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
export default CalendarInsert;
