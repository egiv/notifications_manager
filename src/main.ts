import { NestFactory } from '@nestjs/core';
import {NotificationModule} from "./server/modules/notification/notification.module";

async function bootstrap() {
  const app = await NestFactory.create(NotificationModule);
  await app.listen(3000);
}
bootstrap();
