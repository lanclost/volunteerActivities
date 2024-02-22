import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilCalendar,
  cilChart,
  cilChatBubble,
  cilContact,
  
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const user = JSON.parse(window.localStorage.getItem('user'))
const student = [
  {
    component: CNavItem,
    name: 'ข่าวสาร',
    to: '/dashboard',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'ข้อมูลส่วนตัว',
    to: '/profile',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'กิจกรรม',
    to: '/activity',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายชื่อกิจกรรม',
        to: '/activity',
      },
      {
        component: CNavItem,
        name: 'กิจกรรมที่กำลังเข้าร่วม',
        to: '/activity-associated',
      },
      {
        component: CNavItem,
        name: 'กิจกรรมเสร็จสิ้น',
        to: '/activity-completed',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'เอกสาร',
    to: '/paper',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
]
const admin = [
  {
    component: CNavItem,
    name: 'ข่าวสาร',
    to: '/dashboard',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'จัดการข่าวสาร',
    to: '/calendar-view',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'ผู้ใช้',
    to: '/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'เพิ่มผู้ใช้',
        to: '/user-insert',
      },
      {
        component: CNavItem,
        name: 'คำขอสมัครผู้ใช้',
        to: '/user-request',
      },
      {
        component: CNavItem,
        name: 'รายชื่อผู้ใช้',
        to: '/user',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'กิจกรรม',
    to: '/activity',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'คำขอเปิดกิจกรรม',
        to: '/activity-request',
      },
      {
        component: CNavItem,
        name: 'รายชื่อกิจกรรม',
        to: '/activity',
      },
      {
        component: CNavItem,
        name: 'อยู่ระหว่างดำเนินการ',
        to: '/activity-conduct',
      },
      {
        component: CNavItem,
        name: 'ตรวจสอบหลักฐาน',
        to: '/activity-check',
      },
      {
        component: CNavItem,
        name: 'กิจกรรมเสร็จสิ้น',
        to: '/activity-completed',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'เอกสาร',
    to: '/paper',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
   
  },
]
const officer = [
  {
    component: CNavItem,
    name: 'ข่าวสาร',
    to: '/dashboard',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  
  },
  {
    component: CNavItem,
    name: 'ข้อมูลส่วนตัว',
    to: '/profile',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'กิจกรรม',
    to: '/activity',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายชื่อกิจกรรม',
        to: '/activity',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'เอกสาร',
    to: '/paper',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
   
  },
]
const teacher = [
  {
    component: CNavItem,
    name: 'ข่าวสาร',
    to: '/dashboard',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  
  },
  {
    component: CNavItem,
    name: 'ข้อมูลส่วนตัว',
    to: '/profile',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'กิจกรรม',
    to: '/activity',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายชื่อกิจกรรม',
        to: '/activity',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'เอกสาร',
    to: '/paper',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
   
  },
]
const person = [
  {
    component: CNavItem,
    name: 'ข่าวสาร',
    to: '/dashboard',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  
  },
  {
    component: CNavItem,
    name: 'ข้อมูลส่วนตัว',
    to: '/profile',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'กิจกรรม',
    to: '/activity',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายชื่อกิจกรรม',
        to: '/activity',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'เอกสาร',
    to: '/paper',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
   
  },
]
let _nav = []
if (user != null) {
  if (user.user_type_id === '01') {
    _nav = [...admin]
  } else if (user.user_type_id === '02') {
    _nav = [...officer]
  } else if (user.user_type_id === '03') {
    _nav = [...teacher]
  } else if (user.user_type_id === '04') {
    _nav = [...person]
  } else if (user.user_type_id === '05') {
    _nav = [...student]
  }
  
}


export default _nav
