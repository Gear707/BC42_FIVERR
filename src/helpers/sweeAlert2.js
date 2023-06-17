import Swal from "sweetalert2";

const Popup = Swal.mixin({
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
});

export const alertSuccess = (title) => {
  return Popup.fire({
    toast: true,
    icon: "success",
    title,
  });
};

export const alertError = (title) => {
  return Popup.fire({
    toast: true,
    icon: "error",
    title,
  });
};

export const warningPopup = (text) => {
  return Swal.fire({
    title: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, I do",
    confirmButtonColor: "#0f929b",
    cancelButtonText: "Cancel",
    cancelButtonColor: "#858585",
  });
};

export const warningLogout = () => {
  return Swal.fire({
    title: "Are you sure to logout right?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, I do",
    confirmButtonColor: "#0354a5",
    cancelButtonText: "Cancel",
    cancelButtonColor: "#d33",
  });
};

export const alertSuccess2 = (title) => {
  return Popup.fire({
    icon: "success",
    title,
    position: "center",
  });
};

export const alertError2 = (title) => {
  return Popup.fire({
    icon: "error",
    title,
    position: "center",
  });
};

export const alertRequireLogin = (title) => {
  return Popup.fire({
    title: "You need to login to make this action",
    icon: "warning",
    position: "center",
    showCancelButton: true,
    confirmButtonText: "Continue",
    confirmButtonColor: "#0354a5",
    cancelButtonText: "Cancel",
    cancelButtonColor: "#d33",
  });
};
