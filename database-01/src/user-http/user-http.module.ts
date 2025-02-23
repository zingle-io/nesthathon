import { Module } from '@nestjs/common';
import { UserHttpService } from './user-http.service';
import { UserHttpController } from './user-http.controller';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserHttpController, UserController],
  providers: [UserHttpService, UserService],
})
export class UserHttpModule {}
