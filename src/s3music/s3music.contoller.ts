import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { S3MusicService } from './s3music.service';

@Controller('S3music')
export class S3MusicController {
  constructor(private readonly s3Service: S3MusicService) {}

  @Get(':key')
  async getFile(@Param('key') key: string, @Res() res: Response): Promise<void> {
    const fileStream = await this.s3Service.getFileStream(key);

    res.set({
      // 'Content-Type': 'application/octet-stream',
      // 'Content-Disposition': `attachment; filename="${key}"`,
    });

    // Передаем поток прямо в ответ Express
    fileStream.pipe(res);
  }
}