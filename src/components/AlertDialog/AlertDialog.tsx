import { type ReactNode } from "react";
import { Button } from "../Button/Button";
import { createPortal } from "react-dom";
import { StylesAlertDialog, StyledAlertDialogHeader, StyledAlertDialogBody, StyledAlertDialogActions } from "./AlertDialog.styles";

interface AlertDialogProps {
    isOpen: boolean;
    children: ReactNode
}

interface AlertDialogActionsPropsWithChild {
    children: ReactNode;
    cancelAction?: never;
    cancelText?: never;
    yesAction?: never;
    yesText?: never;
}

interface AlertDialogActionsPropsWithoutChild {
    children?: never;
    cancelAction: () => void;
    cancelText?: string;
    yesAction: () => void;
    yesText?: string;
}

type AlertDialogActionsProps = AlertDialogActionsPropsWithChild | AlertDialogActionsPropsWithoutChild;

export const AlertDialog = ({
    isOpen=false,
    children
}:AlertDialogProps) => {
    const portalContainer: HTMLElement | null = document.getElementById("portal");
    console.log(portalContainer, isOpen)
    return (
        <>
            {(isOpen && portalContainer) && createPortal(<StylesAlertDialog className="alert-dialog">
                {children}
            </StylesAlertDialog>, portalContainer)}
        </>
    )
}

export const AlertDialogHeader = ({
    children
}: { children: ReactNode}) => {
    return (
        <StyledAlertDialogHeader>
            {children}
        </StyledAlertDialogHeader>
    )
}

export const AlertDialogBody = ({
    children
}: { children: ReactNode}) => {
    return (
        <StyledAlertDialogBody>
            {children}
        </StyledAlertDialogBody>
    )
}

export const AlertDialogActions = ({
    children,
    cancelAction,
    cancelText = "Cancel",
    yesAction,
    yesText = "Yes, Proceed",
}: AlertDialogActionsProps) => {
    return (
        <StyledAlertDialogActions>
            {children ? 
                children :
                <>
                    <Button variant="outline" onClick={cancelAction}>{cancelText}</Button>
                    <Button variant="invert" onClick={yesAction}>{yesText}</Button>    
                </> }
            
        </StyledAlertDialogActions>
    )
}