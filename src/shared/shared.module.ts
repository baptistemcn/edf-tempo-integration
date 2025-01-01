import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ThrottlerModule } from "@nestjs/throttler";

@Module({
  imports: [
    HttpModule,
    ThrottlerModule.forRoot([
      {
        ttl: 600,
        limit: process.env.NODE_ENV === "development" ? 10000 : 100,
      },
    ]),
  ],
  exports: [HttpModule, ThrottlerModule],
})
export class SharedModule {}
