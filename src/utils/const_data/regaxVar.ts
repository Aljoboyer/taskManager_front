export const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 

export const emailRegex: RegExp = /\S+@\S+\.\S+/;

export const nameRegex: RegExp = /^[A-Za-z\s]*$/;

export const phoneRegex: RegExp = /^\d{11}$/;

export const numberRegex: RegExp = /^[1-9][0-9]*$/