import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { TFunction } from "i18next";
import RecentSessions from "~/components/home/RecentTrainings";
import StatsOverview from "~/components/home/StatsOverview";
import UpcomingTraining from "~/components/home/UpcomingTraining";
import { UserGreeting } from "~/components/home/UserGreeting";
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

export default function HomePage() {
  return (
    <div className="space-y-5">
      <UserGreeting />
      <UpcomingTraining />
      <StatsOverview />
      <RecentSessions />
    </div>
  );
}

function getMetaData(t: TFunction) {
  return {
    title: t("title-home-page") as string,
    description: t("description-home-page") as string,
    content: t("content-home-page") as string,
  };
}
