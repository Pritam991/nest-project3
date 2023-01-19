/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(user: User) {
   return this.userModel.create(user);
    
  }

  findAll()  {
    console.log(this.userModel.find());
    
   return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, user: User)  {
    return this.userModel.findByIdAndUpdate(id, user);
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
}

}
