import { IUser } from 'app/core/user/user.model';

export interface IWallet {
    id?: number;
    address?: string;
    privateKey?: string;
    publicKey?: string;
    publicKeyHash?: string;
    wif?: string;
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    owner?: IUser;
}

export class Wallet implements IWallet {
    constructor(
        public id?: number,
        public address?: string,
        public privateKey?: string,
        public publicKey?: string,
        public publicKeyHash?: string,
        public wif?: string,
        public createdBy?: string,
        public createdDate?: Date,
        public lastModifiedBy?: string,
        public lastModifiedDate?: Date,
        public owner?: IUser
    ) {}
}
