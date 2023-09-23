import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ChargeBeeWebhookDto } from './models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  testingPost(@Body() body: ChargeBeeWebhookDto): string {
    console.log(body);
    return this.appService.getHello();
  }
}
