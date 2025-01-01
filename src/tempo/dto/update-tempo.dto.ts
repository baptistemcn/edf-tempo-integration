import { PartialType } from "@nestjs/swagger";
import { CreateTempoDto } from "./create-tempo.dto";

export class UpdateTempoDto extends PartialType(CreateTempoDto) {}
