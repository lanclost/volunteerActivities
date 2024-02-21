import {
    Table,
    Card,
    Button,
    Col,
    Row,
  } from "antd";
  import React, { useState, useEffect, useRef } from "react";
  import { Link } from 'react-router-dom';

  const ActivityConductDetail = () => {
  
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
        title: 'ชั่วโมงที่ได้รับ',
        key: 'hour_num',
        dataIndex: 'hour_num',
      },
    ];
    const data = [
      {
        index: '1',
        user_id: '632517566-0',
        name: 'John Brown',
        faculty_id: 'วิศวกรรมศาสตร์',
        department_id: 'วิศวกรรมไฟฟ้า',
        hour_num: 5,
      },
      {
        index: '2',
        user_id: '664567566-0',
        name: 'Jim Green',
        faculty_id: 'วิศวกรรมศาสตร์',
        department_id: 'วิศวกรรมอุตสาหการ',
        hour_num: 5,
      },
      {
        index: '3',
        user_id: '625597566-0',
        name: 'Joe Black',
        faculty_id: 'วิศวกรรมศาสตร์',
        department_id: 'วิศวกรรมคอมพิวเตอร์',
        hour_num: 5,
      },
    ];
    return (
      <>
        <Card title="รายชื่อผู้เสร็จสิ้นกิจกรรม">
          <Table columns={columns} dataSource={data} />
          <Row justify="center">
          
            <Col span={2}>
              <Link to={"/activity-conduct"}>
                <Button>
                  ย้อนกลับ
                </Button>
              </Link>
            </Col>
            <Col span={2}></Col>
            <Col>
              <Button>สรุปผลกิจกรรม</Button>
            </Col>
            
          </Row>
        </Card>
      </>
    );
  };
  export default ActivityConductDetail
  