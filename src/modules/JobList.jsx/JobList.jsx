import React, { useEffect, useState } from "react";
import styles from "./JobList.module.scss";
import { useParams } from "react-router-dom";

function JobList() {
  const { keyword } = useParams();
  const [isKeyWord, setIsKeyWord] = useState(null);

  useEffect(() => {}, [keyword]);
  return (
    <div className={styles}>
      <h1>Job</h1>
    </div>
  );
}

export default JobList;
