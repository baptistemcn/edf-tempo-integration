import { Injectable } from "@nestjs/common";

@Injectable()
export class TempoService {
  findAll() {
    return `This action returns all tempo`;
  }
}
