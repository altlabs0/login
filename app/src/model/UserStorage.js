"use strict";

class UserStorage{
    static #users = {
        id: ['wldhrdu', '김개발', 'admin'],
        password: ['1234', '12345', '123456'],
        name: ['나', '김개발', '운영자'],
    };

    static getUsers(...fileds){
        const users = this.#users;
        const newUsers = fileds.reduce((newUsers, filed) => {
            if (users.hasOwnProperty(filed)){
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.name.push(userInfo.name);
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
        return { success: true };
    }
};

module.exports = UserStorage;