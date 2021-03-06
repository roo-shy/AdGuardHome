// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IWhoisInfo {
    [key: string]: string;
}

export default class WhoisInfo {
    readonly data: Record<string, string>;

    constructor(props: IWhoisInfo) {
        this.data = Object.entries(props).reduce<Record<string, string>>((prev, [key, value]) => {
            prev[key] = value!;
            return prev;
        }, {})
    }

    serialize(): IWhoisInfo {
        return Object.entries(this.data).reduce<Record<string, string>>((prev, [key, value]) => {
            prev[key] = value;
            return prev;
        }, {})
    }

    validate(): string[] {
        return []
    }

    update(props: IWhoisInfo): WhoisInfo {
        return new WhoisInfo({ ...this.serialize(), ...props });
    }
}
