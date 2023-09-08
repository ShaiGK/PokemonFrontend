// eslint-disable-next-line
import classes from "./App.module.css";
import Form from "./components/Form";
import Display from "./components/Display";
import React, { useState } from "react";

function App() {
  const [responseData, setResponseData] = useState(null);

  const responseDataHandler = (data) => {
    setResponseData(data);
  };

  const resetClickHandler = () => {
    setResponseData(null);
  };

  return (
    <div>
      {responseData ? (
        <Display onResetClick={resetClickHandler} damage={responseData} />
      ) : (
        <Form onResponseData={responseDataHandler} />
      )}
    </div>
  );
}

export default App;
