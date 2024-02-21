const GROBAL = {
  // BASE_SERVER: {
  //   URL: "http://localhost/volunteering_activities_API/api/",
  //   URL_UPLOAD: "http://localhost/volunteering_activities_API/api/",
  // },
  BASE_SERVER: {
    URL: "https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/",
    URL_UPLOAD: "https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/",
  },
  ACCESS_TOKEN: {
    "x-access-token": localStorage.getItem("x-access-token"),
  },
};

export default GROBAL;
