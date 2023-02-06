import type { Applicant} from "~/models/applicant.server";
import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";

export const Review: React.FC = ({ applicant }) => {
  console.log(applicant.id);
  const fetcher = useFetcher();

  useEffect(() => {
    console.log('OK');
  }, [fetcher]);
  
  return (
    <div>
      OK
    </div>
  );
}