import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [
        // For nestjs cache
        // CacheModule.register({ isGlobal: true }),

        // For redis
        CacheModule.register({
            isGlobal: true,
            store: redisStore,
            host: 'localhost',
            port: 6379,
        }),
        HttpModule.register({ timeout: 5000, maxRedirects: 5 }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
