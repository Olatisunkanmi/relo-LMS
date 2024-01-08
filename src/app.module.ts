import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeartbeatModule } from './heartbeat/heartbeat.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    HeartbeatModule,
    AuthModule,
    RolesModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
