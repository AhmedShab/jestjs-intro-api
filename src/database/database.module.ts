import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions, createConnection } from 'mongoose';

@Module({})
export class DatabaseModule {
  static register(uri: string, options?: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: createConnection(uri, options),
        },
      ],
    };
  }
}
