export type ToastType = {
  id: string;
  type: "error" | "info";
  subtitle: string;
};

export type CreateToastReq = {
  type: "error" | "info";
  subtitle: string;
};
