import {
  Table,
  Card,
  Button,
  Col,
  Row,
  Input,
  Upload,
  Space,
} from "antd";
import { UploadOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GROBAL from "../../GOBAL";
const CalendarView = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const cancelToken = useRef(null);

  const DeleteData = async (calendar_id) => {
    Swal.fire({
      title: "คุณแน่ใจที่จะลบข้อมูล?",
      text: "เมื่อคุณยืนยันจะไม่สามารถย้อนกลับได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await axios.post(
          `${GROBAL.BASE_SERVER.URL}calendar/delete/index.php`,
          {
            calendar_id: calendar_id,
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
  const getData = async () => {
    try {
      const resp = await axios.post(
        `${GROBAL.BASE_SERVER.URL}calendar/index.php`,
        {
          action: "getCalendarBy",
        }
      );
      resp.data.data.forEach((element, index) => {
        let date = element.dateCalendar.split(" ");
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
      if (resp.data.require) {
        setDatas(resp.data.data);
      } else {
        Swal.fire({
          title: 'เกิดความผิดพลาด',
          text: resp.data.message,
          timer: 2000
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData();
    return () => {
      cancelToken.current.cancel();
    };
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const [newImageName, setNewImageName] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (!file) {
      alert('Please select a file');
      return;
    }

    // Check if the selected file is an image
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    setSelectedFile(file);

    // Read image dimensions
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    // Display image preview
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };
  console.log(newImageName);
  const handleUpload = async (event) => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    // Check image size (modify this condition based on your requirements)
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
    if (selectedFile.size > maxSizeInBytes) {
      alert('Selected image is too large. Maximum size is 5MB.');
      return;
    }
    event.preventDefault();
    try {
      const formData = new FormData();
      const fileExtension = selectedFile.name.split('.').pop();
      const news_id = `NSID-U${Date.now().toString(16)}`
      const newFileName = `prefix_${Date.now()}.${fileExtension}`;
      formData.append('file', selectedFile, newFileName);
      setNewImageName(newFileName)
      const response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}news/insert/index.php`,
        {
          insert_news: "",
          news_id: news_id,
          news_image: newFileName,
        }
      );
      const resp = await axios.post(
        `${GROBAL.BASE_SERVER.URL}upload/index.php`,
        formData
      );
      if (resp.data.require && response.data.require) {
        Swal.fire({
          icon: "success",
          title: "สำเร็จ",
          text: "บันทึกสำเร็จ",
          timer: 2000,
        }).then(() => {
          navigate(0);
        });
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //tableCalendar
  const columnsCalendar = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
    },
    {
      title: `คำอธิบาย`,
      dataIndex: "calendar_detail",
      key: "calendar_detail",
    },
    {
      title: (
        <Link to={`/calendar-insert`}>
          <Button type="primary">
            เพิ่มปฏิทินกิจกรรม
          </Button>
        </Link>
      ),
      key: "index",
      render: (record) => {
        return (
          <Space size="middle" key={"_" + record.index}>
            <Link to={`/calendar-update/${record.calendar_id}`}>
              <Button>แก้ไข</Button>
            </Link>
            <Button
              type="danger"
              onClick={() => {
                DeleteData(record.calendar_id);
              }}
            >
              ลบ
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Card title="จัดการหน้าข่าวสาร">
        <Row justify="center">
          <Col>
            <input type="file" name="file" onChange={handleFileChange} />
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col>
            <Button onClick={(event) => handleUpload(event)
            }>
              อัพโหลดข่าวสาร
            </Button>
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col>
            {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
          </Col>
        </Row>
      </Card>
      <br />
      <Card>
        <label>
          <AiOutlineCalendar style={{ fontSize: "25px" }} />
          ปฏิทินกิจกรรม
        </label>
        <Table
          style={{}}
          columns={columnsCalendar}
          dataSource={datas}
          pagination={{ pageSize: 5 }}
          rowKey="calendar_id"
        />
        ,
      </Card>
    </>
  );
};
export default CalendarView;
