import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDto } from './signup.dto';
import { LoginDto } from './login.dto';

@Controller('signup') // http://localhost:8000/signup
export class SignupController {
  constructor(private readonly signupservice: SignupService) {}

  @Post()
  signup(@Body() SignupDto: SignupDto) {
    return this.signupservice.signup(SignupDto);
  }
}
