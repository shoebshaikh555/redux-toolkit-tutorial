import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeoples } from "../store/slices/PeopleSlice";

export const DisplayPeople = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.people;
  });
  console.log("data: ", data);
  useEffect(() => {
    dispatch(fetchPeoples());
  }, []);

  return (
    <div>
      {data?.loading && <div>Loading.....</div>}
      {data?.people?.map((people) => (
        <div key={people.id}>{people?.name}</div>
      ))}
      {data?.error && <div>Error in fetching records.</div>}
    </div>
  );
};
