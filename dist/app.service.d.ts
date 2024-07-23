import CreateUserDto from './user.dto';
export declare class AppService {
    private USERS;
    private counter;
    createUser(user: CreateUserDto): CreateUserDto;
    getUser(username: string): CreateUserDto;
    getAllUser(): CreateUserDto[];
    updateUser(updatedUser: CreateUserDto, id: number): CreateUserDto;
    deleteUser(id: number): CreateUserDto;
}
