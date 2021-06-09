"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.image = void 0;

var React = _interopRequireWildcard(require("react"));

var _markdownUtils = require("../utils/markdownUtils");

var image = {
  name: 'image',
  keyCommand: 'image',
  shortcuts: 'ctrlcmd+i',
  buttonProps: {
    'aria-label': 'Add image',
    title: 'Add image'
  },
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
  })),
  execute: function execute(state, api) {
    // Select everything
    var newSelectionRange = (0, _markdownUtils.selectWord)({
      text: state.text,
      selection: state.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // Replaces the current selection with the image

    var imageTemplate = state1.selectedText || 'https://example.com/your-image.png';
    api.replaceSelection("![](".concat(imageTemplate, ")")); // Adjust the selection to not contain the **

    api.setSelectionRange({
      start: 4 + state1.selection.start,
      end: 4 + state1.selection.start + imageTemplate.length
    });
  }
};
exports.image = image;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbWFnZS50c3giXSwibmFtZXMiOlsiaW1hZ2UiLCJuYW1lIiwia2V5Q29tbWFuZCIsInNob3J0Y3V0cyIsImJ1dHRvblByb3BzIiwidGl0bGUiLCJpY29uIiwiZXhlY3V0ZSIsInN0YXRlIiwiYXBpIiwibmV3U2VsZWN0aW9uUmFuZ2UiLCJ0ZXh0Iiwic2VsZWN0aW9uIiwic3RhdGUxIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJpbWFnZVRlbXBsYXRlIiwic2VsZWN0ZWRUZXh0IiwicmVwbGFjZVNlbGVjdGlvbiIsInN0YXJ0IiwiZW5kIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFTyxJQUFNQSxLQUFlLEdBQUc7QUFDN0JDLEVBQUFBLElBQUksRUFBRSxPQUR1QjtBQUU3QkMsRUFBQUEsVUFBVSxFQUFFLE9BRmlCO0FBRzdCQyxFQUFBQSxTQUFTLEVBQUUsV0FIa0I7QUFJN0JDLEVBQUFBLFdBQVcsRUFBRTtBQUFFLGtCQUFjLFdBQWhCO0FBQTZCQyxJQUFBQSxLQUFLLEVBQUU7QUFBcEMsR0FKZ0I7QUFLN0JDLEVBQUFBLElBQUksZUFDRjtBQUFLLElBQUEsS0FBSyxFQUFDLElBQVg7QUFBZ0IsSUFBQSxNQUFNLEVBQUMsSUFBdkI7QUFBNEIsSUFBQSxPQUFPLEVBQUM7QUFBcEMsa0JBQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxjQURQO0FBRUUsSUFBQSxDQUFDLEVBQUM7QUFGSixJQURGLENBTjJCO0FBYTdCQyxFQUFBQSxPQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBbUJDLEdBQW5CLEVBQW9DO0FBQzNDO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUcsK0JBQVc7QUFBRUMsTUFBQUEsSUFBSSxFQUFFSCxLQUFLLENBQUNHLElBQWQ7QUFBb0JDLE1BQUFBLFNBQVMsRUFBRUosS0FBSyxDQUFDSTtBQUFyQyxLQUFYLENBQTFCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHSixHQUFHLENBQUNLLGlCQUFKLENBQXNCSixpQkFBdEIsQ0FBZixDQUgyQyxDQUkzQzs7QUFDQSxRQUFNSyxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0csWUFBUCxJQUF1QixvQ0FBN0M7QUFDQVAsSUFBQUEsR0FBRyxDQUFDUSxnQkFBSixlQUE0QkYsYUFBNUIsUUFOMkMsQ0FPM0M7O0FBQ0FOLElBQUFBLEdBQUcsQ0FBQ0ssaUJBQUosQ0FBc0I7QUFDcEJJLE1BQUFBLEtBQUssRUFBRSxJQUFJTCxNQUFNLENBQUNELFNBQVAsQ0FBaUJNLEtBRFI7QUFFcEJDLE1BQUFBLEdBQUcsRUFBRSxJQUFJTixNQUFNLENBQUNELFNBQVAsQ0FBaUJNLEtBQXJCLEdBQTZCSCxhQUFhLENBQUNLO0FBRjVCLEtBQXRCO0FBSUQ7QUF6QjRCLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJQ29tbWFuZCwgVGV4dFN0YXRlLCBUZXh0QXBpIH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBzZWxlY3RXb3JkIH0gZnJvbSAnLi4vdXRpbHMvbWFya2Rvd25VdGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW1hZ2U6IElDb21tYW5kID0ge1xyXG4gIG5hbWU6ICdpbWFnZScsXHJcbiAga2V5Q29tbWFuZDogJ2ltYWdlJyxcclxuICBzaG9ydGN1dHM6ICdjdHJsY21kK2knLFxyXG4gIGJ1dHRvblByb3BzOiB7ICdhcmlhLWxhYmVsJzogJ0FkZCBpbWFnZScsIHRpdGxlOiAnQWRkIGltYWdlJyB9LFxyXG4gIGljb246IChcclxuICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIGQ9XCJNMTUgOWMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTQtN0gxYy0uNTUgMC0xIC40NS0xIDF2MTRjMCAuNTUuNDUgMSAxIDFoMThjLjU1IDAgMS0uNDUgMS0xVjNjMC0uNTUtLjQ1LTEtMS0xem0tMSAxM2wtNi01LTIgMi00LTUtNCA4VjRoMTZ2MTF6XCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICksXHJcbiAgZXhlY3V0ZTogKHN0YXRlOiBUZXh0U3RhdGUsIGFwaTogVGV4dEFwaSkgPT4ge1xyXG4gICAgLy8gU2VsZWN0IGV2ZXJ5dGhpbmdcclxuICAgIGNvbnN0IG5ld1NlbGVjdGlvblJhbmdlID0gc2VsZWN0V29yZCh7IHRleHQ6IHN0YXRlLnRleHQsIHNlbGVjdGlvbjogc3RhdGUuc2VsZWN0aW9uIH0pO1xyXG4gICAgY29uc3Qgc3RhdGUxID0gYXBpLnNldFNlbGVjdGlvblJhbmdlKG5ld1NlbGVjdGlvblJhbmdlKTtcclxuICAgIC8vIFJlcGxhY2VzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB3aXRoIHRoZSBpbWFnZVxyXG4gICAgY29uc3QgaW1hZ2VUZW1wbGF0ZSA9IHN0YXRlMS5zZWxlY3RlZFRleHQgfHwgJ2h0dHBzOi8vZXhhbXBsZS5jb20veW91ci1pbWFnZS5wbmcnO1xyXG4gICAgYXBpLnJlcGxhY2VTZWxlY3Rpb24oYCFbXSgke2ltYWdlVGVtcGxhdGV9KWApO1xyXG4gICAgLy8gQWRqdXN0IHRoZSBzZWxlY3Rpb24gdG8gbm90IGNvbnRhaW4gdGhlICoqXHJcbiAgICBhcGkuc2V0U2VsZWN0aW9uUmFuZ2Uoe1xyXG4gICAgICBzdGFydDogNCArIHN0YXRlMS5zZWxlY3Rpb24uc3RhcnQsXHJcbiAgICAgIGVuZDogNCArIHN0YXRlMS5zZWxlY3Rpb24uc3RhcnQgKyBpbWFnZVRlbXBsYXRlLmxlbmd0aCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==