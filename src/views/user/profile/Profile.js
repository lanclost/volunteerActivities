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
  Image,
} from "antd";
import GROBAL from "../../../GOBAL";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const routeParams = useParams();
  //ternary if
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [userS, setUserS] = useState([])
  const getDataUser = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          user_id: user.user_id,
        }
      );
      if (response.data.require) {
        setUserS(response.data.data[0]);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [accumulatedRemaining, setAccumulatedRemaining] = useState([])
  const getDataAccumulatedRemaining = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}accumulated/index.php`,
        {
          action: "getAccumulatedByRemaining",
          user_id: userS.user_id,
        }
      );
      if (response.data.require) {
        setAccumulatedRemaining(response.data.data[0]);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(accumulatedRemaining);
  const [accumulatedList, setAccumulatedList] = useState([])
  const getDataAccumulatedList= async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}accumulated/index.php`,
        {
          action: "getAccumulatedByList",
          user_id: userS.user_id,
        }
      );
      response.data.data.forEach((element, index) => {
        element["index"] = index + 1
      })
      if (response.data.require) {
        setAccumulatedList(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataUser()
    getDataAccumulatedList()
    getDataAccumulatedRemaining()
  }, [userS.user_id])
  console.log(userS);
  console.log(accumulatedList);
  const columns = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "ชื่อกิจกรรม",
      dataIndex: "activity_name",
      key: "activity_name",
    },
    {
      title: "ประเภทด้านกิจกรรม",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "ประเภทกิจกรรม",
      key: "type_name",
      dataIndex: "type_name",
    },
    {
      title: "จำนวนชั่วโมง",
      key: "accumulated_hours",
      dataIndex: "accumulated_hours",
    },
  ];
  return (
    <>
      <Card title="รายละเอียดผู้ใช้">
        <Row>
          <Col span={3}></Col>
          <Col span={18}>
            <Row justify="center">
              <Col span={11}>
                <label>ชื่อ-นามสกุล</label>
                <br />
                <Input
                  value={userS.name}
                  bordered={false}
                  span={2}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>เบอร์โทร</label>
                <br />
                <Input
                  value={userS.telephone}
                  bordered={false}
                />
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <>
                {user.type_name === "นักศึกษา" ? (
                  <>
                    <Col span={11}>
                      <label>ชั้นปี</label>
                      <br />
                      <Input
                        value={userS.yearclass}
                        bordered={false}
                      />
                    </Col>
                  </>
                ) : (
                  <></>
                )}
              </>
              <Col span={2}></Col>
              <>
                {user.type_name === "นักศึกษา" ? (
                  <>
                    <Col span={11}>
                      <label>รหัสนักศึกษา</label>
                      <br />
                      <Input
                        value={userS.student_id}
                        bordered={false}
                      />
                    </Col>
                  </>
                ) : (
                  <></>
                )}
              </>
            </Row>
            <br />
            <>
              {user.type_name === "นักศึกษา" || user.type_name === "อาจารย์" ? (
                <>
                  <Row justify="center">
                    <Col span={11}>
                      <label>คณะ</label>
                      <br />
                      <Input
                        value={userS.faculty_name}
                        bordered={false}
                      />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                      <label>สาขา</label>
                      <br />
                      <Input
                        value={userS.department_name}
                        bordered={false}
                      />
                    </Col>
                  </Row>
                </>
              ) : (
                <></>
              )}
            </>
          </Col>
        </Row>
        <br />
        <>
          {user.type_name === "นักศึกษา" ? (
            <>
              <Row justify="center">
                <Col>
                  <Row justify="pace-evenly">
                    <Col>
                      <label>จำนวนชั่วโมงสะสมภาคการศึกษา</label>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={8}>
                      <Input
                        value={accumulatedRemaining.maximum_hour}
                        bordered={false}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="pace-evenly">
                    <Col>
                      <label>จำนวนชั่วโมงที่ขาด</label>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={8}>
                      <Input
                        value={accumulatedRemaining.remaining_hours}
                        bordered={false}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <Table columns={columns} dataSource={accumulatedList} rowKey="accumulated_id"/>
            </>
          ) : (
            <></>
          )}
        </>
        <br />
        <Row justify="center">
          <Col span={2}>
            <Link to={`/user-update/${user.user_id}`}>
              <Button>
                แก้ไข
              </Button>
            </Link>
          </Col>
        </Row>
        <br />
      </Card>
    </>
  );
};
export default Profile;
