import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('music')
export class MusicController {
  @Get(':track')
  streamMusic(@Param('track') track: string, @Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'public', 'music', track);
    res.sendFile(filePath);
  }

  @Get('rec/rec')
  getInitRecommend() {
    const host = "172.20.10.2";

    const files = [
      {
        "id": "1",
        "name": "Goofy type beat",
        "bitmaker": "smokeynagato",
        "price": "1000",
        "trackUrl": `http://${host}:3000/music/1.wav`,
        "photoUrl": `http://${host}:3000/photo/1.png`,
      },
      {
        "id": "2",
        "name": "test2",
        "bitmaker": "test2",
        "price": "1000",
        "trackUrl": `http://${host}:3000/music/2.wav`,
        "photoUrl": `http://${host}:3000/photo/2.png`,
      },
      {
        "id": "3",
        "name": "test3",
        "bitmaker": "test3",
        "price": "1000",
        "trackUrl": `http://${host}:3000/music/3.wav`,
        "photoUrl": `http://${host}:3000/photo/3.png`,
      },
      {
        "id": "4",
        "name": "test4",
        "bitmaker": "test4",
        "price": "1000",
        "trackUrl": `http://${host}:3000/music/4.wav`,
        "photoUrl": `http://${host}:3000/photo/4.png`,
      },{
        "id": "5",
        "name": "Goofy",
        "bitmaker": "smokeynagato",
        "price": "10000",
        "trackUrl": `http://${host}:3000/music/5.wav`,
        "photoUrl": `http://${host}:3000/photo/5.jpg`,
      },
    ];

    return files;
  }
}