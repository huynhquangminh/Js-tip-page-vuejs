import { extend } from 'vee-validate'
import {required, email } from 'vee-validate/dist/rules'

extend('required', {
    ...required,
    message: '{_field_} is not required'
})

extend('email', {
    ...email,
    message: '{_field_} is invalid'
})
