import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserHttpService } from './user-http.service';
import { CreateUserHttpDto } from './dto/create-user-http.dto';
import { UpdateUserHttpDto } from './dto/update-user-http.dto';

@Controller('user-http')
export class UserHttpController {
  constructor(private readonly userHttpService: UserHttpService) {}

  @Post()
  create(@Body() createUserHttpDto: CreateUserHttpDto) {
    return this.userHttpService.create(createUserHttpDto);
  }

  @Get()
  findAll() {
    return this.userHttpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHttpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserHttpDto: UpdateUserHttpDto) {
    return this.userHttpService.update(+id, updateUserHttpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHttpService.remove(+id);
  }
}
