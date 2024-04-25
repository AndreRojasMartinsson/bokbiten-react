import React from "react";

export function createContext<T = unknown>(
	defaultValue?: T | undefined
): React.Context<T> {
	return React.createContext<T>(defaultValue as T);
}
