import { Controller, Get } from "@nestjs/common";
import { TempoService } from "./tempo.service";

@Controller("tempo")
export class TempoController {
  constructor(private readonly tempoService: TempoService) {}

  @Get()
  findAll() {
    return this.tempoService.findAll();
  }
}
