import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard } from "@nestjs/throttler";

import { DaysTempoModule } from "./days-tempo/days-tempo.module";
import { SharedModule } from "./shared/shared.module";

@Module({
  imports: [DaysTempoModule, SharedModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
