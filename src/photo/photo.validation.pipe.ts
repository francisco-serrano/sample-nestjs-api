import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class PhotoValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return {
      name: value.name,
      description: value.description,
      filename: value.filename,
      views: Number(value.views),
      published: Boolean(value.published),
    };
  }
}
