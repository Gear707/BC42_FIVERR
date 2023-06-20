import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiServiceInfo } from "../../apis/jobAPI";
import "./ServiceInfo.scss";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import ServiceCost from "./ServiceCost/ServiceCost";
import { alertError2 } from "../../helpers/sweeAlert2";
import styles from "./ServiceInfo.module.scss";
import useWindowResize from "../../helpers/useWindowResize";

function ServiceInfo() {
  const { keyword, MaCongViec } = useParams();
  const user = useSelector((state) => state?.user);

  const [info, setInfo] = useState();
  const size = useWindowResize();

  const getServiceInfo = async () => {
    try {
      const data = await apiServiceInfo(MaCongViec);
      setInfo(data.content);
    } catch (error) {
      alertError2(error.response.data.content);
    }
  };

  useEffect(() => {
    getServiceInfo();
  }, [MaCongViec, keyword]);

  return (
    <div id="ServiceInfo" className={styles.container}>
      <ServiceDetail info={info} user={user} MaCongViec={MaCongViec} />
      {size.width > 992 && (
        <ServiceCost info={info} user={user} MaCongViec={MaCongViec} />
      )}
    </div>
  );
}
export default ServiceInfo;
