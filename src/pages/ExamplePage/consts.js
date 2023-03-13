const selectOptions = [
  { key: "one", value: 1, text: "one" },
  { key: "two", value: 2, text: "two" }
];

const arrayOfTwenty = Array(20)
  .fill(undefined)
  .map((_, i) => i + 1);

export { selectOptions, arrayOfTwenty };
