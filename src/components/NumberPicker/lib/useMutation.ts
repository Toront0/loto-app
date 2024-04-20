import { useState } from "react";
import { sleep } from "../api/checkResults";

type UseMutation = {
  mutationFn: () => Promise<Response>;
  refetchCount?: number;
  onError?: (err: unknown) => void;
  refetcher?: (res: Response) => boolean;
};

export const useMutation = (opts: UseMutation) => {
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async () => {
    try {
      setIsLoading(true);

      for (let i = 0; i < (opts.refetchCount || 3); i++) {
        const res = await opts.mutationFn();

        if (res.status !== 200 && i === (opts.refetchCount || 3) - 1) {
          throw Error("Status was not correct");
        }

        await sleep(2000);
      }
    } catch (error) {
      opts.onError && opts.onError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading };
};
