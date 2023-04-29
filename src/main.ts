import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const host = '0.0.0.0';
    const port = 4000;

    await app.listen(port as number, host);
    console.log(`Server running on port ${port}`);
}
bootstrap();
