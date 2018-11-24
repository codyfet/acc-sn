export interface LoginData {
    username: string;
    password: string;
}

export interface User {
    id: number;
    name: string;
    surname: string;
    avatarURL?: string;
    // presence object ???
    chatRoomList: Array<object>;
    newsRoomList: Array<object>;
    password: string;
    enterpriseId: string;
}
