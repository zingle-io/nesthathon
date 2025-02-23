import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { UserHttpModule } from './user-http/user-http.module';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/entities/photo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.prod', '.env.development', '.env.local', '.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE || 'test',
      entities: [User, Photo],
      // autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    PhotoModule,
    UserModule,
    UserHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
