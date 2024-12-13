import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MusicModule } from './music/music.module';
import { S3MusicModule } from './s3music/s3music.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'public'),
        serveRoot: '/music/',
      },
    ),
    MusicModule,
    S3MusicModule,
    PhotoModule
  ],
})
export class AppModule {}