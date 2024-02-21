import { Space, Table, Tag, Card, Input, Button } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import GROBAL from "../../../GOBAL";
const Paper = () => {
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [datapaper, setDataPaPer] = useState([]);
  const getData = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}paper/index.php`,
        {
          action: "getPaperBy"
        }
      );
      if (response.data.require) {
        setDataPaPer(response.data.data);
      } else {
        console.log(response.data.message);
      }
      response.data.data.forEach((element, index) => {
        element["index"] = index + 1;
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData()
  }, []);

  const DeleteData = async (paper_id) => {
    Swal.fire({
      title: "คุณแน่ใจที่จะลบข้อมูล?",
      text: "เมื่อคุณยืนยันจะไม่สามารถย้อนกลับได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await axios.post(
          `${GROBAL.BASE_SERVER.URL}paper/delete/index.php`,
          {
            paper_id: paper_id,
          }
        );

        if (resp.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "ลบสำเร็จ",
            timer: 2000,
          }).then(() => {
            navigate(0);
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
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "เอกสาร",
      dataIndex: "paper_detail",
      key: "paper_detail",
    },
    {
      title: "การจัดการ",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Link to={`${GROBAL.BASE_SERVER.URL}upload/volunteering_activities_API/uploads/${record.paper}`} target="_blank">
              <Button type="primary">ดาวโหลด</Button>
            </Link>
            {/* <>
              {user.user_type_id == "01" ? (
                <>
                  <Link to={`/paper-update/${record.paper_id}`}>
                    <Button>แก้ไข</Button>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </> */}
            <>
              {user.user_type_id == "01" ? (
                <>
                  <Button type="danger" onClick={() => {
                    DeleteData(record.paper_id);
                  }}>
                    ลบ
                  </Button>
                </>
              ) : (
                <></>
              )}
            </>
          </Space>
        )
      },
    },
  ];

  return (
    <>
      <Card
        className="cardredius"
        title="รายงาน"
        extra={
          <>
            {user.user_type_id == "01" ? (
              <>
                <Link to={`/paper-insert`}>
                  <Button type="primary">
                    เพิ่มเอกสาร
                  </Button>
                </Link>
              </>
            ) : (
              <></>
            )}
          </>
        }
      >
        <Table
          style={{}}
          columns={columns}
          dataSource={datapaper}
          pagination={{ pageSize: 5 }}
          rowKey= "paper_id"
        />
      </Card>
    </>
  );
};
export default Paper;
