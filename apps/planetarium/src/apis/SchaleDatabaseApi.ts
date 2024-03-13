import { Server, Language } from './schema/types';
import Item from './schema/Item';

type Student = {
  Id: number;
  IsReleased: [boolean, boolean, boolean];
};

type ServerIndex = 0 | 1 | 2;

export default class SchaleDatabaseApi {
  baseURL: string;

  constructor(baseURL = 'https://schale.gg') {
    this.baseURL = baseURL;
  }

  async loadData<T>(
    name: string,
    language = Language.Chinese,
    useMin = true,
  ): Promise<T[] | null> {
    const dotMin = useMin ? '.min' : '';
    const url = `${this.baseURL}/data/${language}/${name}${dotMin}.json`;
    const resp = await fetch(url);
    if (resp.status !== 200) {
      return null;
    }
    const payload: T[] = await resp.json();
    return payload;
  }

  async loadStudents(
    server = Server.China,
    language = Language.Chinese,
  ): Promise<Student[] | null> {
    const serverIndex = this.getServerIndex(server);
    const students = await this.loadData<Student>('students', language, true);
    if (students === null) {
      return null;
    }
    return students.filter(s => s.IsReleased[serverIndex]);
  }

  async loadItems(
    server = Server.China,
    language = Language.Chinese,
  ): Promise<Item[] | null> {
    const serverIndex = this.getServerIndex(server);
    const items = await this.loadData<Item>('items', language, true);
    if (items === null) {
      return null;
    }
    return items.filter(i => i.IsReleased[serverIndex]);
  }

  getServerIndex(server: Server): ServerIndex {
    if (server === Server.Global) {
      return 1;
    }
    if (server === Server.China) {
      return 2;
    }
    return 0;
  }
}
