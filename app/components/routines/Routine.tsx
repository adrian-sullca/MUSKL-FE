import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  BicepsFlexed,
  Clock,
  Dumbbell,
  Ellipsis,
  EllipsisVertical,
  Goal,
  Repeat,
} from "lucide-react";

export default function Routine() {
  return (
    <div className="flex flex-col min-h-screen gap-3">
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
                          <Dumbbell size={13} className="text-tertiary-color" />
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
                        >
                          Eliminar ejercicio
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
                          <Dumbbell size={13} className="text-tertiary-color" />
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
                        >
                          Eliminar ejercicio
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-2">
                  <Button className="w-full" variant="dashed">
                    Añadir ejercicio
                  </Button>
                  <Button className="w-full bg-secondary-color-800 hover:bg-secondary-color-800/80 text-primary-color-300">
                    Eliminar dia
                  </Button>
                </div>
              </div>
              {/* RoutineItem */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
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
                          <Dumbbell size={13} className="text-tertiary-color" />
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
                        >
                          Eliminar ejercicio
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
                          <Dumbbell size={13} className="text-tertiary-color" />
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
                        >
                          Eliminar ejercicio
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-2">
                  <Button className="w-full" variant="dashed">
                    Añadir ejercicio
                  </Button>
                  <Button className="w-full bg-secondary-color-800 hover:bg-secondary-color-800/80 text-primary-color-300">
                    Eliminar dia
                  </Button>
                </div>
              </div>
              {/* RoutineItem */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Button className="w-full" variant="dashed">
        Añadir Día
      </Button>
    </div>
  );
}

// Elegir grupo musuclar pecho ,espalda
// Recomendar ejerciciso segun grupo musuclar elegido sino escribir uno manual,
// poner si es con mancuernas o barra, maquina, sin equipo
// Indicar numero de series y repeticiones en cada una
// Indicar objetivo

