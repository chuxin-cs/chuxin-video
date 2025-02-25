import { Controller, Get,Query  } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello( @Query('path') projectPath: string, @Query('nodeVersion') nodeVersion: string): string {
    return this.appService.getHello(projectPath, nodeVersion);
  }
}
