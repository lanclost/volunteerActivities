import React from "react";

//Activity
const Activity = React.lazy(() => import("./views/activity/activity/Activity"));
const ActivityCheck = React.lazy(() =>
  import("./views/activity/activity-check/ActivityCheck")
);
const ActivityCheckDetail = React.lazy(() =>
  import("./views/activity/activity-check-detail/ActivityCheckDetail")
);
const ActivityCheckEvidence = React.lazy(() =>
  import("./views/activity/activity-check-evidence/ActivityCheckEvidence")
);
const ActivityCompleted = React.lazy(() =>
  import("./views/activity/activity-completed/ActivityCompleted")
);
const ActivityCompletedExpose = React.lazy(() =>
  import("./views/activity/activity-completed-expose/ActivityCompletedExpose")
);
const ActivityInsert = React.lazy(() =>
  import("./views/activity/activity-insert/ActivityInsert")
);
const ActivitySend = React.lazy(() =>
  import("./views/activity/activity-send/ActivitySend")
);
const ActivityUpdate = React.lazy(() =>
  import("./views/activity/activity-update/ActivityUpdate")
);
const ActivityDetail = React.lazy(() =>
  import("./views/activity/activity-detail/ActivityDetail")
);
const ActivityRequest = React.lazy(() =>
  import("./views/activity/activity-request/ActivityRequest")
);
const ActivityRequestDetail = React.lazy(() =>
  import("./views/activity/activity-request-detail/ActivityRequestDetail")
);
const ActivityConduct = React.lazy(() =>
  import("./views/activity/activity-conduct/ActivityConduct")
);
const ActivityConductDetail = React.lazy(() =>
  import("./views/activity/activity-conduct-detail/ActivityConductDetail")
);
const ActivityAssociated = React.lazy(() =>
  import("./views/activity/activity-associated/ActivityAssociated.js")
);


//Dashboard
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

//User
const User = React.lazy(() => import("./views/user/user/User"));
const UserDetail = React.lazy(() =>
  import("./views/user/user-detail/UserDetail")
);
const UserUpdate = React.lazy(() =>
  import("./views/user/user-update/UserUpdate.js")
);
const Profile = React.lazy(() => import("./views/user/profile/Profile"));
const UserInsert = React.lazy(() => import("./views/user/user-insert/UserInsert"));
const UserRequest = React.lazy(() => import("./views/user/user-request/UserRequest"));

//New&Calendar
const CalendarView = React.lazy(() =>
  import("./views/calendar-view/CalendarView.js")
);
const CalendarInsert = React.lazy(() =>
  import("./views/calendar-insert/CalendarInsert.js")
);
const CalendarUpdate = React.lazy(() =>
  import("./views/calendar-update/CalendarUpdate.js")
);

//paper
const Paper = React.lazy(() =>
  import("./views/report/paper/Paper")
);
const PaperInsert = React.lazy(() =>
  import("./views/report/paper-insert/PaperInsert")
);
const PaperUpdate = React.lazy(() =>
  import("./views/report/paper-update/PaperUpdate")
);
const ReportBy = React.lazy(() => import("./views/report/report-by/ReportBy"));
// localStorage.clear()
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
let routes = [];
if (user != null) {
  routes.push(
    { path: "/", exact: true, name: "Home" },
    { path: "/activity", name: "Activity", element: Activity, exact: true },
    {
      path: "/activity-detail/:id",
      name: "ActivityDetail",
      element: ActivityDetail,
      exact: true,
    },
    {
      path: "/activity-update/:id",
      name: "ActivityUpdate",
      element: ActivityUpdate,
      exact: true,
    },
    {
      path: "activity/activity-insert",
      name: "ActivityInsert",
      element: ActivityInsert,
      exact: true,
    },
    { path: "/dashboard", name: "Dashboard", element: Dashboard, exact: true },
    { path: "/profile", name: "Profile", element: Profile, exact: true },
    {
      path: "/user-detail/:id",
      name: "UserDetail",
      element: UserDetail,
      exact: true,
    },
    {
      path: "/user-insert",
      name: "UserInsert",
      element: UserInsert,
      exact: true,
    },
  );

  //admin
  if (user.user_type_id == "01") {
    routes.push(
      //activity
      {
        path: "/activity-check",
        name: "ActivityCheck",
        element: ActivityCheck,
        exact: true,
      },
      {
        path: "/activity-check-evidence/:id/:id2",
        name: "ActivityCheckEvidence",
        element: ActivityCheckEvidence,
        exact: true,
      },
      {
        path: "/activity-check-detail/:id",
        name: "ActivityCheckDetail",
        element: ActivityCheckDetail,
        exact: true,
      },
      {
        path: "/activity-completed",
        name: "ActivityCompleted",
        element: ActivityCompleted,
        exact: true,
      },
      {
        path: "/activity-completed-expose",
        name: "ActivityCompletedExpose",
        element: ActivityCompletedExpose,
        exact: true,
      },
      {
        path: "/activity-request",
        name: "ActivityRequest",
        element: ActivityRequest,
        exact: true,
      },
      {
        path: "/activity-request-detail",
        name: "ActivityRequestDetail",
        element: ActivityRequestDetail,
        exact: true,
      },
      {
        path: "/activity-conduct",
        name: "ActivityConduct",
        element: ActivityConduct,
        exact: true,
      },
      {
        path: "/activity-conduct-detail",
        name: "ActivityConductDetail",
        element: ActivityConductDetail,
        exact: true,
      },
      //user
      { path: "/user", name: "User", element: User, exact: true },
      {
        path: "/user-update/:id",
        name: "UserUpdate",
        element: UserUpdate,
        exact: true,
      },
      {
        path: "/user-insert",
        name: "UserInsert",
        element: UserInsert,
        exact: true,
      },
      {
        path: "/user-request",
        name: "UserRequest",
        element: UserRequest,
        exact: true,
      },
      //report
      {
        path: "/paper",
        name: "Paper",
        element: Paper,
        exact: true,
      },
      {
        path: "/paper-insert",
        name: "PaperInsert",
        element: PaperInsert,
        exact: true,
      },
      {
        path: "/paper-update/:id",
        name: "PaperUpdate",
        element: PaperUpdate,
        exact: true,
      },
      //news
      {
        path: "/calendar-view/",
        name: "CalendarView",
        element: CalendarView,
        exact: true,
      },
      //calendar
      {
        path: "/calendar-insert/",
        name: "CalendarInsert",
        element: CalendarInsert,
        exact: true,
      },
      {
        path: "/calendar-update/:id",
        name: "CalendarUpdate",
        element: CalendarUpdate,
        exact: true,
      }
    );

    //teacher
  } else if (user.user_type_id == "03") {
    routes.push(
      { path: "/profile", name: "Profile", element: Profile, exact: true },
      {
        path: "/activity-send",
        name: "ActivitySend",
        element: ActivitySend,
        exact: true,
      },
      {
        path: "/user-update/:id",
        name: "UserUpdate",
        element: UserUpdate,
        exact: true,
      },
      {
        path: "/paper",
        name: "Paper",
        element: Paper,
        exact: true,
      }
    );

    //student
  } else if (user.user_type_id == "05") {
    routes.push(
      {
        path: "/activity-send",
        name: "ActivitySend",
        element: ActivitySend,
        exact: true,
      },
      { path: "/profile", name: "Profile", element: Profile, exact: true },
      {
        path: "/paper",
        name: "Paper",
        element: Paper,
        exact: true,
      },
      {
        path: "/activity-completed",
        name: "ActivityCompleted",
        element: ActivityCompleted,
        exact: true,
      },
      {
        path: "/activity-completed-expose",
        name: "ActivityCompletedExpose",
        element: ActivityCompletedExpose,
        exact: true,
      },
      {
        path: "/activity-check-evidence/:id/:id2",
        name: "ActivityCheckEvidence",
        element: ActivityCheckEvidence,
        exact: true,
      },
      {
        path: "/activity-associated",
        name: "ActivityAssociated",
        element: ActivityAssociated,
        exact: true,
      },
      {
        path: "/user-update/:id",
        name: "UserUpdate",
        element: UserUpdate,
        exact: true,
      },
    );

    //person
  } else if (user.user_type_id == "04") {
    routes.push(
      { path: "/profile", name: "Profile", element: Profile, exact: true },
      {
        path: "/activity-send",
        name: "ActivitySend",
        element: ActivitySend,
        exact: true,
      },
      {
        path: "/user-update/:id",
        name: "UserUpdate",
        element: UserUpdate,
        exact: true,
      },
      {
        path: "/paper",
        name: "Paper",
        element: Paper,
        exact: true,
      }
    );
  }
}

export default routes;
