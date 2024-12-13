import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Response } from 'express';
import { join } from 'path';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get(':photo')
  streamMusic(@Param('photo') photo: string, @Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'public', 'photo', photo);
    res.sendFile(filePath);
  }
}
