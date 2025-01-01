import { PartialType } from "@nestjs/swagger";
import { CreateDaysTempoDto } from "./create-days-tempo.dto";

export class UpdateDaysTempoDto extends PartialType(CreateDaysTempoDto) {}
