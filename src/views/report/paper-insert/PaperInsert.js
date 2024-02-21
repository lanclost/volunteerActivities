import {
  Card,
  Input,
  Button,
  Col,
  Row,
  DatePicker,
  message,
  Upload,
} from "antd";
import Swal from "sweetalert2";
import GROBAL from "../../../GOBAL";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PaperInsert = () => {

  const navigate = useNavigate();
  const { TextArea } = Input;
  const [papers, setPaperS] = useState({
    insert_paper: "",
    paper_id: "",
    paper_detail: "",
    paper: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const getDataPaperLastID = async () => {
    const date = new Date();
    try {
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}paper/index.php`,
        {
          action: "getPaperLastID",
          code: "PPID-U" + date.getFullYear(),
          digit: 3,
        }
      )
      setPaperS({ ...papers, paper_id: response.data.data[0].paper_maxcode });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDataPaperLastID()
  }, []);
  const checkSubmit = () => {
    if (papers.paper_detail === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด",
        text: "โปรดระบุข้อมูลรายละเอียดเอกสาร",
        timer: 3000,
      });
      return false;
    } else if (selectedFile === "") {
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      const fileExtension = selectedFile.name.split('.').pop();
      const filename = selectedFile.name.split('.')[0];
      const newFileName = `${filename}_${Date.now().toString(16)}.${fileExtension}`;
      formData.append('file', selectedFile, newFileName);
      if (checkSubmit()) {
        const res = await axios.post(
          `${GROBAL.BASE_SERVER.URL}paper/insert/index.php`,
          {
            insert_paper: papers.insert_paper,
            paper_id: papers.paper_id,
            paper_detail: papers.paper_detail,
            paper: newFileName,
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
            navigate("/paper");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDatas = (datas) => {
    setPaperS({ ...papers, [datas.target.name]: datas.target.value });
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
  return (
    <>
      <Card title="เพิ่มรายงานเอกสาร">
        <Row justify="center">
          <Col span={8}>
            <Row justify="center">
              <Col>
                <input type="file" name="file" onChange={(event)=>handleFileChange(event)} />
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col span={8}>
            <label>รายละเอียดเอกสาร</label>
            <TextArea
              rows={5}
              placeholder="...."
              name="paper_detail"
              onChange={handleDatas}
              required
            />
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col span={2}>
            <Link to={"/paper"}>
              <Button>
                ย้อนกลับ
              </Button>
            </Link>
          </Col>
          <Col span={1}></Col>
          <Col span={2}>
            <Button
              type="submit"
              onClick={(event) => handleSubmit(event)}
            >
              บันทึก
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default PaperInsert;
