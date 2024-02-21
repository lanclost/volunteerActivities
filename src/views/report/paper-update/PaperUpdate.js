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
  import { Link, useNavigate, useParams } from "react-router-dom";
  import axios from "axios";
  
  const PaperUpdate = () => {
    const routeParams = useParams();
    const navigate = useNavigate();
    const { TextArea } = Input;
    const [paper, setPaper] = useState({
      paper_id: "",
      paper_detail: "",
      paper: "",
    });
    console.log(paper);
    const getData = async () => {
        console.log(routeParams);
        try {
          const resp = await axios.post(
            `${GROBAL.BASE_SERVER.URL}paper/index.php`,
            {
              paper_id: routeParams.id,
            }
          );
          console.log(resp.data.data);
          if (resp.data.require) {
            setPaper(resp.data.data[0]);
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
        getData();
      }, []);
    const checkSubmit = () => {
      if (paper.paper_detail === "") {
        Swal.fire({
          icon: "warning",
          title: "ผิดพลาด",
          text: "โปรดระบุข้อมูลรายละเอียดเอกสาร",
          timer: 2000,
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
          const res = await axios.post(
            `${GROBAL.BASE_SERVER.URL}paper/update/index.php`,
            {
              paper_id: paper.paper_id,
              paper_detail: paper.paper_detail,
              paper: paper.paper,
            }
          );
          if (res.data.require) {
            Swal.fire({
              icon: "success",
              title: "สำเร็จ",
              text: "บันทึกสำเร็จ",
              timer: 2000,
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
      setPaper({ ...paper, [datas.target.name]: datas.target.value });
    };
    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <>
        <Card title="แก้ไขรายงานเอกสาร">
          <Row justify="center">
            <Col span={8}>
              <Row justify="center">
                <Col>
                  <Upload {...props}>
                    <Button>กดเพื่ออัพโหลดเอกสาร</Button>
                  </Upload>
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
                value={paper.paper_detail}
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
                onClick={(e) => handleSubmit(e)}
              >
                บันทึก
              </Button>
            </Col>
          </Row>
        </Card>
      </>
    );
  };
  export default PaperUpdate;
  