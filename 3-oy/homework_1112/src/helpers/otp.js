import { generate } from "otp-generator";

export const otpGenerate = () =>{
    return generate(6, {upperCaseAlphabets: false, specialChars: false})
}