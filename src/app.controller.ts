import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @UseInterceptors(CacheInterceptor)
    @CacheTTL(30) // override TTL to 30 seconds
    @Get('pokemon/:id')
    async getOne(@Param('id') id: number): Promise<string> {
        return await this.appService.getPokemon(+id);
    }
}
