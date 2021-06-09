import * as React from 'react';
export var title4 = {
  name: 'title4',
  keyCommand: 'title4',
  shortcuts: 'ctrlcmd+4',
  buttonProps: {
    'aria-label': 'Insert title4',
    title: 'Insert title 4'
  },
  icon: /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      textAlign: 'left'
    }
  }, "Title 4"),
  execute: function execute(state, api) {
    var modifyText = "#### ".concat(state.selectedText, "\n");

    if (!state.selectedText) {
      modifyText = "#### ";
    }

    api.replaceSelection(modifyText);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy90aXRsZTQudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidGl0bGU0IiwibmFtZSIsImtleUNvbW1hbmQiLCJzaG9ydGN1dHMiLCJidXR0b25Qcm9wcyIsInRpdGxlIiwiaWNvbiIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiZXhlY3V0ZSIsInN0YXRlIiwiYXBpIiwibW9kaWZ5VGV4dCIsInNlbGVjdGVkVGV4dCIsInJlcGxhY2VTZWxlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUdBLE9BQU8sSUFBTUMsTUFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsSUFBSSxFQUFFLFFBRHdCO0FBRTlCQyxFQUFBQSxVQUFVLEVBQUUsUUFGa0I7QUFHOUJDLEVBQUFBLFNBQVMsRUFBRSxXQUhtQjtBQUk5QkMsRUFBQUEsV0FBVyxFQUFFO0FBQUUsa0JBQWMsZUFBaEI7QUFBaUNDLElBQUFBLEtBQUssRUFBRTtBQUF4QyxHQUppQjtBQUs5QkMsRUFBQUEsSUFBSSxlQUFFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JDLE1BQUFBLFNBQVMsRUFBRTtBQUEzQjtBQUFaLGVBTHdCO0FBTTlCQyxFQUFBQSxPQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBbUJDLEdBQW5CLEVBQW9DO0FBQzNDLFFBQUlDLFVBQVUsa0JBQVdGLEtBQUssQ0FBQ0csWUFBakIsT0FBZDs7QUFDQSxRQUFJLENBQUNILEtBQUssQ0FBQ0csWUFBWCxFQUF5QjtBQUN2QkQsTUFBQUEsVUFBVSxVQUFWO0FBQ0Q7O0FBQ0RELElBQUFBLEdBQUcsQ0FBQ0csZ0JBQUosQ0FBcUJGLFVBQXJCO0FBQ0Q7QUFaNkIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElDb21tYW5kLCBUZXh0U3RhdGUsIFRleHRBcGkgfSBmcm9tICcuLyc7XHJcblxyXG5leHBvcnQgY29uc3QgdGl0bGU0OiBJQ29tbWFuZCA9IHtcclxuICBuYW1lOiAndGl0bGU0JyxcclxuICBrZXlDb21tYW5kOiAndGl0bGU0JyxcclxuICBzaG9ydGN1dHM6ICdjdHJsY21kKzQnLFxyXG4gIGJ1dHRvblByb3BzOiB7ICdhcmlhLWxhYmVsJzogJ0luc2VydCB0aXRsZTQnLCB0aXRsZTogJ0luc2VydCB0aXRsZSA0JyB9LFxyXG4gIGljb246IDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0LCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5UaXRsZSA0PC9kaXY+LFxyXG4gIGV4ZWN1dGU6IChzdGF0ZTogVGV4dFN0YXRlLCBhcGk6IFRleHRBcGkpID0+IHtcclxuICAgIGxldCBtb2RpZnlUZXh0ID0gYCMjIyMgJHtzdGF0ZS5zZWxlY3RlZFRleHR9XFxuYDtcclxuICAgIGlmICghc3RhdGUuc2VsZWN0ZWRUZXh0KSB7XHJcbiAgICAgIG1vZGlmeVRleHQgPSBgIyMjIyBgO1xyXG4gICAgfVxyXG4gICAgYXBpLnJlcGxhY2VTZWxlY3Rpb24obW9kaWZ5VGV4dCk7XHJcbiAgfSxcclxufTtcclxuIl19