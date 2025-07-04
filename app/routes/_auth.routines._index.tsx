import { Title } from "@radix-ui/react-dialog";
import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { TFunction } from "i18next";
import { Plus } from "lucide-react";
import RoutinesList from "~/components/routines/RoutinesList";
import { Button } from "~/components/ui/button";
import i18next from "~/i18n/i18n.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.metaData.title },
    {
      name: data?.metaData?.description,
      content: data?.metaData?.content,
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request);
  const metaData = getMetaData(t);

  const userRoutines = [
    {
      id: 1,
      title: "Push Pull Leg",
      description: "Rutina clásdica de empuje, jalon y pierna",
      frequency: 6,
      days: ["Push day", "Pull day", "Leg day"],
      main: false,
      order: 0,
    },
    {
      id: 2,
      title: "Full Body",
      description: "Entrenamiento de cuerpo completo 3 veces por semana",
      frequency: 3,
      days: ["Full body"],
      main: false,
      order: 1,
    },
    {
      id: 3,
      title: "Arnold Split",
      description:
        "Rutina avanzada estilo culturismo usada por Arnold Schwarzenegger",
      frequency: 6,
      days: ["Pecho y Espalda", "Hombros y Brazos", "Piernas"],
      main: true,
      order: 2,
    },
  ];

  userRoutines.sort((a, b) => a.order - b.order); // TODO: ORDENAR EN EL BACKEND
  return json({ metaData, userRoutines });
}

export default function RoutinesPage() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-primary-color-100 font-semibold text-xl">
          Mis rutinas
        </h1>
        <Link to="/routines/add">
          <Button className="text-sm" variant="dashed">
            <Plus />
            Añadir rutina
          </Button>
        </Link>
      </div>
      <RoutinesList />
    </div>
  );
}

function getMetaData(t: TFunction) {
  return {
    title: t("title-routines-page") as string,
    description: t("description-routines-page") as string,
    content: t("content-routines-page") as string,
  };
}
