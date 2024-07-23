"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.USERS = [];
        this.counter = 0;
    }
    createUser(user) {
        const newUser = user;
        newUser.id = this.counter++;
        this.USERS.push(newUser);
        return newUser;
    }
    getUser(username) {
        const user = this.USERS.find((usr) => usr.username === username);
        if (!user) {
            throw new common_1.NotFoundException(`User not found with this username: ${username}`);
        }
        return user;
    }
    getAllUser() {
        return this.USERS;
    }
    updateUser(updatedUser, id) {
        let updatedUserObject;
        const newUser = this.USERS.map((usr) => {
            if (usr.id === id) {
                updatedUserObject = usr;
                if (updatedUser.username !== undefined) {
                    usr.username = updatedUser.username;
                }
                if (updatedUser.password !== undefined) {
                    usr.password = updatedUser.password;
                }
                if (updatedUser.email !== undefined) {
                    usr.email = updatedUser.email;
                }
                return usr;
            }
            else {
                return usr;
            }
        });
        this.USERS = newUser;
        if (updatedUserObject === undefined) {
            throw new common_1.NotFoundException(`No user found with ID ${id}`);
        }
        return updatedUserObject;
    }
    deleteUser(id) {
        let deletedUser;
        const filterUser = this.USERS.filter((usr) => {
            if (usr.id !== id) {
                return true;
            }
            else {
                deletedUser = usr;
            }
        });
        this.USERS = filterUser;
        if (deletedUser === undefined) {
            throw new common_1.NotFoundException(`No user found with ID ${id}`);
        }
        return deletedUser;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map