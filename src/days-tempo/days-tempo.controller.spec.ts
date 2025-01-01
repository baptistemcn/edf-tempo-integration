import { Test, TestingModule } from "@nestjs/testing";
import { DaysTempoController } from "./days-tempo.controller";
import { DaysTempoService } from "./days-tempo.service";

describe("DaysTempoController", () => {
  let controller: DaysTempoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaysTempoController],
      providers: [DaysTempoService],
    }).compile();

    controller = module.get<DaysTempoController>(DaysTempoController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
