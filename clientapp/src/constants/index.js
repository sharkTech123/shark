export const emailrgx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;

export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:'"\\|,.<>/?]).{7,}$/;

export const AccountTypes = [
  {
    label: "Trainee Instructor",
    value: "traineeinstructor",
  },
  {
    label: "Theory Learner",
    value: "theorylearner",
  },
  {
    label: "Customer",
    value: "customer",
  },
];
export const ROLES = {
  ADMIN: "admin",
  CUSTOMER: "customer",
  TRAINEEINSTRUCTOR: "traineeinstructor",
  THEORYLEARNER: "theorylearner",
};
