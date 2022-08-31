import { Body, Controller, Get, HttpStatus, Post, Put, Query, Res } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('/all')
  public async getAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Get('/')
  public async getUserById(@Query(`id`) id: string) {
    return await this.userService.findUserById(id);
  }

  @Post('/register')
  public async createUser(@Body() user: User, @Res() res: Response) {
    console.log(user)
    const _user = await this.userService.createUser(user);
    res.status(HttpStatus.CREATED).send({
      message: "Registered User Successfully!!!",
      data: _user
    });
  }

  @Put('/update')
  public async updateUser(@Query(`id`) id: string, @Body() user: User) {
    return await this.userService.updateUser(id, user);
  }
}
