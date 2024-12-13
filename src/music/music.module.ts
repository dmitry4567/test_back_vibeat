import { Module } from '@nestjs/common';
import { MusicController } from './music.contoller';

@Module({
  controllers: [MusicController],
})
export class MusicModule {}