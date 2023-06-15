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
