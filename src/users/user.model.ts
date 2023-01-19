/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger/dist';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ApiTags('users')
export class User {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  email: string;

  @Prop()
  @ApiProperty()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User); 