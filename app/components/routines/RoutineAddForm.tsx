import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import { Textarea } from "~/components/ui/textarea";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Form } from "@remix-run/react";

export default function RoutineAddForm() {
  const [data, setData] = useState({
    title: "",
    description: "",
    objective: "",
    restTime: 0,
    days: "",
  });
  const handleChange = (field: string, value: string | number) => {
    if (field === "days") {
      const num = Number(value);
      if (num > 7 || num < 0) return;
    }

    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [currentStep, setCurrentStep] = useState(1);
  const formSteps = [
    { num: 1, name: "Descripción" },
    { num: 2, name: "Objetivo" },
    { num: 3, name: "Distribución" },
    { num: 4, name: "Confirmación" },
  ];
  const progressValue = ((currentStep - 1) / (formSteps.length - 1)) * 100;

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, formSteps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Step 2
  const trainingObjectives = [
    {
      id: 1,
      name: "Fuerza",
      restTime: 270,
      toolTipText:
        "Según estudios científicos, los entrenamientos de fuerza requieren descansos entre 4 y 5 minutos.",
    },
    {
      id: 2,
      name: "Hipertrofia",
      restTime: 150,
      oolTipText:
        "Según estudios científicos para estimular la hipertrofia muscular, se recomienda descansar entre 1.5 y 3 minutos entre series.",
    },
    {
      id: 3,
      name: "Resistencia",
      restTime: 45,
      toolTipText:
        "El entrenamiento de resistencia muscular se beneficia de descansos cortos de 30 a 60 segundos.",
    },
    {
      id: 4,
      name: "Salud",
      restTime: 60,
      toolTipText:
        "Los entrenamientos orientados a la salud general suelen incluir descansos moderados de alrededor de 1 minuto, buscando un equilibrio total.",
    },
  ];

  const renderStep1 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        Describe tu nueva rutina!
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          (Lo podras modificar luego)
        </div>
      </h1>
      <div className="text-primary-color-300 space-y-5 mt-10">
        <div className="flex flex-col gap-2 text-center">
          <Label className="text-md text-primary-color-300">Titulo</Label>
          <Input
            name="title"
            onChange={(e) => handleChange("title", e.target.value)}
            className="text-center text-md"
            value={data.title}
            placeholder="Ej: Arnold Split"
          />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <Label className="text-md text-primary-color-300">Descripción</Label>
          <Textarea
            name="description"
            onChange={(e) => handleChange("description", e.target.value)}
            className="text-center text-md"
            rows={3}
            value={data.description}
            placeholder="Descripción para tu rutina nueva (Opcional)"
          />
        </div>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        ¿Cuál es tu objetivo?
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          (Asi determinaremos tus minutos de descanso)
        </div>
      </h1>
      <div className="text-primary-color-300 grid grid-cols-2 gap-4 mt-10">
        {trainingObjectives.map((objective) => (
          <button
            key={objective.id}
            className={`cursor-pointer transition-all ${
              data.objective === objective.name
                ? "ring-2 ring-tertiary-color"
                : ""
            } bg-gradient-to-br from-secondary-color to-primary-color border border-secondary-color-800 rounded-lg text-sm p-3 space-y-1`}
            onClick={() => {
              handleChange("objective", objective.name);
              handleChange("restTime", objective.restTime);
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-2 text-center">
                <span className="text-sm text-primary-color-200 font-semibold">
                  {objective.name}
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-1 tabular-nums items-center">
              <Clock size={14} className="text-tertiary-color" />
              {objective.restTime}s
            </div>
          </button>
        ))}
      </div>
      <div className="mt-8 text-primary-color-300 text-center flex flex-col gap-2">
        <Input
          type="number"
          value={data.restTime}
          onChange={(e) => handleChange("restTime", e.target.value)}
          className="no-spinner w-[60px] mx-auto font-mono tabular-nums text-lg text-center"
        />
        <Label className="text-md">
          Tiempo de descanso
          <br />
          <span className="text-sm text-primary-color-400 italic">
            (Segundos)
          </span>
        </Label>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        ¿Cuántos dias entrenaras?
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          (Lo podras modificar luego)
        </div>
      </h1>
      <div className="text-primary-color-300 mt-10">
        <div className="flex flex-col items-center gap-2 justify-center">
          <Input
            name="days"
            onChange={(e) => handleChange("days", e.target.value)}
            value={data.days}
            className="w-[50px] no-spinner text-lg tabular-nums font-mono text-center"
            max={7}
            type="number"
            placeholder="6"
          />
          <Label className="text-md text-primary-color-300">Dias</Label>
        </div>
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      <h1 className="text-center text-lg text-primary-color-200 font-semibold uppercase italic">
        Resumen de tu rutina
        <br />
        <div className="text-sm normal-case text-primary-color-400">
          (Confirma los datos para crear la rutina)
        </div>
      </h1>
      <div className="text-primary-color-300 space-y-2 mt-10 p-8 bg-gradient-to-br from-secondary-color to-primary-color before:bg-gradient-to-br before:from-cyan-400/10 before:to-cyan-400/5 before:opacity-0 before:transition-opacity before:duration-500 border border-secondary-color-800 rounded-lg">
        <div className="grid grid-cols-2">
          <Label className="text-sm text-primary-color-200">Titulo:</Label>
          <Label className="text-sm text-primary-color-400">{data.title}</Label>
        </div>
        <div className="grid grid-cols-2">
          <Label className="text-sm text-primary-color-200">Descripción:</Label>
          <Label className="text-sm text-primary-color-400 break-words">
            {data.description.trim() == "" ? "-" : data.description}
          </Label>
        </div>
        <div className="grid grid-cols-2">
          <Label className="text-sm text-primary-color-200">Objetivo:</Label>
          <Label className="text-sm text-primary-color-400">
            {data.objective}
          </Label>
        </div>
        <div className="grid grid-cols-2">
          <Label className="text-sm text-primary-color-200">Descanso:</Label>
          <Label className="text-sm text-primary-color-400">
            {data.restTime}s ({formatSecondsToMinutes(data.restTime)}m)
          </Label>
        </div>
        <div className="grid grid-cols-2">
          <Label className="text-sm text-primary-color-200">Dias:</Label>
          <Label className="text-sm text-primary-color-400">
            {data.days} dias a la semana
          </Label>
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
    <div className="flex flex-col max-w-lg mx-auto gap-6 min-h-[580px] mt-10">
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
                (currentStep === 1 && data.title.trim() === "") ||
                (currentStep === 2 && data.objective.trim() === "") ||
                (currentStep === 3 &&
                  (data.days.trim() === "" ||
                    Number(data.days) <= 0 ||
                    Number(data.days) > 7))
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
      <div className="flex-grow pt-14 px-3">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
      </div>

      {/* Botones navegación */}
      <Form method="post">
        <input type="hidden" name="title" value={data.title} />
        <input type="hidden" name="description" value={data.description} />
        <input type="hidden" name="objective" value={data.objective} />
        <input type="hidden" name="restTime" value={data.restTime} />
        <input type="hidden" name="days" value={data.days} />

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
              (currentStep === 1 && data.title.trim() === "") ||
              (currentStep === 2 && data.objective.trim() === "") ||
              (currentStep === 3 &&
                (data.days.trim() === "" ||
                  Number(data.days) <= 0 ||
                  Number(data.days) > 7))
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
