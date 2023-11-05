import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TestService } from 'src/test.service';
import { WildService } from './wild.svc';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'aumo.topic',
          type: 'topic',
        },
      ],
      uri: 'amqps://',
      channels: {},
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TestService, WildService],
})
export class WildModule {}
