import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="text-center" style={{height: "100vh", backgroundColor: "#eafff5"}}>
            <div>
                <img src="https://file.hstatic.net/200000348419/file/404_1_ff141bafa60e4ed3aef90c7ebdbf54e6.png" />
                <h2>The page you’re looking for doesn’t exist.</h2>
                <Link className="btn btn-danger" to="/">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default PageNotFound;