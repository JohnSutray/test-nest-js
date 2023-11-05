import { Injectable } from '@nestjs/common';
import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class TestService {
  constructor(private readonly rmqService: AmqpConnection) {}

  @RabbitSubscribe({ exchange: 'amq.topic', routingKey: 'aumo.test.a' })
  t4(data: string) {
    console.log('t4', data);
  }
}
