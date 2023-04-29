import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';

@Module({
    imports: [CacheModule.register({ isGlobal: true }), HttpModule.register({ timeout: 5000, maxRedirects: 5 })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
