import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { TFunction } from "i18next";
import i18next from "~/i18n/i18n.server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { BicepsFlexed, Clock, Dumbbell, Goal, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { Input } from "~/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Form } from "@remix-run/react";
import WorkoutAddForm from "~/components/workout/WorkoutAddForm";
import { Label } from "~/components/ui/label";
import WorkoutUpdateForm from "~/components/workout/WorkoutUpdateForm";

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

  return json({ metaData });
}

export default function RoutineDetailsPage() {
  const [drawerMode, setDrawerMode] = useState<"add" | "update" | "delete">(
    "add"
  );
  const drawerForDayButtonRef = useRef<HTMLButtonElement>(null);
  const openDrawerForDay = (drawerMode: "add" | "delete") => {
    setDrawerMode(drawerMode);
    drawerForDayButtonRef.current?.click();
  };

  const drawerForWorkoutButtonRef = useRef<HTMLButtonElement>(null);
  const openDrawerForWorkout = (drawerMode: "add" | "update" | "delete") => {
    setDrawerMode(drawerMode);
    drawerForWorkoutButtonRef.current?.click();
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Dumbbell className="text-tertiary-color" size={17} />
              <h1 className="text-primary-color-200 capitalize text-md font-bold">
                Arnold split
              </h1>
            </div>
            <p className="text-primary-color-400 italic">
              <span className="text-tertiary-color font-semibold">2 </span>/ 7{" "}
              <span className="text-sm">dias</span>
            </p>
          </div>
          <p className="text-sm text-primary-color-400 mt-1">Sin descripción</p>
        </div>
        <div className="flex-1">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm text-primary-color-200">
                Push Day
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-5"
                  >
                    <AccordionItem
                      value="item-5"
                      className="border border-primary-color-700/40 bg-primary-color-800/40 cursor-pointer relative z-5 w-full rounded-xl text-primary-color-200 px-5"
                    >
                      <AccordionTrigger className="py-3" hideIcon>
                        <h1 className="text-xs">Press de banca</h1>
                        <Badge className="h-5 min-w-10 rounded-full px-2 font-mono tabular-nums bg-primary-color-700 hover:bg-primary-color-700">
                          3 x 8
                        </Badge>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-xs flex gap-1 items-center">
                            <Clock size={13} className="text-tertiary-color" />
                            <span>Descanso 01:30m</span>
                          </div>
                          <div className="text-xs flex gap-1 items-center">
                            <Dumbbell
                              size={13}
                              className="text-tertiary-color"
                            />
                            <span>Mancuernas</span>
                          </div>
                          <div className="text-xs flex gap-1 items-center">
                            <BicepsFlexed
                              size={13}
                              className="text-tertiary-color"
                            />
                            <span>PR 100kg</span>
                          </div>
                          <div className="text-xs flex gap-1 items-center">
                            <Goal size={13} className="text-tertiary-color" />
                            <span>Objetivo 120kg</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="xs" className="w-full" onClick={() => openDrawerForWorkout("update")}>
                            Editar
                          </Button>
                          <Button
                            size="xs"
                            className="w-full bg-secondary-color-800 hover:bg-secondary-color-800/80 text-primary-color-300"
                            onClick={() => openDrawerForWorkout("delete")}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="item-6"
                      className="border border-primary-color-700/40 bg-primary-color-800/40 cursor-pointer relative z-5 w-full rounded-xl text-primary-color-200 px-5"
                    >
                      <AccordionTrigger className="py-3" hideIcon>
                        <h1 className="text-xs">Press de banca</h1>
                        <Badge className="h-5 min-w-10 rounded-full px-2 font-mono tabular-nums bg-primary-color-700 hover:bg-primary-color-700">
                          3 x 8
                        </Badge>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-xs flex gap-1 items-center">
                            <Clock size={13} className="text-tertiary-color" />
                            <span>Descanso 01:30m</span>
                          </div>
                          <div className="text-xs flex gap-1 items-center">
                            <Dumbbell
                              size={13}
                              className="text-tertiary-color"
                            />
                            <span>Mancuernas</span>
                          </div>
                          <div className="text-xs flex gap-1 items-center">
                            <BicepsFlexed
                              size={13}
                              className="text-tertiary-color"
                            />
                            <span>PR 100kg</span>
                          </div>
                          <div className="text-xs flex gap-1 items-center">
                            <Goal size={13} className="text-tertiary-color" />
                            <span>Objetivo 120kg</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="xs" className="w-full">
                            Editar
                          </Button>
                          <Button
                            size="xs"
                            className="w-full bg-secondary-color-800 hover:bg-secondary-color-800/80 text-primary-color-300"
                            onClick={() => openDrawerForWorkout("delete")}
                          >
                            Eliminar ejercicio
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex flex-col gap-2">
                    <Button
                      className="w-full"
                      variant="dashed"
                      onClick={() => openDrawerForWorkout("add")}
                    >
                      Añadir ejercicio
                    </Button>
                    <Button
                      className="w-full bg-secondary-color-800 hover:bg-secondary-color-800/80 text-primary-color-300"
                      onClick={() => openDrawerForDay("delete")}
                    >
                      Eliminar dia
                    </Button>
                  </div>
                </div>
                {/* RoutineItem */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
            className="w-full mt-4"
            variant="dashed"
            onClick={() => openDrawerForDay("add")}
          >
            <Plus />
            Añadir un dia nuevo
          </Button>
        </div>
      </div>

      <Drawer>
        <DrawerTrigger ref={drawerForWorkoutButtonRef}></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription>
              {drawerMode === "add" && <WorkoutAddForm />}
              {drawerMode === "update" && <WorkoutUpdateForm />}
              {drawerMode === "delete" && (
                <Form className="max-w-md mx-auto mt-5">
                  <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
                    ¿Seguro de querer eliminar este ejercicio?
                    <br />
                    <div className="text-sm normal-case text-primary-color-400">
                      Se eliminara el ejercicio del dia push
                    </div>
                  </h1>
                  <div className="mt-10 text-primary-color-300 text-center flex flex-col gap-2">
                    <Label className="text-lg">Press banca</Label>
                  </div>
                  <div className="mt-10 space-y-2">
                    <Button className="bg-red-600 hover:bg-red-600/80 w-full">
                      Eliminar
                    </Button>
                    <DrawerClose asChild>
                      <Button className="bg-primary-color-700 text-primary-color-300 hover:bg-primary-color-700/70 w-full">
                        Cancelar
                      </Button>
                    </DrawerClose>
                  </div>
                </Form>
              )}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger ref={drawerForDayButtonRef}></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription>
              <Form className="max-w-md mx-auto mt-5">
                <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
                  {drawerMode == "add"
                    ? "Añade un nuevo dia a tu rutina"
                    : "¿Seguro de querer eliminar este dia?"}
                  <br />
                  <div className="text-sm normal-case text-primary-color-400">
                    {drawerMode == "add"
                      ? "Solo puedes tener 7 dias como máximo"
                      : "Tambien se eliminarán los ejercicios de este dia"}
                  </div>
                </h1>
                <div className="mt-10 text-primary-color-300 text-center flex flex-col gap-2">
                  {drawerMode == "add" ? (
                    <>
                      <Input
                        id="day-name"
                        className="text-primary-color-300 text-sm text-center"
                        name="day-name"
                        placeholder="Ej. Pull Day"
                      />
                      <Label className="text-md">Nombre del nuevo dia</Label>
                    </>
                  ) : (
                    <Label className="text-lg">Dia de pecho</Label>
                  )}
                </div>
                <div className="mt-10 space-y-2">
                  <Button
                    className={`w-full ${
                      drawerMode == "add"
                        ? ""
                        : "bg-red-600 hover:bg-red-600/80"
                    }`}
                  >
                    {drawerMode == "add" ? "Añadir" : "Eliminar"}
                  </Button>
                  <DrawerClose asChild>
                    <Button className="bg-primary-color-700 text-primary-color-300 hover:bg-primary-color-700/70 w-full">
                      Cancelar
                    </Button>
                  </DrawerClose>
                </div>
              </Form>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function getMetaData(t: TFunction) {
  return {
    title: t("title-routine-details-page") as string,
    description: t("description-routine-details-page") as string,
    content: t("content-routine-details-page") as string,
  };
}
