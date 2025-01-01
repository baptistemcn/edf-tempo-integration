import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");

  if (process.env.NODE_ENV !== "production") {
    const config = new DocumentBuilder()
      .setTitle("EDF Tempo Intégration API")
      .setDescription("EDF Tempo Intégration API")
      .setVersion("1.0")
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("api/v1/swagger", app, document);
  }

  await app.listen(3000);
}

bootstrap();
