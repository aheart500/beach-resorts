import React from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import Loading from "../components/Loading";
import { withRoomConsumer } from "../Context";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomsContainer);
