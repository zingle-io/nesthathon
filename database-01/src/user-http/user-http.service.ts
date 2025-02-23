import { Injectable } from '@nestjs/common';
import { CreateUserHttpDto } from './dto/create-user-http.dto';
import { UpdateUserHttpDto } from './dto/update-user-http.dto';

@Injectable()
export class UserHttpService {
  create(createUserHttpDto: CreateUserHttpDto) {
    return 'This action adds a new userHttp';
  }

  findAll() {
    return `This action returns all userHttp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHttp`;
  }

  update(id: number, updateUserHttpDto: UpdateUserHttpDto) {
    return `This action updates a #${id} userHttp`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHttp`;
  }
}
