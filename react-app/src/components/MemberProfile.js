import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMember, getAllMembers } from "../store/members";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import "./styling/MemberProfile.css";
import UniqueMember from "./UniqueMember";
import { ConsoleSqlOutlined } from "@ant-design/icons";

const MemberProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [allMembers, setAllMembers] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchMembers() {
    if (id) {
      const res = await fetch(`/api/projects/${id}/members`);
      const resData = await res.json();
      console.log(resData.members);
      setAllMembers(resData.members);
      await setLoading(false);
      await dispatch(getMember(resData.members));
    }
  }
  useEffect(() => {
    fetchMembers();
  }, [id]);

  return loading ? null : (
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
