import { Module } from '@nestjs/common';
import { S3MusicController } from './s3music.contoller';
import { S3MusicService } from './s3music.service';

@Module({
  providers: [S3MusicService],
  controllers: [S3MusicController],
})
export class S3MusicModule {}