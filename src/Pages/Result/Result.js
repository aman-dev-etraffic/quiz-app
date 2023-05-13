import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";

const Result = ({ name, score}) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result container mt-5 mb-5">
      <div className="result_image">
        <img src="/result.jpg" className="img-fluid rounded" alt=""/>
      </div>
      <div className="result_text">
        <span className="title">Final Score : {score}</span>
        <Button variant="contained" color="secondary" size="large" style={{ alignSelf: "center", marginTop: 20 }} href="/">
          Go to homepage
        </Button>
      </div>
    </div>
  );
};

export default Result;
