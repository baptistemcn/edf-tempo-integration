import { Controller, Get } from "@nestjs/common";

import { DaysTempoService } from "./days-tempo.service";

@Controller("days-tempo")
export class DaysTempoController {
  constructor(private readonly daysTempoService: DaysTempoService) {}

  @Get()
  findAll() {
    return this.daysTempoService.findAll();
  }
}
