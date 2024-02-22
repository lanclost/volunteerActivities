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
    Modal,
    Form,
} from "antd";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import GROBAL from "../../../../GOBAL";

const UserModal = (props) => {
    const { Search } = Input;
    const [isModalOpen, setisModalOpen] = useState(false);
    const [users, setUser] = useState([]);
    const [activitylist, setActivityList] = useState([]);
    const [activity, setActivity] = useState([]);
    const getData = async () => {
        try {
            let response = await axios.post(
                `${GROBAL.BASE_SERVER.URL}user/index.php`,
                {
                    action: "getUserTypeByActivityList",
                    type_name: 'นักศึกษา',
                    user_approve_status: "allow"
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
    useEffect(() => {
        setisModalOpen(props.isModalOpen)
        setActivity(props.participants_num)
        fetchData()
    }, [props.isModalOpen, props.participants_num])
    useEffect(() => {
        getData()
    }, [])

    const fetchData = () => {
        let user = [...users]
        user.forEach((e) => {
            if (props.users.find((data) => data.user_id === e.user_id)) {
                e.select = true
            } else {
                e.select = false
            }
        })
        setUser(user)
    }
    const handleDatas = (datas) => {
        if (activitylist.length > 0) {
            if (activitylist.find((e) => e.user_id == datas.user_id) == undefined) {
                if (activitylist.length < activity) {
                    users.forEach((e) => {
                        if (datas.user_id == e.user_id) {
                            e.select = true
                        }
                    })
                    setUser(users)
                    let activitylists = []
                    activitylists.push({ ...datas })
                    setActivityList(activitylist => [...activitylist, ...activitylists])
                } else {
                    Swal.fire({
                        title: 'เกิดความผิดพลาด',
                        text: 'รายชื่อนักศึกษา มีจำนวนสูงสุดแล้ว',
                        timer: 2000
                    })
                }
            } else {
                users.forEach((e) => {
                    if (datas.user_id == e.user_id) {
                        e.select = false
                    }
                })
                setUser(users)
                const newArray = [...activitylist];
                newArray.splice(activitylist.findIndex((e) => e.user_id == datas.user_id), 1);
                setActivityList(newArray);
            }
        } else {
            let activitylists = []
            activitylists.push({ ...datas })
            setActivityList(activitylist => [...activitylist, ...activitylists])
            users.forEach((e) => {
                if (datas.user_id == e.user_id) {
                    e.select = true
                }
            })
        }
    };
    const columns = [
        {
            title: "รหัสนักศึกษา",
            dataIndex: "user_id",
            key: "user_id",
        },
        {
            title: "ชื่อ-นามสกุล",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "จัดการ",
            key: "action",
            render: (_, record) => {
                if (record.select === undefined || record.select === false) {
                    return (
                        <Space size="middle">
                            <Button type="submit" onClick={() => handleDatas(record)}>
                                เข้าร่วม
                            </Button>
                        </Space>
                    )
                } else if (record.select === true) {
                    return (
                        <Space size="middle">
                            <Button type="submit" onClick={() => handleDatas(record)}>
                                ยกเลิก
                            </Button>
                        </Space>
                    )
                }
            },
        },
    ];
    const onSearch = async (value) => {
        try {
            let response = await axios.post(
                `${GROBAL.BASE_SERVER.URL}user/index.php`,
                {
                    action: "getUserTypeByActivityList",
                    type_name: 'นักศึกษา',
                    first_name: value,
                    user_approve_status: "allow"
                }
            );
            if (response.data.require) {
                setUser(response.data.data);
            } else {
                Swal.fire({
                    title: 'โปรดระบุข้อมูล ชื่อนักศึกษา',
                    text: response.data.message,
                    timer: 2000
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
    return <Modal
        open={isModalOpen}
        onOk={() => props.handleOk(activitylist)}
        onCancel={(e) => props.handleCancel(e)}
        okText='ตกลง'
        cancelText='ยกเลิก'
    >
        <Search
            placeholder="ค้นหา...."
            allowClear
            enterButton="ค้นหา"
            style={{ width: "fit-content" }}
            onSearch={(e) => onSearch(e)}
        />
        <br />
        <br />
        <h5>จำนวนผู้เข้าร่วม {activitylist.length + "/" + activity}</h5>
        <Table
            columns={columns}
            dataSource={users}
            pagination={{ pageSize: 5 }}
            rowKey="user_id"
        />
    </Modal>

}
export default UserModal