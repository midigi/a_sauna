import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getMembers} from "../store/members"
const MemberProfile = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const allMembers= useSelector((state)=> state.member)

    useEffect(() => {
        async function fetchMembers(){
            if (id){
                const res = await fetch(`/api/projects/${id}/members`)
                const resData = await res.json();
                console.log("This is the members", resData)
                console.log(allMembers)
                dispatch(getMembers(resData.members))
            }
        }
        fetchMembers();
      }, [id]);

    return(
        <div>
            Hi we made it!
            The project id is {id}
            {/* {allMembers && allMembers.map((member) => (
                <div key={member.id}>
                    <div>
                        <div>Name: {member.firstName}</div>
                    </div>
                </div>
            ))} */}
        </div>
    )
}

export default MemberProfile;
