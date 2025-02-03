export const TOTAL_LENGTH = 4; // 전체 길이를 나타내는 4바이트
export const PACKET_TYPE_LENGTH = 1; // 패킷타입을 나타내는 1바이트

export const PACKET_TYPE = {
    PING: 0,
    NORMAL: 1,
    JOINLOBBY: 2,
    LOCATION: 3,
    JOINROOM: 4,
    GAME_START: 5,
    CARRYUPDATE: 6,
  };