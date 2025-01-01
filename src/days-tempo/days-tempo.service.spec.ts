import { Test, TestingModule } from "@nestjs/testing";
import { DaysTempoService } from "./days-tempo.service";

describe("DaysTempoService", () => {
  let service: DaysTempoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaysTempoService],
    }).compile();

    service = module.get<DaysTempoService>(DaysTempoService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
