import { Injectable, NotFoundException } from '@nestjs/common';
import CreateUserDto from './user.dto';

@Injectable()
export class AppService {
  private USERS = [];
  private counter = 0;

  createUser(user: CreateUserDto): CreateUserDto {
    const newUser = user;
    newUser.id = this.counter++;
    this.USERS.push(newUser);
    return newUser;
  }

  getUser(username: string): CreateUserDto {
    const user = this.USERS.find((usr) => usr.username === username);
    if (!user) {
      throw new NotFoundException(
        `User not found with this username: ${username}`,
      );
    }
    return user;
  }

  getAllUser(): CreateUserDto[] {
    return this.USERS;
  }

  updateUser(updatedUser: CreateUserDto, id: number): CreateUserDto {
    let updatedUserObject: CreateUserDto;
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
      } else {
        return usr;
      }
    });
    this.USERS = newUser;
    if (updatedUserObject === undefined) {
      throw new NotFoundException(`No user found with ID ${id}`);
    }
    return updatedUserObject;
  }

  deleteUser(id: number): CreateUserDto {
    let deletedUser: CreateUserDto;
    const filterUser = this.USERS.filter((usr) => {
      if (usr.id !== id) {
        return true;
      } else {
        deletedUser = usr;
      }
    });
    this.USERS = filterUser;
    if (deletedUser === undefined) {
      throw new NotFoundException(`No user found with ID ${id}`);
    }
    return deletedUser;
  }
}
