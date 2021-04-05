import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMember } from "../store/members";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import "./styling/MemberProfile.css";
import UniqueMember from "./UniqueMember";

const MemberProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allMembers = useSelector((state) => state.member.members[0]);

  useEffect(() => {
    async function fetchMembers() {
      if (id) {
        const res = await fetch(`/api/projects/${id}/members`);
        const resData = await res.json();
        dispatch(getMember(resData.members));

        console.log("all members----", allMembers);
      }
    }
    fetchMembers();
  }, [id]);

  return (
    <div className="team_member_flex">
      {allMembers && allMembers.length > 0 ? (
        allMembers.map((member) => (
          <div key={member.id}>
            <UniqueMember member={member}></UniqueMember>
          </div>
        ))
      ) : (
        <div>
          There are no team members on this project. You should add some!
        </div>
      )}
    </div>
  );
};

export default MemberProfile;
