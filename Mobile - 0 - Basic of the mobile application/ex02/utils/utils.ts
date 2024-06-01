const redColor = ["C", "AC"];
const WhiteColor = ["+", "-", "x", "/", "="];

const getColor = (item: string) => {
  if (redColor.includes(item)) return "text-[#b12123]";
  else if (WhiteColor.includes(item)) return "text-[#dee3e6]";
  else return "text-[#263238]";
};

export { getColor };



