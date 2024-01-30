import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI), 
    SignupModule],
  
  
})
export class AppModule {}
