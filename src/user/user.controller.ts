import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    console.log('(user controller)registering: ', body);
    return this.userService.createUser(
      body.username,
      // body.email,
      body.password,
    );
  }
  @Get(':username')
  async getUserByUsername(@Param('username') username: string) {
    console.log('(user controller)username to find: ', username);
    return this.userService.findByUsername(username);
  }
}
