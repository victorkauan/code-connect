"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { ArrowForward } from "@/components/icons/ArrowForward";

export const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <Spinner />
      ) : (
        <>
          {children} <ArrowForward />
        </>
      )}
    </Button>
  );
};
