import { Injectable } from '@nestjs/common';
import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  constructor(private readonly rmqService: AmqpConnection) {}

  getHello(): string {
    this.rmqService.publish('aumo.topic', 'aumo.test.a', 'just a test');

    return 'Hello World!';
  }

  @RabbitSubscribe({ exchange: 'amq.topic', routingKey: 'aumo.test.a' })
  t1(data: string) {
    console.log('t1', data);
  }
  @RabbitSubscribe({ exchange: 'aumo.topic', routingKey: 'aumo.test.a' })
  t2(data: string) {
    console.log('t2', data);
  }
}
