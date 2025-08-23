import React, { type ReactNode } from "react";
import SuccessIcon from "../../assets/icons/success.svg";
import WarningIcon from "../../assets/icons/warning.svg";
import DangerIcon from "../../assets/icons/danger.svg";
import Regularicon from "../../assets/icons/regular.svg";
import closeIcon from "../../assets/icons/close.svg";
import { StyledAlert, StyledTitle } from "./Alert.styles";

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
        <StyledAlert style={{top: rest.topPosition}} className={`${variant} popup`}>
            <div>
                <img width="15px" height="auto" src={rest.customIcon || renderIcon(variant)} alt="icon" />
            </div>
            <div>
                
                <>
                    <StyledTitle>{title}</StyledTitle>
                    {rest.children && rest.children}
                </>
                
            </div>
            {
                (enableClose && rest.closeAction) && <img width="15px" height="auto" src={closeIcon} onClick={rest.closeAction}  />
            }
        </StyledAlert>
    )
}