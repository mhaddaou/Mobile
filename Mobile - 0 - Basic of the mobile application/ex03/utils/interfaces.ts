interface ClearInput{
    input : string;
    result : string;
}

interface RemoveLastCharType {
    oldInput : string,
    result : string,
}


interface ReturnType extends ClearInput {}

interface CheckInputType extends ClearInput{
    oldInput : string;
}

interface CheckDoubleZeroType extends CheckInputType{}




export  {ClearInput, ReturnType, CheckInputType, RemoveLastCharType, CheckDoubleZeroType};



