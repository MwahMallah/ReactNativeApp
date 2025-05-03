import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AuthStorage{    
    private path: string;

    constructor(namespace = "auth") {
        this.path = `${namespace}:accessToken`;
    }

    public async getAccessToken(): Promise<string | null> {
        const token = await AsyncStorage
            .getItem(this.path);
        return token;
    }

    public async setAccessToken(accessToken: string) {
        await AsyncStorage
            .setItem(this.path, accessToken);
    }

    public async removeAccessToken() {
        await AsyncStorage
            .removeItem(this.path);
    }
}