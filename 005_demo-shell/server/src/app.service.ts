import { Injectable } from '@nestjs/common';

import * as fs from 'fs-extra';
import { execSync } from 'child_process';

@Injectable()
export class AppService {
  getHello(projectPath: string, nodeVersion: string): string {
    // 读取 package.json 文件 然后执行这个文件中的 scripts 命令
    execSync(`nvm use ${nodeVersion}`, { cwd: './', stdio: 'inherit' });
    return 'Hello World!';
  }
}
