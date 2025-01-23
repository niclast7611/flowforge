import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ConnectionTypes } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  icon: string;
  title: ConnectionTypes;
  description: string;
  callback?: () => void;
  connected?: {} & any;
};

const ConnectionsCard = ({
  icon,
  title,
  description,
  callback,
  connected,
}: Props) => {
  const getRedirectUrl = (title: string) => {
    switch (title) {
      case "Discord":
        return process.env.NEXT_PUBLIC_DISCORD_REDIRECT || "#";
      case "Notion":
        return process.env.NEXT_PUBLIC_NOTION_AUTH_URL || "#";
      case "Slack":
        return process.env.NEXT_PUBLIC_SLACK_REDIRECT || "#";
      default:
        return "#";
    }
  };

  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Image
            src={icon}
            width={30}
            height={30}
            alt={title}
            className="object-contain"
          />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>

      <div className="flex flex-col items-center gap-2 p-4">
        {connected[title] ? (
          <div className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold text-white">
            Connected
          </div>
        ) : (
          <Link
            href={getRedirectUrl(title)}
            className="bg-primary rounded-lg p-2 font-bold text-primary-foreground"
          >
            Connect
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ConnectionsCard;
