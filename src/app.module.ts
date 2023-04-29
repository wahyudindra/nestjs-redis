import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [CacheModule.register()],
    controllers: [AppController],
})
export class AppModule {}
