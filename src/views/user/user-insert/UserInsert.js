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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UserInsert = () => {
    const navigate = useNavigate();
    //ternary if
    const [userS, setUsers] = useState({
        insert_user: "",
        user_id: "",
        username: "",
        student_id: "",
        first_name: "",
        last_name: "",
        yearclass: "",
        telephone: "",
        password: "",
        confirm_password: "",
        prefix_id: "",
        department_id: "",
        faculty_id: "",
        user_type_id: "",
        image: "",
        user_approve_status: "allow",
    });
    const getDataUserLast = async () => {
        const date = new Date();
        try {
            const response = await axios.post(
                `${GROBAL.BASE_SERVER.URL}user/index.php`,
                {
                    action: "getUserLastID",
                    code: "USID-U" + date.getFullYear(),
                    digit: 3,
                }
            )
            setUsers({ ...userS, user_id: response.data.data[0].user_maxcode });
        } catch (error) {
            console.log(error);
        }
    }
    const checkSubmit = () => {
        if (userS.user_type_id === "") {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล ระดับผู้ใช้",
                timer: 2000,
            });
            return false;
        } else if (userS.prefix_id === "") {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล คำนำหน้า",
                timer: 2000,
            });
            return false;
        } else if (userS.username === "") {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล ผู้ใช้",
                timer: 2000,
            });
            return false;
        } else if (userS.telephone === "") {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล เบอร์โทร",
                timer: 2000,
            });
            return false;
        } else if (userS.first_name === "") {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล ชื่อ",
                timer: 2000,
            });
            return false;
        } else if (userS.last_name === "") {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล นามสกุล",
                timer: 2000,
            });
            return false;
        } else if (userS.password === "") {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล รหัสผ่าน",
                timer: 2000,
            });
            return false;
        } else if (userS.confirm_password === "") {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล ยืนยันรหัสผ่าน",
                timer: 2000,
            });
            return false;
        } else if (userS.password !== userS.confirm_password) {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูล รหัสไม่ตรงกัน",
                timer: 2000,
            });
            return false;
        } else {
            return true;
        }
    };
    const checkusername = async () => {
        let response = await axios.post(
            `${GROBAL.BASE_SERVER.URL}user/index.php`,
            {
                action: "getUserByusername",
                username: userS.username
            }
        );
        if (response.data.length > 0) {
            Swal.fire({
                icon: "warning",
                title: "ผิดพลาด",
                text: "โปรดระบุข้อมูลผู้ใช้ใหม่",
                timer: 2000,
            });
            return false
        } else {
            return true
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (checkSubmit() && await checkusername()) {
                const res = await axios.post(
                    `${GROBAL.BASE_SERVER.URL}user/insert/index.php`,
                    {
                        insert_user: userS.insert_user,
                        user_id: userS.user_id,
                        username: userS.username,
                        student_id: userS.student_id,
                        first_name: userS.first_name,
                        last_name: userS.last_name,
                        yearclass: userS.yearclass,
                        telephone: userS.telephone,
                        password: userS.password,
                        prefix_id: userS.prefix_id,
                        department_id: userS.department_id,
                        faculty_id: userS.faculty_id,
                        user_type_id: userS.user_type_id,
                        image: userS.image,
                        user_approve_status: userS.user_approve_status,
                    }
                );
                console.log(res.data);
                if (res.data.require) {
                    Swal.fire({
                        icon: "success",
                        title: "สำเร็จ",
                        text: "บันทึกสำเร็จ",
                        timer: 2000,
                    }).then(() => {
                        navigate("/user");
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    console.log(userS);
    const [prefix, setPrefix] = useState([]);
    const [faculty, setFaculty] = useState([]);
    const [department, setDepartment] = useState([]);
    const [userType, setUserType] = useState([]);
    const getUserType = async () => {
        try {
            let response = await axios.post(
                `${GROBAL.BASE_SERVER.URL}user-type/index.php`,
                {
                    action: "getUserTypeBy"
                }
            )
            if (response.data.require) {
                setUserType(response.data.data);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getDataPrefix = async () => {
        try {
            let response = await axios.post(
                `${GROBAL.BASE_SERVER.URL}prefix/index.php`,
                {
                    action: "getPrefixBy"
                }
            )
            if (response.data.require) {
                setPrefix(response.data.data);
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
    const getDataFaculty = async () => {
        try {
            let response = await axios.post(
                `${GROBAL.BASE_SERVER.URL}faculty/index.php`, {
                action: "getFacultyTypeBy"
            }
            );
            if (response.data.require) {
                setFaculty(response.data.data);
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
    const getDataDepartment = async () => {
        try {
            let response = await axios.post(
                `${GROBAL.BASE_SERVER.URL}department/index.php`, {
                action: "getDepartmentTypeBy"
            }
            );
            if (response.data.require) {
                setDepartment(response.data.data);
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
    const DataDepartment = department.map((departmentdatas) => ({
        value: departmentdatas.department_id,
        label: departmentdatas.department_name,
    }));
    const DataFaculty = faculty.map((facultydatas) => ({
        value: facultydatas.faculty_id,
        label: facultydatas.faculty_name,
    }));
    const DataPrefix = prefix.map((prefixdatas) => ({
        value: prefixdatas.prefix_id,
        label: prefixdatas.prefix_name,
    }));
    const DataUserType = userType.map((usertypedatas) => ({
        value: usertypedatas.user_type_id,
        label: usertypedatas.type_name,
    }));
    useEffect(() => {
        getDataFaculty();
        getDataDepartment();
        getDataPrefix();
        getUserType()
        getDataUserLast()
    }, []);
    const handleDatas = (datas) => {
        setUsers({ ...userS, [datas.target.name]: datas.target.value });
    };
    const handleSelect = (key, data) => {
        setUsers({ ...userS, [key]: data });
    };
    const SearchSelectFaculty = (value) => {
        console.log("search:", value);
    };
    const SearchSelectDepartment = (value) => {
        console.log("search:", value);
    };
    return (
        <>
            <Card title="เพิ่มผู้ใช้">
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Row justify="center">
                            <Col span={11}>
                                <label>ระดับผู้ใช้</label>
                                <br />
                                <Select
                                    name="user_type_id"
                                    placeholder="เลือก"
                                    size="large"
                                    onChange={(e) => handleSelect("user_type_id", e)}
                                    required
                                    options={DataUserType}
                                    style={{
                                        width: 400,
                                    }}
                                />
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <label>คำนำหน้า</label>
                                <br />
                                <Select
                                    name="prefix_id"
                                    placeholder="เลือก"
                                    size="large"
                                    onChange={(e) => handleSelect("prefix_id", e)}
                                    required
                                    options={DataPrefix}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row justify="center">
                            <Col span={11}>
                                <label>ชื่อผู้ใช้</label>
                                <br />
                                <Input
                                    name="username"
                                    onChange={handleDatas}
                                    required
                                />
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <label>เบอร์โทร</label>
                                <br />
                                <Input
                                    name="telephone"
                                    onChange={handleDatas}
                                    required
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row justify="center">
                            <Col span={11}>
                                <label>ชื่อ</label>
                                <br />
                                <Input
                                    name="first_name"
                                    onChange={handleDatas}
                                    required
                                    span={2}
                                />
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <label>นามสกุล</label>
                                <br />
                                <Input
                                    name="last_name"
                                    onChange={handleDatas}
                                    required
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row justify="center">
                            <Col span={11}>
                                <label>รหัสผ่าน</label>
                                <br />
                                <Input
                                    name="password"
                                    type="password"
                                    onChange={handleDatas}
                                    required
                                />
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <label>ยืนยันรหัสผ่าน</label>
                                <br />
                                <Input
                                    name="confirm_password"
                                    type="password"
                                    onChange={handleDatas}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span={11}>
                                <label>ชั้นปี</label>
                                <br />
                                <Input
                                    name="yearclass"
                                    type="number"
                                    size="large"
                                    onChange={handleDatas}
                                    required
                                />
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <label>รหัสนักศึกษา</label>
                                <br />
                                <Input
                                    name="student_id"
                                    onChange={handleDatas}
                                    required
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row justify="center">
                            <Col span={11}>
                                <label>คณะ</label>
                                <br />
                                <Select
                                    showSearch
                                    name="faculty_id"
                                    placeholder="เลือก"
                                    optionFilterProp="children"
                                    onSearch={SearchSelectFaculty}
                                    size="large"
                                    onChange={(e) => handleSelect("faculty_id", e)}
                                    filterOption={(input, option) =>
                                        (option?.label ?? "")
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                    }
                                    style={{
                                        width: 400,
                                    }}
                                    options={DataFaculty}
                                />
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <label>สาขา</label>
                                <br />
                                <Select
                                    showSearch
                                    name="department_id"
                                    placeholder="เลือก"
                                    optionFilterProp="children"
                                    size="large"
                                    onChange={(e) => handleSelect("department_id", e)}
                                    onSearch={SearchSelectDepartment}
                                    filterOption={(input, option) =>
                                        (option?.label ?? "")
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                    }
                                    style={{
                                        width: 400,
                                    }}
                                    options={DataDepartment}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row justify="center">
                    <Col span={3}>
                        <Button
                            type="submit"
                            size="large"
                            onClick={(e) => handleSubmit(e)}
                        >
                            บันทึก
                        </Button>
                    </Col>
                </Row>
                <br />
            </Card>
        </>
    );
};
export default UserInsert;
