import { Injectable } from '@nestjs/common';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

@Injectable()
export class S3MusicService {
  private readonly s3Client: S3Client;
  private readonly bucketName: string;

  constructor() {
    this.s3Client = new S3Client({
      region: 'ru-central1',
      endpoint: 'https://storage.yandexcloud.net',
      credentials: {
        accessKeyId: 'YCAJE11GHSTVvnTv3kkvb-TiE',
        secretAccessKey: 'YCMfRlqz80JWyusCsqsW208iDv82WQC323ziMwIQ',
      },
    });

    this.bucketName = 'dimonpopovs3';
  }

  // Метод для получения потока файла
  async getFileStream(key: string): Promise<Readable> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    const { Body } = await this.s3Client.send(command);

    // Возвращаем поток (Body - это поток)
    return Body as Readable;
  }
}