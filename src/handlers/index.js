import { HANDLER_IDS } from '../constants/handlerIds.js';
import initialHandler from './user/initial.handler.js';
import CustomError from '../utils/error/customError.js';
import { ErrorCodes } from '../utils/error/errorCodes.js';
import updateLocationHandler from './game/updateLocation.handler.js';
import joinLobbyHandler from './game/joinLobby.handler.js';
import createRoomHandler from './game/createRoom.handler.js';
import joinRoomHandler from './game/joinRoom.handler.js';
import gameReadyHandler from './game/gameReady.handler.js';
import changeRoleHandler from './data/changeRole.handler.js';
import roomDataHandler from './data/roomData.handler.js';
import carryUpdateHandler from './game/carryUpdate.handler.js';

const handlers = {
  [HANDLER_IDS.INITIAL]: {
    handler: initialHandler,
    protoType: 'initial.InitialPacket',
  },
  [HANDLER_IDS.JOIN_LOBBY]: {
    handler: joinLobbyHandler,
    protoType: 'game.JoinLobbyPayload',
  },
  [HANDLER_IDS.CREAT_ROOM]: {
    handler: createRoomHandler,
    protoType: 'game.CreateRoomPayload',
  },
  [HANDLER_IDS.JOIN_ROOM]: {
    handler: joinRoomHandler,
    protoType: 'game.JoinRoomPayload',
  },
  [HANDLER_IDS.GAME_READY]: {
    handler: gameReadyHandler,
    protoType: 'game.GameReadyPayload',
  },
  [HANDLER_IDS.UPDATE_LOCATION]: {
    handler: updateLocationHandler,
    protoType: 'game.LocationUpdatePayload',
  },
  [HANDLER_IDS.ROOM_DATA]: {
    handler: roomDataHandler,
    protoType: 'game.RoomDataPayload',
  },
  [HANDLER_IDS.CHANGEROLE]: {
    handler: changeRoleHandler,
    protoType: 'game.ChangeRolePayload',
  },
  [HANDLER_IDS.CARRY_UPDATE]: {
    handler: carryUpdateHandler,
    protoType: 'game.CarryUpdatePayload',
  },
  // 다른 핸들러들을 추가
};

export const getHandlerById = (handlerId) => {
  if (!handlers[handlerId]) {
    throw new CustomError(
      ErrorCodes.UNKNOWN_HANDLER_ID,
      `핸들러를 찾을 수 없습니다: ID ${handlerId}`,
    );
  }
  return handlers[handlerId].handler;
};

export const getProtoTypeNameByHandlerId = (handlerId) => {
  if (!handlers[handlerId]) {
    // packetParser 체크하고 있지만 그냥 추가합니다.
    throw new CustomError(
      ErrorCodes.UNKNOWN_HANDLER_ID,
      `핸들러를 찾을 수 없습니다: ID ${handlerId}`,
    );
  }
  return handlers[handlerId].protoType;
};