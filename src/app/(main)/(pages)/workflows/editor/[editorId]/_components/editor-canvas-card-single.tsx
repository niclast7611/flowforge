import { useEditor } from "@/providers/editor-provider";
import React, { useMemo } from "react";
import { Position, useNodeId } from "@xyflow/react";
import { EditorCanvasCardType } from "@/lib/types";
import EditorCanvasIconHelper from "./editor-canvas-icon-helper";
import CustomHandle from "./custom-handle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type Props = {
  data: EditorCanvasCardType;
};

const EditorCanvasCardSingle = ({ data }: Props) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />;
  }, [data]);

  return (
    <div>
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
        <CustomHandle
          type="target"
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
      <Card
        onClick={(e) => {
          e.stopPropagation();
          const val = state.editor.elements.find((el) => el.id === nodeId);
          if (val) {
            dispatch({
              type: "SELECTED_ELEMENT",
              payload: { element: val },
            });
          }
        }}
        className="relative max-w-[400px] dark:border-muted-foreground/70"
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <div>{logo}</div>
          <div>
            j<CardTitle className="text-md">{data.title}</CardTitle>
            <CardDescription>
              <p className="text-xs text-muted-foreground/50">
                <b className="text-muted-foreground/80">{nodeId}</b>
              </p>
              <p>{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>

        <Badge variant={"secondary"} className="absolute top-2 right-2">
          {data.type}
        </Badge>

        <div
          className={clsx("absolute left-3 top-4 size-2 rounded-full", {
            "bg-green-500": Math.random() > 0.6,
            "bg-orange-500": Math.random() > 0.6 && Math.random() < 0.8,
            "bg-red-500": Math.random() < 0.8,
          })}
        />

        <CustomHandle type="source" position={Position.Bottom} id="a" />
      </Card>
    </div>
  );
};

export default EditorCanvasCardSingle;
