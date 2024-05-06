export class DataStorage {
    static _data: { [key: string]: any; }

    static initData() {
        DataStorage._data = {};
    }

    static setData(key: string, value: any) {
        DataStorage._data[key] = value;
    }

    static getData(key: string): any {
        if (key in DataStorage._data) {
            return DataStorage._data[key]
        } else {
            return null
        }
    }

    static clearData() {
        DataStorage._data = {}
    }
}