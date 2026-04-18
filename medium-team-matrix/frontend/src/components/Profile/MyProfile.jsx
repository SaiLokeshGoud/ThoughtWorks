import { useEffect, useState } from "react";
import './profile.css';
import fetchApi from "../script/fetchApi";
import Navbar from '../Navbar/Navbar'
import FollowListPopUp from "../UserProfile/FollowListPopUp";

const MyProfile =  () => {
  const [popUpState, setPopUp] = useState();
  const [type, setType] = useState();
  const togglePopUp = () => {
    setPopUp(popUpState => !popUpState);
  }

  const displayFollowDetails = (data) => {
    if(data.length > 0) {
    setPopUp(popUpState => !popUpState);
    setType(data);
    }
  };

  const [userData, setData] = useState({});
  const getUserData = async () => {
    const data = await fetchApi('http://localhost:8000/user/dashboard');
    const profileInfo = await fetchApi('http://localhost:8000/user/profile/' + data.id);
    setData(profileInfo);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <img src={userData.avatar_url} alt="profile-picture" />
        <h2>{userData.username}</h2>
        <div className="followDetails">
          <h3 onClick={() => displayFollowDetails(userData.followers)}> Followers: {userData.followers?.length}</h3>
          <h3 onClick={() => displayFollowDetails(userData.following)}> Following: {userData.following?.length}</h3>
        </div>
        {
        popUpState ? <FollowListPopUp data={type} togglePopUp={togglePopUp} /> : null
      }
      </div>
    </>
  );
};

export default MyProfile;
