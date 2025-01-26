"use client";
import WorkFlowForm from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useBilling } from "@/providers/ billing-provider";
import { useModal } from "@/providers/modal-providers";
import { Plus } from "lucide-react";
import React from "react";

const WorkflowButton = () => {
  const { setOpen, setClose } = useModal();
  const { credits } = useBilling();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title={"Create a Workflow Automation"}
        subheading={"Workflows are a powerful that help you automate tasks."}
      >
        <WorkFlowForm />
      </CustomModal>
    );
  };

  return (
    <Button
      size={"icon"}
      {...(credits !== "0" ? { onClick: handleClick } : { disabled: true })}
    >
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
