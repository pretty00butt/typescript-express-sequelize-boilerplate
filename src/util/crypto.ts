import crypto from "crypto";

export const encrypt = (value: string, key: string) => {
    if (value) {
        const cipher = crypto.createCipher("aes256", key);
        return cipher.update(value, "ascii", "hex") + cipher.final("hex");
    } else {
        return value;
    }
};

export const decrypt = (value: string, key: string) => {
    if (value) {
        const decipher = crypto.createDecipher("aes256", key);
        return decipher.update(value, "hex", "ascii") + decipher.final("ascii");
    } else {
        return value;
    }
};

export const createRandomToken = () => {
    const buf = crypto.randomBytes(16);
    return buf.toString("hex");
};
