import { Test, TestingModule } from '@nestjs/testing';
import { getConnectionToken, getModelToken } from '@nestjs/mongoose';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeesService,
        { provide: getConnectionToken(), useValue: {} },
        { provide: getModelToken(Coffee.name), useValue: {} },
        { provide: getModelToken(Event.name), useValue: {} },
        { provide: COFFEE_BRANDS, useValue: {} },
      ],
    }).compile();

    service = module.get<CoffeesService>(CoffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
