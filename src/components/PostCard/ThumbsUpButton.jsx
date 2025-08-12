"use client";

import { useFormStatus } from "react-dom";
import { IconButton } from "@/components/IconButton";
import { ThumbsUp } from "@/components/icons/ThumbsUp";
import { Spinner } from "@/components/Spinner";

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus();

  return (
    <IconButton disabled={pending}>
      {pending ? <Spinner /> : <ThumbsUp />}
    </IconButton>
  );
};
