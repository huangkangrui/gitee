export const phoneReg = /^1[3456789]\d{9}$/;


// 包含数字，且必须包含字母或其它符号（!@_#$%^&*()-+=,.?）
export const passwordReg = /^(?=.*[A-Za-z!@_#$%^&*()\-+=,.?])(?=.*\d)[A-Za-z0-9!@_#$%^&*()\-+=,.?]{6,}$/;

export const emailReg = /^([a-zA-Z\d])(\w|-|.)+@[a-zA-Z-\d]+\.[a-zA-Z]{2,4}$/;
