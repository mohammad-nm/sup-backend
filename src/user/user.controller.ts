import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body() body: { username: string; email: string; password: string },
  ) {
    console.log('(user controller)registering: ', body);
    return this.userService.createUser(
      body.username,
      body.email,
      body.password,
    );
  }
  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    console.log('(user controller)email to find: ', email);
    return this.userService.findByEmail(email);
  }
}
