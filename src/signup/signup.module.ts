import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Signup, SignupSchema } from './signup.model';

@Module({
    imports:[
        MongooseModule.forFeature([{name:Signup.name,schema:SignupSchema}]
    )],
  controllers: [SignupController],
  providers: [SignupService]
})
export class SignupModule {}
