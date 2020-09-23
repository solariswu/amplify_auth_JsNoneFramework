The tutorial 
https://docs.amplify.aws/start/getting-started/installation/q/integration/js

is missing example of how to use Amplify JS Auth component into project without any Javascript frameworks.

This example project is using node and webpack only. It does not use any framework such as React/Vue/Angular.

### Prerequisites
https://docs.amplify.aws/start/getting-started/installation/q/integration/js#option-2-follow-the-instructions

git clone https://github.com/solariswu/amplify_auth_JsNoneFramework.git

$ cd amplify_auth_JsNoneFramework

$ npm install

$ amplify init
$ amplify add auth
 Do you want to use the default authentication and security configuration? Defau
lt configuration
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.

$ amplify push
$ npm start

then you can access the sign-in page on http://localhost:8080
