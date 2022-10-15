import { useState } from "react";
import data from "../../helper/data";
import Button from "../button/Button";
import "./Card.css";

const Card = () => {
  // console.log(data.slice(0, 5));
  const [num, setNum] = useState(0);
  console.log(num);

  const handleChange = (e) => {
    // console.log(e.target.value);

    if (e.target.value === "next") {
      if (num < 15) {
        setNum(num + 5);
      } else {
        setNum(0);
      }
    } else if (e.target.value === "prev") {
      if (num === 0) {
        setNum(15);
      } else {
        setNum(num - 5);
      }
    }
  };

  return (
    <div className="contains">
      <h1>Employee List</h1>
      <div className="screen">
        <p>
          Employees {num + 1} to {num + 5}
        </p>
      </div>
      {data.slice(num, num + 5).map((item) => {
        const { name, age, email, image, id } = item;
        return (
          <div className="container" key={id}>
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="disc">
              <div className="name">{name}</div>
              <div className="email">{email}</div>
              <div className="age">{age} years</div>
            </div>
          </div>
        );
      })}
      <Button say={handleChange} />
    </div>
  );
};

export default Card;
