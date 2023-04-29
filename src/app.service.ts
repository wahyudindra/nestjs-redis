import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
    constructor(private readonly httpService: HttpService, @Inject(CACHE_MANAGER) private cacheService: Cache) {}
    getHello(): string {
        return 'Hello World!';
    }

    async getPokemon(id: number): Promise<string> {
        const cacheId = `pokemon-${id}`;

        const cachedData = await this.cacheService.get<{ name: string }>(cacheId);
        if (cachedData) {
            console.log(`Getting data from cache!`);
            return `${cachedData.name}`;
        }

        const { data } = await this.httpService.axiosRef.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        await this.cacheService.set(cacheId, data);

        return `${data.name}`;
    }
}
