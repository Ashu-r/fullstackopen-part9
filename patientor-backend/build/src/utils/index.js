"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const parseString = (str, field) => {
    if (!str || !isString(str)) {
        throw new Error('Incorrect or missing field: ' + field);
    }
    return str;
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing Gender: ' + gender);
    }
    return gender;
};
const toNewPatient = ({ ssn, name, dateOfBirth, gender, occupation }) => {
    const newPatient = {
        ssn: parseString(ssn, 'ssn'),
        name: parseString(name, 'name'),
        dateOfBirth: parseDate(dateOfBirth),
        gender: parseGender(gender),
        occupation: parseString(occupation, 'occupation'),
    };
    return newPatient;
};
exports.default = toNewPatient;
