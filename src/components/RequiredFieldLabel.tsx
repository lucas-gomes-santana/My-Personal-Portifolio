import { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>   

function RequiredField({children}: LabelProps) {
    return(
        <label style={{ color: "red" }} className=""> {children}</label>
    );
}

export default RequiredField;