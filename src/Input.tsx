import React from "react";
import styled from "styled-components";

interface IInputProps {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({ name, onChange }) => (
    <input type="text" placeholder="Name" value={name} onChange={onChange} />
);

interface IFormProps {
    onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({ children, onFormSubmit }) => (
    <form onSubmit={onFormSubmit}>{children}</form>
)