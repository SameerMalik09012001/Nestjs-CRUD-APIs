import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import CreateUserDto from './user.dto';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/createUser')
  createUser(@Body() user: CreateUserDto): CreateUserDto {
    return this.appService.createUser(user);
  }

  @Get('/getUser/:username')
  getUser(@Param('username') username: string): CreateUserDto {
    return this.appService.getUser(username);
  }

  @Get('/getAllUsers')
  getAllUsers(): CreateUserDto[] {
    return this.appService.getAllUser();
  }

  @Put('/updateUser/:id')
  updateUser(
    @Body() updatedUser: CreateUserDto,
    @Param('id') id: string,
  ): CreateUserDto {
    return this.appService.updateUser(updatedUser, +id);
  }

  @Delete('/deleteUser/:id')
  deleteUser(@Param('id') id: string): CreateUserDto {
    return this.appService.deleteUser(+id);
  }
}
