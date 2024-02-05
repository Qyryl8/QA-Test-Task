import { actionLogin } from "./loginPageObj"

describe(
    'Login using valid credentials', () => {
        it('Login to my account', () => {
            actionLogin.submitLogin()
        })
    }
)