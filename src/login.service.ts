import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginModel } from './signup/Login.model';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private LoginModel: Model<LoginModel>) {}
}
