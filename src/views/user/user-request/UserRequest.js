import { Space, Table, Tabs, Card, Input, Button, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import GROBAL from "../../../GOBAL";

const UserRequest = () => {
  const { Search } = Input;
  const [user, setUser] = useState([]);
  console.log(user);
  const getData = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          action: "getUserBy",
          user_approve_status: "wait"
        }
      );
      if (response.data.require) {
        setUser(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //รายชื่อผู้ใช้
  const columns = [
    {
      title: "รหัสผู้ใช้",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "สถานะผู้ใช้",
      key: "user_approve_status",
      render: (record) => {
        if (record.user_approve_status === 'wait') {
          return <>รออนุมัติ</>
        }
      }
    },
    {
      title: "ชื่อ - นามสกุล",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ประเภท",
      dataIndex: "type_name",
      key: "type_name",
    },
    {
      title: "จัดการ",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Link to={`/user-detail/${record.user_id}`}>
              <Button>
                รายละเอียด
              </Button>
            </Link>
          </Space>
        )
      }
    },
  ];
  useEffect(() => {
    getData();
    // if (datas.length == 0) {
    //   data.forEach((e, idx) => {
    //     e.index = idx + 1;
    //   });
    //   setDatas(data);
    // }
  }, []);
  const onSearch = async (value) => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          action: "getUserBy",
          first_name: value,
          user_approve_status: "wait"
        }
      );
      if (response.data.require) {
        setUser(response.data.data);
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
  return (
    <>
      <Card title="รายชื่อกิจกรรม">
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
          <Col span={1}></Col>
        </Row>
        <br />
        <br />
        <Table
          style={{}}
          columns={columns}
          dataSource={user}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </>
  );
};

export default UserRequest;
