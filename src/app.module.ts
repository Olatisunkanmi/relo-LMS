import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeartbeatModule } from './heartbeat/heartbeat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    HeartbeatModule
  ],
  controllers: [],
  providers: []
  // controllers: [AppController, UsersController, AuthController],
  // providers: [AppService, UsersService, AuthService],
})
export class AppModule {}
