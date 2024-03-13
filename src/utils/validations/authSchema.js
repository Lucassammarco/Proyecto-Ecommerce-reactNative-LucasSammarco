import {object, string, ref} from "yup"

export const registerSchema = object().shape({
   
    confirmPassword:string().required("Es necesario confirmar la contraseña").oneOf([ref("password")],"El password no coincide"),
    password:string().required("La contraseña es requerida").min(8,"se necesitan minimo 8 caracteres"),
    email: string().required("El email es requerido").email("El mail ingresadobno es Valido")
})

export const loginSchema = object().shape({
   
    password:string().required("La contraseña es requerida").min(8,"se necesitan minimo 8 caracteres"),
    email: string().required("El email es requerido").email("El mail ingresadobno es Valido")
})