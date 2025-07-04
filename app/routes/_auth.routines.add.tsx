import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { TFunction } from "i18next";
import RoutineAddForm from "~/components/routines/RoutineAddForm";
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

  return json({ metaData });
}

export default function AddRoutinePage() {
  return (
    <div className="max-w-md mx-auto">
      <RoutineAddForm />
    </div>
  );
}

function getMetaData(t: TFunction) {
  return {
    title: t("title-add-routine-page") as string,
    description: t("description-add-routine-page") as string,
    content: t("content-add-routine-page") as string,
  };
}
