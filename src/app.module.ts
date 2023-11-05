import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test.service';
import { WildModule } from './testWild/wild.module';

@Module({
  imports: [WildModule],
})
export class AppModule {}
