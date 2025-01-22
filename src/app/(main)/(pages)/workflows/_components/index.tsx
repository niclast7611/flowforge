import React from "react";
import WorkFlow from "./workflow";

const WorkFlows = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <WorkFlow
          description="Creating a test workflow"
          id="dceerververve"
          name="Automation Workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default WorkFlows;
