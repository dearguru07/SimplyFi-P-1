import "./App.css";
// import array from "./mockData/data";
import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import AvatarGallery from "./mockData/data";

const UserCard = (props) => {
  return (
    <div className="userCard">
    <AvatarGallery/>
      <div className="inner-card">
        <h2 className="name">{props.data.name}</h2>
        <p className="info">
          <b>Email:</b> {props.data.email}
        </p>
        <p className="info">
          <b>Phone:</b> {props.data.phone}
        </p>
        <p className="info">
          <b>Company:</b> {props.data.company.name}
        </p>
        <p className="info">
          <b>Website:</b> {props.data.website}
        </p>
        <p className="info">
          <b>Address:</b> {props.data.address.city}, {props.data.address.suite},{" "}
          {props.data.address.street}, {props.data.address.zipcode}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    async function UserData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const OriginalData = await data.json();
      console.log(OriginalData);
      setUserInfo(OriginalData);
    }
    UserData();
  }, []);
  if (userInfo.length === 0) {
    return <ShimmerCard />;
  } else {
    return (
      <div>
        {userInfo.map((x) => {
          return <UserCard key={x.id} data={x} />;
        })}
      </div>
    );
  }
};

export default App;
