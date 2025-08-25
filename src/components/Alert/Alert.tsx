import React, { type ReactNode } from "react";
import SuccessIcon from "../../assets/icons/success.svg";
import WarningIcon from "../../assets/icons/warning.svg";
import DangerIcon from "../../assets/icons/danger.svg";
import Regularicon from "../../assets/icons/regular.svg";
import closeIcon from "../../assets/icons/close.svg";
import { StyledAlert, StyledTitle, StyledChildren } from "./Alert.styles";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> { 
    isOpen: boolean;
    title: string;
    children?: ReactNode;
    variant?: "regular" | "success" | "warning" | "danger";
    customIcon: string;
    autoClose?: boolean;
    enableClose?: boolean;
    topPosition?: string;
    closeAction: () => void;
}

export const Alert:React.FC<AlertProps> = ({
    isOpen = false,
    title = "",
    variant = "regular",
    autoClose = true,
    enableClose = true,
    topPosition= "0px",
    ...rest
}) => {

    const renderIcon = (vr:string) => {
        switch (vr) {
            case "success":
                return SuccessIcon;
            case "warning":
                return WarningIcon;
            case "danger":
                return DangerIcon;
            default:
                return Regularicon;
        }
    }

    if (!isOpen) return null

    return (
        <StyledAlert variant={variant} style={{top: topPosition}} className={`darklet popup`}>
            <div>
                <img width="15px" height="auto" style={{marginTop: "3px"}} src={rest.customIcon || renderIcon(variant)} alt="icon" />
            </div>
            <div>
                
                <>
                    <StyledTitle variant={variant}>{title}</StyledTitle>
                    {rest.children && (
                        <StyledChildren variant={variant}>
                            {rest.children} 
                        </StyledChildren>
                    )}
                </>
                
            </div>
            {
                (enableClose && rest.closeAction) && <img width="15px" alt="close" height="auto" src={closeIcon} onClick={rest.closeAction}  />
            }
        </StyledAlert>
    )
}