import React from "react";
import styles from "./RelatedService.module.scss";
import data from "./RelatedData.json";
import { useParams } from "react-router-dom";

function RelatedService() {
  const { MaLoaiCongViec, tenLoaiCongViec } = useParams();
  return (
    <div className={styles.container}>
      <h4>Services Related To {tenLoaiCongViec}</h4>
      <div className="text-center">
        {data?.map((item, index) => {
          return (
            <div className={styles.card} key={`{${MaLoaiCongViec}-${index}`}>
              <span className={styles.service}>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedService;
// d-flex align-items-center justify-content-center
