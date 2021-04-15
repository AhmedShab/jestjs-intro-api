import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeesModule } from '../coffees/coffees.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    CoffeesModule,
    DatabaseModule.register(
      `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
    ),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
