import { ApiProperty } from '@nestjs/swagger';

export class feedbackDto {
  @ApiProperty()
  virtual_id: string;

  @ApiProperty()
  original_text: string

  @ApiProperty()
  response_text_audio_url: string
}
