import { Space, Table, Tag, Card, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const { Search } = Input;

const ActivitySend = () => {
  const [activity, setActivity] = useState({
    aevidence_id: "",
    file_iamge: "",
    file_video: "",
    result_evidence: "",
    ac_id: "",
  });
  const [datas, setDatas] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    console.log("index", selectedKeys, confirm, dataIndex);
    confirm();
    setSearchText(selectedKeys[0] !== undefined ? selectedKeys[0] : "");
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0] === undefined ? "" : selectedKeys);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
    },
    {
      title: " วันที่สิ้นสุด",
      dataIndex: "date_end",
      key: "name",
      ...getColumnSearchProps("name"),

      render: (text) => <a>{text}</a>,
    },
    {
      title: "ชื่อกิจกรรม",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "ประเภทกิจกรรม",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "สถานะกิจกรรม",
      key: "tags",
      dataIndex: "tags",
    },
    {
      title: "จัดการ",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={'/activity-detail/1'}><Button type="dashed">รายละเอียด{record.name}</Button></Link>
        </Space>
      ),
    },
  ];

  const data = [
    {
      index: "1",
      date_end: "2022-11-15",
      age: "อบรม",
      address: "กิจกรรมภายใน",
      tags: "ปกติ",
    },
  ];
  useEffect(() => {
    if (datas.length == 0) {
      data.forEach((e, idx) => {
        e.index = idx + 1;
      });
      setDatas(data);
    }
  });
  console.log(datas);
  const onSearch = (value) => console.log(value);

  return (
    <>
      <Card
        title="ตรวจสอบกิจกรรม"
       
      >
        <Search
          placeholder="ค้นหา...."
          allowClear
          enterButton="ค้นหา"
          size="large"
          style={{ width: "fit-content" }}
          onSearch={onSearch}
        />
        <br />
        <br />

        <Table
          style={{}}
          columns={columns}
          dataSource={datas}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </>
  );
};
export default ActivitySend;
