import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "../store/members";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import "./styling/MemberProfile.css";

const MemberProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allMembers = useSelector((state) => state.member.members[0]);

  useEffect(() => {
    async function fetchMembers() {
      if (id) {
        const res = await fetch(`/api/projects/${id}/members`);
        const resData = await res.json();
        // console.log("This is the members", resData)
        dispatch(getMembers(resData.members));
        // console.log("all members----", allMembers)
      }
    }
    fetchMembers();
  }, [id]);

  return (
    <div className="team_member_flex">
      {allMembers && allMembers.length > 0 ? (
        allMembers.map((member) => (
          <div key={member.id}>
            <div>
              {/* <img src={member.photoUrl} className="profile_pic"></img> */}
              <Avatar size={80} className="team_members">
                <p className="member_text">
                  {member.firstName[0]}
                  {member.lastName[0]}
                </p>
              </Avatar>
              {/* <div>First Name: </div>
          <div>Last Name: </div> */}
            </div>
          </div>
        ))
      ) : (
        <div>
          There are no team members on this project. You should add some!{" "}
        </div>
      )}
    </div>
  );
};

export default MemberProfile;
