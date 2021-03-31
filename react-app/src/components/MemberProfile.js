import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getMembers} from "../store/members"
const MemberProfile = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const allMembers= useSelector((state)=> state.member.members[0])

    useEffect(() => {
        async function fetchMembers(){
            if (id){
                const res = await fetch(`/api/projects/${id}/members`)
                const resData = await res.json();
                // console.log("This is the members", resData)
                dispatch(getMembers(resData.members))
                // console.log("all members----", allMembers)
            }
        }
        fetchMembers();
      }, [id]);

    return(
            allMembers && allMembers.length>0 ?(
                (allMembers.map((member) => (
                <div key={member.id}>
                    <div>
                        <img src={member.photoUrl} className="profile_pic"></img>
                        <div>First Name: {member.firstName}</div>
                        <div>Last Name: {member.lastName}</div>
                    </div>
                </div>)))) :
                <div>There are no team members on this project. You should add some! </div>
    )
}

export default MemberProfile;
