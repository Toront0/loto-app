export const sleep = (delay: number = 1000) =>
  new Promise((res) => setTimeout(res, delay));

type SelectedNumbers = {
  firstField: number[];
  secondField: number[];
};

type MakeApiRequest = {
  selectedNumbers: SelectedNumbers;
  isTicketWon: boolean;
};

export const makeApiRequest = async (req: MakeApiRequest) => {
  const res201 = await fetch("	https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(req)
  });

  return res201;
};
