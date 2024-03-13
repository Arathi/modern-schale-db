import { model } from '@modern-js/runtime/model';
import Item from '@/apis/schema/Item';

interface ItemFilterCondition {
  name?: string;
  category?: string;
}

type State = {
  items: Item[];
  filter: ItemFilterCondition;
};

export const itemsModel = model<State>('items').define({
  state: {
    items: [],
    filter: {},
  },
  computed: {
    filtered: state => {
      return state.items.filter(item => {
        if (state.filter.name !== undefined) {
          if (item.Name.indexOf(state.filter.name) < 0) {
            return false;
          }
        }
        if (state.filter.category !== undefined) {
          if (item.Category !== state.filter.category) {
            return false;
          }
        }
        return true;
      });
    },
  },
});
