import { Module } from "@nestjs/common";
import { DaysTempoService } from "./days-tempo.service";
import { DaysTempoController } from "./days-tempo.controller";

@Module({
  controllers: [DaysTempoController],
  providers: [DaysTempoService],
})
export class DaysTempoModule {}
