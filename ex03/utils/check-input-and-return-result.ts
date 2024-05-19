interface CheckInputType{
    input : string;
    oldInput : string;
    result : string;
}

interface returnType{
    input : string;
    result : string;
}

export const checkInputAndReturnResult = (props : CheckInputType): returnType =>  {
    if(props.oldInput == '0')
        return {input : props.input, result : props.result};
    else if(props.input == 'C')
        return {input : props.oldInput.slice(0, -1), result : props.result} ;
    else
        return {input : props.oldInput + props.input, result : props.result} ;
}