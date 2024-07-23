import { AppService } from './app.service';
import CreateUserDto from './user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(user: CreateUserDto): CreateUserDto;
    getUser(username: string): CreateUserDto;
    getAllUsers(): CreateUserDto[];
    updateUser(updatedUser: CreateUserDto, id: string): CreateUserDto;
    deleteUser(id: string): CreateUserDto;
}
