import { useState } from "react";
import RoutineListItem from "./RoutineListItem";
import { Reorder } from "framer-motion";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_auth.routines._index";
export default function RoutinesList() {
  const { userRoutines } = useLoaderData<typeof loader>();
  const [items, setItems] = useState(userRoutines);

  return (
    <Reorder.Group
      values={items}
      onReorder={(newOrder) => {
        setItems(newOrder);
        const orderedPayload = newOrder.map((routine, index) => ({
          id: routine.id,
          routineOrder: index,
        }));
        console.log(orderedPayload)
        // aquí iría una llamada a tu backend para guardar el nuevo orden
      }}
      className="space-y-5"
    >
      {items.map((userRoutine) => (
        <Reorder.Item value={userRoutine} key={userRoutine.id}>
          <RoutineListItem
            id={userRoutine.id}
            title={userRoutine.title}
            description={userRoutine.description}
            frequency={userRoutine.frequency}
            muscleGroupsByDay={userRoutine.days}
            main={userRoutine.main}
          />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
