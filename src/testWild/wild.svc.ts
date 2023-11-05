import { Injectable } from '@nestjs/common';
import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class WildService {
  constructor(private readonly rmqService: AmqpConnection) {}

  @RabbitSubscribe({ exchange: 'amq.topic', routingKey: '#' })
  t(data: string) {
    console.log('test wild', data);
  }

  @RabbitSubscribe({ exchange: 'amq.topic', routingKey: 'aumo.test.a' })
  t3(data: string) {
    console.log('t3', data);
  }
}
