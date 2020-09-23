import Amplify from "@aws-amplify/core";
import { Auth } from 'aws-amplify'; 
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Auth.configure(awsconfig)

async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('user:', user);

        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            let newPassword = prompt ('Please input your new password.');
            user.completeNewPasswordChallenge(newPassword, user.challengeParam.requiredAttributes, {
              onSuccess: function (session) {
                console.log("success "+session);
              },
              onFailure: function (err) {
                console.log('completeNewPassword failure', err);
              }
            });
        }
    } catch (error) {
        console.log('error signing in', error);
    }
}

window.signIn = signIn;
