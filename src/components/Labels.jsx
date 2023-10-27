import Check from "./check";

const Labels = ({
  setUppercase,
  setLowercase,
  setSymbol,
  setNumber,
  uppercase,
  lowercase,
  symbol,
  number,
}) => {
  const labels = [
    {
      label: "Include Uppercase Letters",
      type: "checkbox",
      name: "uppercase",
      value: uppercase,
      setValue: setUppercase,
    },
    {
      label: "Include Lowercase Letters",
      type: "checkbox",
      name: "lowercase",
      value: lowercase,
      setValue: setLowercase,
    },
    {
      label: "Include Numbers",
      type: "checkbox",
      name: "number",
      value: number,
      setValue: setNumber,
    },
    {
      label: "Include Symbols",
      type: "checkbox",
      name: "symbols",
      value: symbol,
      setValue: setSymbol,
    },
  ];
  return (
    <div>
      {labels.map((label) => (
        <div key={label.label} className="flex gap-3 p-2">
          <div className="relative flex items-center">
            <input
              className="peer checkbox"
              type="checkbox"
              name=""
              id=""
              onChange={() => {
                label.setValue(!label.value);
              }}
            />
            <div className="icon">
              <Check />
            </div>
          </div>
          <p className="text-xl">{label.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Labels;
