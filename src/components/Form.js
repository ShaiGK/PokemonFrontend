import classes from "./Form.module.css";
import React, { useState, useEffect } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

const Form = (props) => {
  const [formData, setFormData] = useState({
    level: "",
    move: "",
    attack: "",
    defense: "",
    pokemon1: "",
    pokemon2: "",
    crit: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const optionChangeHandler = (event) => {
    setSelectedOption(event.target.value);
  };

  const changeHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
  }, [formData]);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseText = await response.text();
      const responseDataDecimal = parseFloat(responseText);
      const responseData = Math.round(responseDataDecimal);
      props.onResponseData(responseData);
      if (!response.ok) {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setFormData({
      level: "",
      move: "",
      attack: "",
      defense: "",
      pokemon1: "",
      pokemon2: "",
      crit: "",
    });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          name="level"
          type="number"
          value={formData.level}
          placeholder="Pokemon Level"
          onChange={changeHandler}
        />
        <input
          className={classes.input}
          name="move"
          type="text"
          value={formData.move}
          placeholder="Move (dash between multiple words)"
          onChange={changeHandler}
        />
        <input
          className={classes.input}
          name="attack"
          type="number"
          value={formData.attack}
          placeholder="Attack"
          onChange={changeHandler}
        />
        <input
          className={classes.input}
          name="defense"
          type="number"
          value={formData.defense}
          placeholder="Defense"
          onChange={changeHandler}
        />
        <input
          className={classes.input}
          name="pokemon1"
          type="text"
          value={formData.pokemon1}
          placeholder="Attacking Pokemon"
          onChange={changeHandler}
        />
        <input
          className={classes.input}
          name="pokemon2"
          type="text"
          value={formData.pokemon2}
          placeholder="Defending Pokemon"
          onChange={changeHandler} // Make a component
        />

        <div
          className={classes.radioGroup}
          name="crit"
          value={formData.crit}
          placeholder="Crit"
          onChange={changeHandler}
        >
          <label>Critical Hit?</label>
          <label>
            <input
              name="crit"
              type="radio"
              value="yes"
              checked={selectedOption === "yes"}
              onChange={optionChangeHandler}
            />
            Yes
          </label>
          <label>
            <input
              name="crit"
              type="radio"
              value="no"
              checked={selectedOption === "no"}
              onChange={optionChangeHandler} // Make a component
            />
            No
          </label>
        </div>
        <Button type="submit">Go</Button>
      </form>
    </Card>
  );
};

export default Form;
