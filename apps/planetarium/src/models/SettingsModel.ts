import { model } from '@modern-js/runtime/model';
import { Server, Language } from '@/apis/schema/types';

type State = {
  server: Server;
  language: Language;
};

const defaultState: State = {
  server: Server.China,
  language: Language.Chinese,
};

export const settingsModel = model<State>('settings').define({
  state: defaultState,
  // actions: {
  //   setServer: (state, payload: Server) => {
  //     state.server = payload;
  //   },
  //   setLanguage: (state, payload: Language) => {
  //     state.language = payload;
  //   },
  // },
});
