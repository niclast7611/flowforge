import React from "react";
import WorkFlow from "./workflow";
import { onGetWorkflows } from "../editor/[editorId]/_actions/workflow-connections";

const WorkFlows = async () => {
  const workflows = await onGetWorkflows();

  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        {workflows?.length ? (
          workflows.map((workflow) => (
            <WorkFlow key={workflow.id} {...workflow} />
          ))
        ) : (
          <div className="mt-28 flex text-muted-foreground items-center justify-center">
            No Workflows
          </div>
        )}
      </section>
    </div>
  );
};

export default WorkFlows;
