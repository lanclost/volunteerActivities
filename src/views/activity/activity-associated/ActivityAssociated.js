import { Space, Table, Tabs, Card, Input, Button, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import GROBAL from "../../../GOBAL";

const ActivityAssociated = () => {
  const { Search } = Input;
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [activity, setActivity] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity/index.php`,
        {
          action: "getActivityByAssociatedSD",
          user_id: user.user_id,
        }
      );
      response.data.data.forEach((element, index) => {
        let date = element.DateRange.split(" ");
        let Y_start = date[0].split("-")[0];
        let M_start = date[0].split("-")[1] - 1;
        let D_start = date[0].split("-")[2];
        let Y_end = date[1].split("-")[0];
        let M_end = date[1].split("-")[1] - 1;
        let D_end = date[1].split("-")[2];
        const date_start = new Date(Y_start, M_start, D_start);
        const date_startth = date_start.toLocaleDateString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const date_end = new Date(Y_end, M_end, D_end);
        const date_endth = date_end.toLocaleDateString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        element.date = date_startth + " ถึง " + date_endth;
        element["index"] = index + 1;
      });
      if (response.data.require) {
        setActivity(response.data.data);
      } 
      // else {
      //   console.log(response.data.message);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteData = async (ac_id) => {
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
            timer: 2000,
          }).then(() => {
            getData();
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
  const onSearch = async (value) => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity/index.php`,
        {
          action: "getActivityByAssociatedSD",
          ac_name: value,
        }
      );
      response.data.data.forEach((element, index) => {
        let date = element.DateRange.split(" ");
        let Y_start = date[0].split("-")[0];
        let M_start = date[0].split("-")[1] - 1;
        let D_start = date[0].split("-")[2];
        let Y_end = date[1].split("-")[0];
        let M_end = date[1].split("-")[1] - 1;
        let D_end = date[1].split("-")[2];
        const date_start = new Date(Y_start, M_start, D_start);
        const date_startth = date_start.toLocaleDateString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const date_end = new Date(Y_end, M_end, D_end);
        const date_endth = date_end.toLocaleDateString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        element.date = date_startth + " ถึง " + date_endth;
        element["index"] = index + 1;
      });
      if (response.data.require) {
        setActivity(response.data.data);
      } 
      // else {
      //   console.log(response.data.message);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  //รายชื่อกิจกรรม
  const columns = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "ชื่อกิจกรรม",
      dataIndex: "ac_name",
      key: "ac_name",
    },
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "เวลา",
      dataIndex: "TimeRange",
      key: "TimeRange",
    },
    {
      title: "จำนวนเปิดรับสมัคร",
      key: "participating",
      dataIndex: "participating",
    },
    {
      title: "จัดการ",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Link to={`/activity-detail/${record.ac_id}`}>
              <Button>
                รายละเอียด
              </Button>
            </Link>
            <>
              {user.user_type_id != "05" ? (
                <>
                  <Link to={`/activity-update/${record.ac_id}`}>
                    <Button>
                      แก้ไข
                    </Button>
                  </Link>
                </>
              ) : (<></>)}
            </>
            <>
              {user.user_type_id != "05" ? (
                <>
                  <Button type="danger" onClick={() => {
                    DeleteData(record.ac_id);
                  }}>
                    ลบ
                  </Button>
                </>
              ) : (<></>)}
            </>
          </Space>
        )
      }
    },
  ];
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Card title="กิจกรรมที่เข้าร่วม">
      <Row>
          <Col>
            <Search
              placeholder="ค้นหา...."
              allowClear
              enterButton="ค้นหา"
              style={{ width: "fit-content" }}
              onSearch={(e) => onSearch(e)}
            />
          </Col>
        </Row>
        <br />
        <Table
          style={{}}
          columns={columns}
          dataSource={activity}
          pagination={{ pageSize: 5 }}
          rowKey="ac_id"
        />
      </Card>
    </>
  );
};

export default ActivityAssociated;
