import Sortable from 'sortablejs';

// 过渡动画
const TRANSITION_DURATION = 200;

// 指令内部类命名空间
const CLASS_NAMESPACES = '_el_drag_table_class_namespaces_';

/**
 * el-table拖拽
 * @param Vue
 */
const install = (Vue) => {
  Vue.directive('el-drag-table', {
    bind(el, binding, node) {
      init(el, binding, node);
    },
    update(el, binding, node) {
      init(el, binding, node);
    },
  });
};

const init = (el, binding, node) => {
  const list = binding.value;
  if (list === false || el.className.includes(CLASS_NAMESPACES)) {
    return;
  }
  el.classList.add(CLASS_NAMESPACES);
  const table = el.querySelector('.el-table__body-wrapper tbody');
  new Sortable(table, {
    animation: TRANSITION_DURATION,
    sort: true,
    onEnd: (e) => {
      if (list) {
        const indexField = binding.arg;
        arrayMove(list, e.oldIndex, e.newIndex);
        if (indexField) {
          list.forEach((item, index) => {
            item[indexField] = index + 1;
          });
        }
        node.componentInstance.$emit('onDrag');
      }
    },
  });
};

const arrayMove = (arr, oldIndex, newIndex) => {
  if (newIndex >= arr.length) {
    let k = newIndex - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
};

export default install;
