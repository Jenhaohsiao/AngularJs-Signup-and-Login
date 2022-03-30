(function() {
    'use strict';

    angular
        .module('components')
        .service('UserObjService', UserObjService);

    UserObjService.$inject = [];

    function UserObjService() {


        var userList = [{
            _id: new Date(),
            firstName: "JenHao",
            lastName: "Hsiao",
            address: {
                lineOne: "1335 Will",
                lineTwo: "address line 2",
                cityTown: "Toronto",
                stateProvince: "ON",
                country: "canada",
                postalCode: "L4x 2s9",
            },
            email: "abc@abc.com",
            phone: 4125678900,
            phoneExt: 123,
            password: "abc"

        }];
        var userObj = null;
        var isLogin = false;
        // ================================
        this.getUserInit = getUserInit;
        this.saveUserToList = saveUserToList;
        this.setUser = setUser;
        this.getUser = getUser;
        this.isPasswordConfirmed = isPasswordConfirmed;
        this.setIsLogin = setIsLogin;
        this.getIsLogin = getIsLogin;

        ////////////////

        function getUserInit() {
            return {
                _id: new Date(),
                firstName: null,
                lastName: null,
                address: {
                    lineOne: null,
                    lineTwo: null,
                    cityTown: null,
                    stateProvince: null,
                    country: 'canada',
                    postalCode: null,
                },
                email: null,
                phone: null,
                phoneExt: null,
                password: null

            }
        }

        function saveUserToList(userObj) {

            const hasTheSameUser = userList.some((user) => {
                return user.email == userObj.email;
            })

            if (hasTheSameUser) {
                return {
                    isSuccess: false,
                    message: "Failed. The User email has been used"
                }
            } else {
                userList.push(userObj);

                return {
                    isSuccess: true,
                    message: "The user account has been created successfully, Please Login"
                }
            }

        }

        function setUser(outerUserObj) {
            userObj = outerUserObj;
        }

        function getUser() {
            return userObj;
        }

        function isPasswordConfirmed(outerLoginData) {

            const foundUser = userList.find((user) => {
                return (outerLoginData.email === user.email) && (outerLoginData.password === user.password)
            })

            if (foundUser) {
                setUser(foundUser);
                setIsLogin(true);

                return {
                    isSuccess: true,
                    message: "Login successfully"
                }


            } else {
                return {
                    isSuccess: false,
                    message: "Failed. The email or password incorrect"
                }
            }
        }

        function setIsLogin(outerIsLogin) {
            isLogin = outerIsLogin;
            if (!isLogin) {
                setUser(null);
                return {
                    isSuccess: true,
                    message: "Logout successfully. See you next time"
                }
            }

        }

        function getIsLogin() {
            return isLogin;
        }

    }
})();