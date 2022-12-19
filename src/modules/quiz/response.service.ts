import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { events } from '../../common/constants/event.constants';
import { ResponseAddEvent } from './response-add.event';

@Injectable()
export class ResponseService {
  @OnEvent(events.RESPONSE_SUBMITTED)
  handleIfResponseIsCorrect(payload: ResponseAddEvent) {
    console.log('handleIfResponseIsCorrect', payload);
  }
}
