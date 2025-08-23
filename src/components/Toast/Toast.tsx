import React, { type ReactNode } from "react";
import { StyledToast, StyledToastTitle, StyledToastDescription, StyledToastActions } from "./Toast.styles";

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: "regular" | "danger" | "warning" | "success";
    isOpen: boolean,
    closeAction?: ()=> void;
    autoClose?: boolean;
    enableClose?: boolean;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}

interface ToastTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

interface ToastDescProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

interface ToastActionsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    position: "top-right" | "bottom-left" 
}

export const ToastTitle: React.FC<ToastTitleProps> = ({
    children,
}) => {

    return (
        <StyledToastTitle className="title">
            {children}
        </StyledToastTitle>
    )
}

export const ToastDescription: React.FC<ToastDescProps> = ({
    children,
}) => {

    return (
        <StyledToastDescription className="description">
            {children}
        </StyledToastDescription>
    )
}

export const ToastActions: React.FC<ToastActionsProps> = ({
    children,
    position="top-right"
}) => {

    return (
        <StyledToastActions className={`actions ${position}`}>
            {children}
        </StyledToastActions>
    )
}

export const Toast: React.FC<ToastProps> = ({
    children,
    variant = "regular",
    autoClose = true,
    enableClose = false,
    position = "bottom-right" ,
    isOpen=false
}) => {
    const portalContainer: HTMLElement | null = document.getElementById("portal");

    return (
        <>
            {
                (portalContainer && isOpen) &&

                        <StyledToast className={`toast ${variant} ${position} popup`}>
                            {children}
                        </StyledToast>
            }
        </>
        
    )
}

