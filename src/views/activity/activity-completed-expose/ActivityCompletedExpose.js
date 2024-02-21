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
  } from "antd";
  import React, { useState, useEffect, useRef } from "react";
  import { Link } from "react-router-dom";

  const { Option } = Select;
  const { TextArea } = Input;
  const ActivityCompletedExpose = () => {
  
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
    });
  
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    const columns = [
      {
        title: 'ลำดับ',
        dataIndex: 'index',
        key: 'index',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'รหัสนักศึกษา',
        dataIndex: 'user_id',
        key: 'user_id',
      },
      {
        title: 'ชื่อ-นามสกุล',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'คณะ',
        dataIndex: 'faculty_id',
        key: 'faculty_id',
      },
      {
        title: 'สาขา',
        key: 'department_id',
        dataIndex: 'department_id',
      },
      {
        title: 'จัดการ',
        key: 'action',
      },
    ];
    const data = [
      {
        index: '1',
        user_id: '632517566-0',
        name: 'John Brown',
        faculty_id: 'วิศวกรรมศาสตร์',
        department_id: 'วิศวกรรมไฟฟ้า',
      },
      {
        index: '2',
        user_id: '664567566-0',
        name: 'Jim Green',
        faculty_id: 'วิศวกรรมศาสตร์',
        department_id: 'วิศวกรรมอุตสาหการ',
      },
      {
        index: '3',
        user_id: '625597566-0',
        name: 'Joe Black',
        faculty_id: 'วิศวกรรมศาสตร์',
        department_id: 'วิศวกรรมคอมพิวเตอร์',
      },
    ];
    return (
      <>
        <Card title="รายละเอียดกิจกรรมเสร็จสิ้น">
          <Row justify="center">
            <Col span={8}>
              <label>ชื่อ_นามสกุลผู้เปิดกิจกรรม</label>
              <br />
              <Input
                id="name"
                name="name"
                placeholder="ก๊อต"
                required
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
                placeholder="นะหน้าทอง"
                required
                disabled
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col span={8}>
              <label>จำนวนเปิดรับสมัคร</label>
              <br />
              <Input
                id="participants_num"
                name="participants_num"
                placeholder="วัดอู๋ไชโย่"
                required
                disabled
              />
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <label>ด้านกิจกรรม</label>
              <br />
              <Select
                defaultValue="เลือก"
                style={{
                  width: 390,
                }}
                disabled
              >
                <Option value="ac_category_id">ด้านที่ 1 กิจกรรมจิตอาสา เกี่ยวกับร่างกาย</Option>
                <Option value="ac_category_id">ด้านที่ 2 กิจกรรมจิตอาสา เกี่ยวกับการทำความสะอาด</Option>
                <Option value="ac_category_id">ด้านที่ 3 กิจกรรมจิตอาสา เกี่ยวกับการให้ความรู้</Option>
                <Option value="ac_category_id">ด้านที่ 4 กิจกรรมจิตอาสา เกี่ยวกับการช่วยเหลือดูแล</Option>
                <Option value="ac_category_id">ด้านที่ 5 กิจกรรมจิตอาสา เกี่ยวกับสิ่งแวดล้อม</Option>
                <Option value="ac_category_id">ด้านที่ 6 กิจกรรมจิตอาสา เกี่ยวกับการเป็นอาสาสมัคร</Option>
              </Select>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={8}>
              <Row>
                <Col>
                  <label>วันที่เปิดกิจกรรม</label>
                  <br />
                  <DatePicker format={"DD/MM/YYYY"} onChange={onChange} disabled/>
                </Col>
                <Col span={2}></Col>
                <Col>
                  <label>วันที่ปิดกิจกรรม</label>
                  <br />
                  <DatePicker format={"DD/MM/YYYY"} onChange={onChange} disabled/>
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
                placeholder="จำนวนชั่วโมงจะใส่ได้ไม่เกินกว่าด้านกิจกรรมที่เลือก"
                required
                disabled
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col span={8}>
              <Row>
                <Col>
                  <label>เวลาเริ่มกิจกรรม</label>
                  <br />
                  <TimePicker format={"HH:mm"} disabled />
                </Col>
                <Col span={3}></Col>
                <Col>
                  <label>เวลาสิ้นสุดกิจกรรม</label>
                  <br />
                  <TimePicker format={"HH:mm"} disabled  />
                </Col>
              </Row>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <Row>
                <Col>
                  <label>กำหนดรูปแบบ</label>
                  <br />
                  <Select
                    defaultValue="เลือก"
                    style={{
                      width: 140,
                    }}
                    disabled
                  >
                    <Option value="ac_type_id">กิจกรรมภายใน</Option>
                    <Option value="ac_type_id">กิจกรรมภายนอก</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={8}>
              <label>สถานที่</label>
              <TextArea rows={5}
                placeholder="ที่ตั้งกิจกรรม"
                maxLength={6}
                id="location"
                name="location"
                disabled
              />
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <label>รายละเอียด</label>
              <TextArea rows={5} placeholder="..." maxLength={6}
                disabled
              />
            </Col>
          </Row>
          <br />
          <label>ผู้เข้าร่วมกิจกรรม</label>
          <Table columns={columns} dataSource={data} />
          <Row justify="center">
          
            <Col span={2}>
              <Link to={"/activity-completed"}>
                <Button>
                  ย้อนกลับ
                </Button>
              </Link>
            </Col>
            <Col span={2}></Col>
            <Col>
              <Button>โหลดเอกสาร</Button>
            </Col>
            
          </Row>
        </Card>
      </>
    );
  };
  export default ActivityCompletedExpose
  