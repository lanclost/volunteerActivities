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
  Modal,
  Upload,
  message,
} from "antd";
import GROBAL from "../../../GOBAL";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ActivityCheckEvidence = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const routeParams = useParams();
  const navigate = useNavigate();
  const [userS, setUser] = useState([]);
  const [accumulatedid, setAccumulatedID] = useState([])
  const [activity, setActivity] = useState([]);
  const [evidenceactivitylastid, setEvidenceActivityLastID] = useState({
    insertEvidenceActivity: "",
    evidence_id: ""
  });
  const [evidenceactivity, setEvidenceActivity] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [accumulated, setAccumulated] = useState([]);
  const getDataUser = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}user/index.php`,
        {
          user_id: routeParams.id2,
        }
      );
      if (response.data.require) {
        setUser(response.data.data[0]);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataPaperLastID = async () => {
    const date = new Date();
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}evidence-activity/index.php`,
        {
          action: "getEvidenceActivityID",
          code: "EAID-U" + date.getFullYear(),
          digit: 3,
        }
      )
      setEvidenceActivityLastID({ ...evidenceactivitylastid, evidence_id: response.data.data[0].evidence_activity_maxcode });
    } catch (error) {
      console.log(error);
    }
  }
  const getDataEvidenceActivity = async () => {
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}evidence-activity/index.php`,
        {
          action: "getEvidenceActivityBy",
          ac_id: routeParams.id,
          user_id: routeParams.id2,
        }
      )
      setEvidenceActivity(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getDataActivity = async () => {
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}activity/index.php`,
        {
          action: "getActivityByID",
          ac_id: routeParams.id,
        }
      );
      if (response.data.require) {
        setActivity(response.data.data[0]);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataAccumulatedLast = async () => {
    const date = new Date();
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}accumulated/index.php`,
        {
          action: "getAccumulatedLastID",
          code: "ACCU-U" + date.getFullYear(),
          digit: 3,
        }
      )
      setAccumulatedID({ ...accumulatedid, accumulated_id: response.data.data[0].accumulated_maxcode, result_accumulated: "allow" });
    } catch (error) {
      console.log(error);
    }
  }
  const getDataAccumulated = async () => {
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}accumulated/index.php`,
        {
          action: "getAccumulatedByID",
          ac_id: routeParams.id,
          user_id: routeParams.id2,
        }
      );
      if (response.data.require) {
        setAccumulated(response.data.data[0]);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkSubmit = () => {
    if (activity.accumulated_hours === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูล",
        timer: 3000,
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
          `${GROBAL.BASE_SERVER.URL}accumulated/insert/index.php`,
          {
            insert_accumulated: "",
            accumulated_id: accumulatedid.accumulated_id,
            accumulated_hours: activity.hour_num,
            user_id: userS.user_id,
            ac_id: activity.ac_id,
            ac_category_id: activity.ac_category_id,
            ac_type_id: activity.ac_type_id,
            result_accumulated: accumulatedid.result_accumulated
          }
        );
        if (response.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 3000,
          })
            .then(() => {
              navigate(`/activity-check-detail/${routeParams.id}`);
            });
        } else {
          console.log('ผิดพลาด');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkFileSubmit = () => {
    if (selectedFile === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุไฟล์เอกสาร",
        timer: 3000,
      });
      return false;
    } else {
      return true;
    }
  };
  const handleFileSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      const fileExtension = selectedFile.name.split('.').pop();
      const filename = selectedFile.name.split('.')[0];
      const newFileName = `${filename}_${Date.now().toString(16)}.${fileExtension}`;
      formData.append('file', selectedFile, newFileName);
      if (checkFileSubmit()) {
        const res = await axios.post(
          `${GROBAL.BASE_SERVER.URL}evidence-activity/insert/index.php`,
          {
            insertEvidenceActivity: evidenceactivitylastid.insertEvidenceActivity,
            evidence_id: evidenceactivitylastid.evidence_id,
            evidence_file: newFileName,
            ac_id: activity.ac_id,
            user_id: userS.user_id
          }
        );
        const response = await axios.post(
          `${GROBAL.BASE_SERVER.URL}upload/index.php`,
          formData
        );
        if (res.data.require && response.data.require) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "บันทึกสำเร็จ",
            timer: 3000,
          }).then(() => {
            navigate(0);
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุไฟล์เอกสาร",
        timer: 3000,
      });
    }
    if (file.type.startsWith('image/')) {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "ไม่สามารถอัพโหลดรูปภาพ",
        timer: 3000,
      });
    }
    setSelectedFile(file);
  };
  const DeleteData = async (evidence_id, evidence_file) => {
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
      const formData = new FormData();
      formData.append('evidence_file', evidence_file);
      if (result.isConfirmed) {
        const resp = await axios.post(
          `${GROBAL.BASE_SERVER.URL}evidence-activity/delete/index.php`,
          {
            evidence_id: evidence_id,
          }
        );
        const response = await axios.post(
          `${GROBAL.BASE_SERVER.URL}upload/delete.php`,
          formData
        );
        if (response.data.require && resp.data.require) {
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
  useEffect(() => {
    getDataPaperLastID()
    getDataEvidenceActivity()
    getDataAccumulated()
  }, [])
  useEffect(() => {
    getDataUser()
    getDataAccumulatedLast()
    getDataActivity()
  }, [])
  const columns = [
    {
      title: "หลักฐานการเข้าร่วมกิจกรรม",
      dataIndex: "evidence_file",
      key: "evidence_file",
    },
    {
      title: "จัดการ",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Link to={`${GROBAL.BASE_SERVER.URL}upload/volunteering_activities_API/uploads/${record.evidence_file}`} target="_blank">
              <Button type="primary">
                ดาวโหลด
              </Button>
            </Link>
            <Button type="danger" onClick={() => {
              DeleteData(record.evidence_id, record.evidence_file);
            }}>
              ลบ
            </Button>
          </Space>
        )
      }
    },
  ];
  return (
    <>
      <Card title="รายละเอียดผู้เข้าร่วมกิจกรรม">
        <Row>
          <Col span={3}></Col>
          <Col span={18}>
            <Row justify="center">
              <Col span={11}>
                <label>ชื่อ นามสกุล</label>
                <br />
                <Input
                  bordered={false}
                  value={userS.name}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>รหัสนักศึกษา</label>
                <br />
                <Input
                  bordered={false}
                  value={userS.student_id}
                />
              </Col>
            </Row>
            <Row justify="center">
              <Col span={11}>
                <label>ชั้นปี</label>
                <br />
                <Input
                  bordered={false}
                  value={userS.yearclass}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>เบอร์โทร</label>
                <br />
                <Input
                  bordered={false}
                  value={userS.telephone}
                />
              </Col>
            </Row>
            <Row justify="center">
              <Col span={11}>
                <label>คณะ</label>
                <br />
                <Input
                  bordered={false}
                  value={userS.faculty_name}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <label>สาขา</label>
                <br />
                <Input
                  bordered={false}
                  value={userS.department_name}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <br />
      <Card>
        <>
          {user.user_type_id === "05" ? (
            <>
              <Row justify="center">
                <Col>
                  <input type="file" name="file" onChange={(event) => handleFileChange(event)} />
                </Col>
              </Row>
            </>
          ) : (<></>)}
        </>
        <br />
        <Row justify="center">
          <Col>
            <>
              {user.user_type_id === "05" ? (
                <>
                  {evidenceactivity.length > 0 ? (
                    <Button
                      disabled
                    >
                      อัพโหลดข่าวสาร
                    </Button>
                  ) : (
                    <>
                      <Button
                        type="submit"
                        onClick={(event) => handleFileSubmit(event)}
                      >
                        อัพโหลดข่าวสาร
                      </Button>
                    </>
                  )}
                </>
              ) : (
                <>
                </>
              )}
            </>
          </Col>
        </Row>
        <br />
        <Table columns={columns} dataSource={evidenceactivity} rowKey="evidence_id" />
        <br />
        <Row justify="center">
          <>
            {user.user_type_id === "01" ? (
              <Col span={2}>
                <Link to={`/activity-check-detail/${routeParams.id}`}>
                  <Button>
                    ย้อนกลับ
                  </Button>
                </Link>
              </Col>
            ) : (
              <></>
            )}
          </>
          <>
            {user.user_type_id === "05" ? (
              <Col span={2}>
                <Link to={`/activity-detail/${routeParams.id}`}>
                  <Button>
                    ย้อนกลับ
                  </Button>
                </Link>
              </Col>
            ) : (
              <></>
            )}
          </>
          <Col span={2}></Col>
          <>
            {user.user_type_id === "01" ? (
              <>
                {accumulated.result_accumulated === 'allow' ? (
                  <Col span={2}>
                    <Button disabled>
                      อนุมัติ
                    </Button>
                  </Col>
                ) : (
                  <>
                    <Col span={2}>
                      <Button onClick={(e) => handleSubmit(e)}>
                        อนุมัติ
                      </Button>
                    </Col>
                  </>
                )}
              </>
            ) : (<></>)}
          </>
        </Row>
      </Card>
    </>
  );
};
export default ActivityCheckEvidence;
