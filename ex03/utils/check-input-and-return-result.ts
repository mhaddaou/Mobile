let check: boolean = false;
let sampleRegEx: RegExp = /(?:^|[+\-*/])\d*\.\d*$/;
const operators = ["+", "-", "/", "x"];
let clickEquation: boolean = false;

import {
  ClearInput,
  ReturnType,
  CheckInputType,
  RemoveLastCharType,
  CheckDoubleZeroType,
} from "./interfaces";

const clearInput = ({ result }: ClearInput): ReturnType => {
  return { input: "0", result: "0" };
};

const removeLastChar = ({
  oldInput,
  result,
}: RemoveLastCharType): ReturnType => {
  if (clickEquation) {
    clickEquation = false;
    return { input: "0", result };
  }
  if (oldInput.length == 1) return { input: "0", result };
  return { input: oldInput.slice(0, -1), result };
};

const checkDoubleZero = ({
  input,
  oldInput,
  result,
}: CheckDoubleZeroType): ReturnType => {
  if (clickEquation) {
    clickEquation = false;
    return {
      input: "0",
      result,
    };
  }
  if (oldInput.length === 1 && oldInput === "0")
    return { input: oldInput, result };
  return {
    input: oldInput.concat(input),
    result,
  };
};

const calculate = (input: string): ReturnType => {
  clickEquation = true;
  const cal = input.replace("x", "*");
  return {
    input,
    result: eval(cal),
  };
};

const setVariables = (props: CheckInputType): ReturnType => {
  if (
    operators.includes(props.input) &&
    props.oldInput.length == 1 &&
    props.oldInput == "0"
  ) {
    return { input: "0" + props.input, result: props.result };
  }
  if (clickEquation && operators.includes(props.input)) {
    clickEquation = false;
    return { input: props.result + props.input, result: props.result };
  }
  if (clickEquation && !operators.includes(props.input)) {
    clickEquation = false;
    return { input: props.input, result: props.result };
  }

  const lstChar = props.oldInput[props.oldInput.length - 1];

  if (props.input == ".")
    return {
      input: sampleRegEx.test(props.oldInput)
        ? props.oldInput
        : props.oldInput.concat(props.input),
      result: props.result,
    };

  if (operators.includes(props.input) && operators.includes(lstChar)) {
    let input: string = "";

    if (props.input == "-") {
      if (lstChar === "x" || lstChar === "/") {
        input = props.oldInput.concat(props.input);
      } else if (lstChar === "-") {
        input = props.oldInput.slice(0, -1).concat("+");
      } else if (lstChar === "+") {
        input = props.oldInput.slice(0, -1).concat(props.input);
      } else {
        input = props.oldInput.slice(0, -1).concat(props.input);
      }
    } else {
      input = props.oldInput.slice(0, -1).concat(props.input);
    }
    return { input, result: props.result };
  }

  return {
    input: props.oldInput == "0" ? props.input : props.oldInput + props.input,
    result: props.result,
  };
};

export const checkInputAndReturnResult = (
  props: CheckInputType
): ReturnType => {
  // props = checkAfterEquation(props);
  if (operators.includes(props.input) && !props.oldInput.length)
    props.oldInput.concat("0");

  switch (props.input) {
    case "=":
      return calculate(props.oldInput);
    case "AC":
      return clearInput({ input: props.input, result: props.result });
    case "C":
      return removeLastChar({ oldInput: props.oldInput, result: props.result });
    case "00":
      return checkDoubleZero(props);
    default:
      return setVariables(props);
  }
};
