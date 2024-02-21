import { Table, Card, Carousel, Row } from "antd";
import { AiOutlineCalendar } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GROBAL from "../../GOBAL";
const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [datanew, setDataNew] = useState([]);
  const [dataimage, setDataImage] = useState([]);
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
  const getNewsBy = async () => {
    try {
      let response = await axios.post(
        `${GROBAL.BASE_SERVER.URL}news/index.php`,
        {
          action: "getNewsBy",
        }
      );
      if (response.data.require) {
        setDataNew(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    getNewsBy()
  }, []);
  //ตารางข้อมูล
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
      title: "คำอธิบาย",
      dataIndex: "calendar_detail",
      key: "calendar_detail",
    },

  ];
  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <Card title="ข่าวสาร" style={{ width: '100%', height: '100%' }}>
          <Carousel autoplay>
            {datanew.map((newsItem) => (
              <div key={newsItem.news_id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img
                  src={`${GROBAL.BASE_SERVER.URL}upload/volunteering_activities_API/uploads/${newsItem.news_image}`}
                  alt={newsItem.news_id}
                  style={contentStyle}
                />
              </div>
            ))}
          </Carousel>
          <br />
          <label>
            <AiOutlineCalendar style={{ fontSize: "25px" }} /> ปฏิทินกิจกรรม
          </label>
          <br />
          <Table
            style={{}}
            columns={columnsCalendar}
            dataSource={datas}
            pagination={{ pageSize: 5 }}
            rowKey="calendar_id"
          />
          <br />
      </Card>
    </>
  );
};
export default Dashboard;
