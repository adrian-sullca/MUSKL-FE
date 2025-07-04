import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  BicepsFlexed,
  Clock,
  Dumbbell,
  Goal,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { Form } from "@remix-run/react";
import { Textarea } from "../ui/textarea";

export default function WorkoutAddForm() {
  const [data, setData] = useState({
    muscleGroupName: "",
    workoutName: "",
    workoutNotes: "",
    gymEquipmentName: "",
    setsNumber: 3,
    repsNumber: 8,
    restTime: 15,
  });
  const handleChange = (field: string, value: string | number) => {
    if (field === "restTime") {
      const num = Number(value);
      if (num < 0) return;
    }

    if (["repsNumber", "setsNumber"].includes(field)) {
      if (value !== "" && Number(value) <= 0) {
        return;
      }
    }

    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [currentStep, setCurrentStep] = useState(1);
  const formSteps = [
    { num: 1, name: "Musculo" },
    { num: 2, name: "Ejercicio" },
    { num: 3, name: "Equipo" },
    { num: 4, name: "Series" },
    { num: 5, name: "Confirmación" },
  ];
  const progressValue = ((currentStep - 1) / (formSteps.length - 1)) * 100;

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, formSteps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Step 1
  const muscleGroups = [
    {
      id: 1,
      name: "Pecho",
    },
    {
      id: 2,
      name: "Espalda",
    },
    {
      id: 3,
      name: "Hombro",
    },
    {
      id: 4,
      name: "Biceps",
    },
    {
      id: 5,
      name: "Triceps",
    },
    {
      id: 6,
      name: "Gluteos",
    },
    {
      id: 7,
      name: "Cuadriceps",
    },
    {
      id: 8,
      name: "Isquios",
    },
    {
      id: 9,
      name: "Pantorrilla",
    },
    {
      id: 10,
      name: "Trapecios",
    },
    {
      id: 11,
      name: "Antebrazos",
    },
    {
      id: 12,
      name: "Abdominales",
    },
    {
      id: 13,
      name: "Otros",
    },
  ];

  // Step 3
  const gymEquipment = [
    {
      id: 1,
      name: "Barra",
    },
    {
      id: 2,
      name: "Mancuernas",
    },
    {
      id: 3,
      name: "Poleas",
    },
    {
      id: 4,
      name: "Maquina",
    },
    {
      id: 5,
      name: "Peso corporal",
    },
    {
      id: 6,
      name: "Otros",
    },
  ];

  // Step 4
  const updateRestTimeBy15Seconds = (operator: string) => {
    if (operator === "subtract") {
      handleChange("restTime", Number(data.restTime) - 15);
      if (data.restTime < 15) {
        handleChange("restTime", 0);
      }
    } else {
      handleChange("restTime", Number(data.restTime) + 15);
    }
  };

  const renderStep1 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        Un nuevo ejercicio en la rutina
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          Elige el grupo muscular a trabajar
        </div>
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {muscleGroups.map((muscleGroup, index) => {
          const isLast = index === muscleGroups.length - 1;
          const isRowIncomplete = muscleGroups.length % 3 !== 0;
          const shouldCenter = isLast && isRowIncomplete;

          return (
            <button
              key={muscleGroup.id}
              className={`cursor-pointer transition-all ${
                data.muscleGroupName === muscleGroup.name
                  ? "ring-2 ring-tertiary-color"
                  : ""
              } bg-gradient-to-br from-secondary-color to-primary-color border border-secondary-color-800 rounded-lg text-sm p-3 space-y-1 ${
                shouldCenter
                  ? "col-span-full"
                  : ""
              }`}
              onClick={() => {
                handleChange("muscleGroupName", muscleGroup.name);
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-2 text-center">
                  <span className="text-sm text-primary-color-200 font-semibold">
                    {muscleGroup.name}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        Elige el ejercicio!
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          Estos son ejercicios por el grupo muscular escogido
        </div>
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-10"></div>
      <div className="text-primary-color-300 text-center flex flex-col gap-2">
        <Label className="text-md">Nombre del ejercicio</Label>
        <Input
          value={data.workoutName}
          onChange={(e) => handleChange("workoutName", e.target.value)}
          className="mx-auto text-md text-center"
        />
      </div>
      <div className="flex flex-col gap-2 text-center mt-5 text-primary-color-300">
        <Label className="text-md">Notas</Label>
        <Textarea
          name="description"
          onChange={(e) => handleChange("workoutNotes", e.target.value)}
          className="text-center text-md text-md"
          rows={3}
          value={data.workoutNotes}
          placeholder="Ej. Asiento del banco nivel 2 (Opcional)"
        />
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        ¿Que usaras?
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          Con esto determinaremos si eres más de uno u otro!
        </div>
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {gymEquipment.map((gymEquipment, index) => {
          const isLast = index === muscleGroups.length - 1;
          const isRowIncomplete = muscleGroups.length % 3 !== 0;
          const shouldCenter = isLast && isRowIncomplete;

          return (
            <button
              key={gymEquipment.id}
              className={`cursor-pointer transition-all ${
                data.gymEquipmentName === gymEquipment.name
                  ? "ring-2 ring-tertiary-color"
                  : ""
              } bg-gradient-to-br from-secondary-color to-primary-color border border-secondary-color-800 rounded-lg text-sm p-3 space-y-1 ${
                shouldCenter
                  ? "col-span-full justify-self-center px-[46px]"
                  : ""
              }`}
              onClick={() => {
                handleChange("gymEquipmentName", gymEquipment.name);
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-2 text-center">
                  <span className="text-sm text-primary-color-200 font-semibold">
                    {gymEquipment.name}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        ¿Y las series?
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          Indica el numero de series y repeticiones
        </div>
      </h1>
      <div className="flex flex-col mt-10 gap-3">
        <div className="flex items-center gap-4 text-primary-color-300 justify-center">
          <div className="flex flex-col items-center gap-1">
            <Input
              className="w-[50px] no-spinner text-lg tabular-nums font-mono text-center"
              placeholder="3"
              type="number"
              value={data.setsNumber}
              onChange={(e) => handleChange("setsNumber", e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "-") e.preventDefault();
              }}
            />
            <Label className="text-sm">series</Label>
          </div>
          <X
            size={20}
            className="text-tertiary-color transform -translate-y-3"
          />
          <div className="flex flex-col items-center gap-1">
            <Input
              className="w-[50px] no-spinner text-lg tabular-nums font-mono text-center"
              placeholder="8"
              type="number"
              value={data.repsNumber}
              onChange={(e) => handleChange("repsNumber", e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "-") e.preventDefault();
              }}
            />
            <Label className="text-sm">reps</Label>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2 mt-10">
            <div className="flex gap-3">
              <Button
                className="rounded-full bg-secondary-color-800/50 hover:bg-secondary-color-800/50 border border-primary-color-700 w-9 h-9 flex items-center justify-center"
                disabled={data.restTime == 0}
                onClick={() => updateRestTimeBy15Seconds("subtract")}
              >
                <Minus />
              </Button>
              <Input
                className="w-[60px] no-spinner text-lg tabular-nums font-mono text-center text-primary-color-300"
                placeholder="15"
                type="number"
                value={data.restTime}
                onChange={(e) => handleChange("restTime", e.target.value)}
                onKeyDown={(e) => {
                  if (e.key == "-") e.preventDefault();
                }}
              />
              <Button
                className="rounded-full bg-primary-color-700/90 hover:bg-primary-color-700/90 border border-primary-color-700 w-9 h-9 flex items-center justify-center"
                onClick={() => updateRestTimeBy15Seconds("add")}
              >
                <Plus />
              </Button>
            </div>
            <Label className="text-sm text-primary-color-300 text-center">
              Tiempo de descanso
              <br />
              <span className="text-sm text-primary-color-400 italic">
                (Segundos)
              </span>
            </Label>
          </div>
        </div>
      </div>
    </>
  );

  const renderStep5 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        Resumen del ejercicio
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          Confirma los datos para crear el ejercicio
        </div>
      </h1>
      <div className="border border-primary-color-700/40 bg-primary-color-800/40 w-full rounded-xl text-primary-color-200 py-5 px-5 mt-10">
        <div className="flex justify-between">
          <h1 className="text-sm">Press de banca</h1>
          <Badge className="h-5 min-w-10 rounded-full px-2 font-mono tabular-nums bg-primary-color-700 hover:bg-primary-color-700">
            3 x 8
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-1 mt-3">
          <div className="text-sm flex gap-1 items-center">
            <Clock size={13} className="text-tertiary-color" />
            <span>
              {data.restTime}s ({formatSecondsToMinutes(data.restTime)}m)
            </span>
          </div>
          <div className="text-sm flex gap-1 items-center">
            <Dumbbell size={13} className="text-tertiary-color" />
            <span>{data.gymEquipmentName}</span>
          </div>
          <div className="text-sm flex gap-1 items-center">
            <BicepsFlexed size={13} className="text-tertiary-color" />
            <span>{data.muscleGroupName}</span>
          </div>
          <div className="text-sm flex gap-1 items-center">
            <Goal size={13} className="text-tertiary-color" />
            <span>Objetivo 120kg</span>
          </div>
        </div>
      </div>
    </>
  );

  const formatSecondsToMinutes = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(secs).padStart(2, "0");

    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto gap-6 min-h-[580px] mt-7">
      {/* Barra de progreso */}
      <div className="relative h-10">
        <div className="absolute top-1/2 left-0 w-full px-14 -translate-y-1/2 z-0">
          <Progress
            value={progressValue}
            className="h-1 bg-primary-color-700"
          />
        </div>

        <div className="relative z-10 flex gap-3 justify-around">
          {formSteps.map((step) => (
            <button
              key={step.num}
              disabled={
                (currentStep === 1 && data.muscleGroupName.trim() === "") ||
                (currentStep === 2 && data.workoutName.trim() === "") ||
                (currentStep === 3 && data.gymEquipmentName.trim() === "")
              }
              onClick={() => setCurrentStep(step.num)}
              className="flex flex-col items-center gap-2"
            >
              <Badge
                className={`h-8 w-8 rounded-full flex justify-center items-center font-mono text-md
                ${
                  currentStep >= step.num
                    ? "bg-tertiary-color hover:bg-tertiary-color"
                    : "bg-primary-color-700 hover:bg-primary-color-700"
                }
              `}
              >
                {step.num}
              </Badge>
              <span
                className={`text-xs ${
                  currentStep >= step.num
                    ? "text-tertiary-color"
                    : "text-primary-color-500"
                }`}
              >
                {step.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Contenido del paso */}
      <div className="flex-grow mt-10 px-3">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
        {currentStep === 5 && renderStep5()}
      </div>

      {/* Botones navegación */}
      <Form method="post">
        <input
          type="hidden"
          name="muscleGroupName"
          value={data.muscleGroupName}
        />
        <input type="hidden" name="workoutName" value={data.workoutName} />
        <input
          type="hidden"
          name="gymEquipmentName"
          value={data.gymEquipmentName}
        />
        <input type="hidden" name="restTime" value={data.setsNumber} />
        <input type="hidden" name="restTime" value={data.repsNumber} />
        <input type="hidden" name="restTime" value={data.restTime} />

        <div className="flex justify-evenly">
          <Button
            onClick={prevStep}
            type="button"
            disabled={currentStep === 1}
            className="bg-primary-color-700 hover:bg-primary-color-700"
          >
            <ArrowLeft />
          </Button>
          <Button
            onClick={(e) => {
              if (currentStep === formSteps.length) return;
              e.preventDefault();
              nextStep();
            }}
            type={currentStep == formSteps.length ? "submit" : "button"}
            disabled={
              (currentStep === 1 && data.muscleGroupName.trim() === "") ||
              (currentStep === 2 && data.workoutName.trim() === "") ||
              (currentStep === 3 && data.gymEquipmentName.trim() === "") ||
              (currentStep === 4 && data.setsNumber == 0) ||
              data.repsNumber == 0
            }
            className={`${
              currentStep == formSteps.length
                ? ""
                : "bg-primary-color-700 hover:bg-primary-color-700 "
            }`}
          >
            {currentStep == formSteps.length ? "Crear" : <ArrowRight />}
          </Button>
        </div>
      </Form>
    </div>
  );
}
