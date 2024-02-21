import { Space, Table, Tabs, Card, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GROBAL from "../../../GOBAL";
import Swal from "sweetalert2";

const User = () => {
  const { Search } = Input;
  const [typename, setTypename] = useState("เจ้าหน้าที่");
  const [user, setUser] = useState([]);
  const getData = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          action: "TypeName",
          type_name: typename,
          user_approve_status: "allow"
        }
      );
      if (response.data.require) {
        setUser(response.data.data);
      } else {
        console.log(response.data.message,'getData');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteData = async (user_id) => {
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
        const resp = await axios.post(
          `${GROBAL.BASE_SERVER.URL}user/delete/index.php`,
          {
            user_id: user_id,
          }
        );
        if (resp.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "ลบสำเร็จ",
            timer: 2000,
          }).then(() => {
            getData();
          });
        } else {
          console.log(response.data.message,'DeleteData');
        }
      }
    });
  };
  useEffect(() => {
    getData();
  }, [typename]);

  const columnsOfficer = [
    {
      title: "รหัสผู้ใช้",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "ชื่อ - นามสกุล",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "การจัดการ",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Link to={`/user-detail/${record.user_id}`}>
              <Button>
                รายละเอียด
              </Button>
            </Link>
            <Button type="danger" onClick={() => {
              DeleteData(record.user_id);
            }}>
              ลบ
            </Button>
          </Space>
        )
      },
    },
  ];
  const columnsTeacher = [
    {
      title: "รหัสผู้ใช้",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "ชื่อ - นามสกุล",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "การจัดการ",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Link to={`/user-detail/${record.user_id}`}>
              <Button >
                รายละเอียด
              </Button>
            </Link>
            <Button type="danger" onClick={() => {
              DeleteData(record.user_id);
            }}>
              ลบ
            </Button>
          </Space>
        )
      },
    },
  ];

  const columnsPerson = [
    {
      title: "รหัสผู้ใช้",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "ชื่อ - นามสกุล",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "การจัดการ",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Link to={`/user-detail/${record.user_id}`}>
              <Button>
                รายละเอียด
              </Button>
            </Link>
            <Button type="danger" onClick={() => {
              DeleteData(record.user_id);
            }}>
              ลบ
            </Button>
          </Space>
        )
      },
    },
  ];
  const columnsStudent = [
    {
      title: "รหัสผู้ใช้",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "ชื่อ - นามสกุล",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "รหัสนักศึกษา",
      dataIndex: "student_id",
      key: "student_id",
    },
    {
      title: "การจัดการ",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Link to={`/user-detail/${record.user_id}`}>
              <Button>
                รายละเอียด
              </Button>
            </Link>
            <Button type="danger" onClick={() => {
              DeleteData(record.user_id);
            }}>
              ลบ
            </Button>
          </Space>
        )
      },
    },
  ];

  const onSearch = async (value) => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          action: "TypeName",
          type_name: typename,
          first_name: value,
          user_approve_status: "allow"
        }
      );
      if (response.data.require) {
        setUser(response.data.data);
      } else {
        console.log(response.data.message,'onSearch');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //tabs
  const tagUser = (key) => {
    setTypename(key);
    getData();
  };

  return (
    <>
      <Card title="ผู้ใช้">
        <Search
          placeholder="ค้นหา...."
          allowClear
          enterButton="ค้นหา"
          style={{ width: "fit-content" }}
          onSearch={(e) => onSearch(e)}
        />
        <br />
        <br />
        <Tabs
          defaultActiveKey="เจ้าหน้าที่"
          onChange={(e) => tagUser(e)}
          items={[
            {
              label: `เจ้าหน้าที่`,
              key: "เจ้าหน้าที่",
              children: (
                <Table
                  style={{}}
                  columns={columnsOfficer}
                  dataSource={user}
                  pagination={{ pageSize: 5 }}
                  rowKey="user_id"
                />
              ),
            },
            {
              label: `อาจารย์`,
              key: "อาจารย์",
              children: (
                <Table
                  style={{}}
                  columns={columnsTeacher}
                  dataSource={user}
                  pagination={{ pageSize: 5 }}
                  rowKey="user_id"
                />
              ),
            },
            {
              label: `บุคคลภายนอก`,
              key: "บุคคลภายนอก",
              children: (
                <Table
                  style={{}}
                  columns={columnsPerson}
                  dataSource={user}
                  pagination={{ pageSize: 5 }}
                  rowKey="user_id"
                />
              ),
            },
            {
              label: `นักศึกษา`,
              key: "นักศึกษา",
              children: (
                <Table
                  style={{}}
                  columns={columnsStudent}
                  dataSource={user}
                  pagination={{ pageSize: 5 }}
                  rowKey="user_id"
                />
              ),
            },
          ]}
        />
      </Card>
    </>
  );
};
export default User;
