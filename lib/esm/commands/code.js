import * as React from 'react';
import { selectWord, getBreaksNeededForEmptyLineBefore, getBreaksNeededForEmptyLineAfter } from '../utils/markdownUtils';
export var code = {
  name: 'code',
  keyCommand: 'code',
  shortcuts: 'ctrlcmd+j',
  buttonProps: {
    'aria-label': 'Insert code'
  },
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    role: "img",
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
  })),
  execute: function execute(tate, api) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = selectWord({
      text: tate.text,
      selection: tate.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // when there's no breaking line

    if (state1.selectedText.indexOf('\n') === -1) {
      api.replaceSelection("`".concat(state1.selectedText, "`")); // Adjust the selection to not contain the **

      var _selectionStart = state1.selection.start + 1;

      var _selectionEnd = _selectionStart + state1.selectedText.length;

      api.setSelectionRange({
        start: _selectionStart,
        end: _selectionEnd
      });
      return;
    }

    var breaksBeforeCount = getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
    var breaksBefore = Array(breaksBeforeCount + 1).join('\n');
    var breaksAfterCount = getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
    var breaksAfter = Array(breaksAfterCount + 1).join('\n');
    api.replaceSelection("".concat(breaksBefore, "```\n").concat(state1.selectedText, "\n```").concat(breaksAfter));
    var selectionStart = state1.selection.start + breaksBeforeCount + 4;
    var selectionEnd = selectionStart + state1.selectedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd
    });
  }
};
export var codeBlock = {
  name: 'codeBlock',
  keyCommand: 'codeBlock',
  shortcuts: 'ctrlcmd+shift+j',
  execute: function execute(tate, api) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = selectWord({
      text: tate.text,
      selection: tate.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var breaksBeforeCount = getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
    var breaksBefore = Array(breaksBeforeCount + 1).join('\n');
    var breaksAfterCount = getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
    var breaksAfter = Array(breaksAfterCount + 1).join('\n');
    api.replaceSelection("".concat(breaksBefore, "```\n").concat(state1.selectedText, "\n```").concat(breaksAfter));
    var selectionStart = state1.selection.start + breaksBeforeCount + 4;
    var selectionEnd = selectionStart + state1.selectedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9jb2RlLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInNlbGVjdFdvcmQiLCJnZXRCcmVha3NOZWVkZWRGb3JFbXB0eUxpbmVCZWZvcmUiLCJnZXRCcmVha3NOZWVkZWRGb3JFbXB0eUxpbmVBZnRlciIsImNvZGUiLCJuYW1lIiwia2V5Q29tbWFuZCIsInNob3J0Y3V0cyIsImJ1dHRvblByb3BzIiwiaWNvbiIsImV4ZWN1dGUiLCJ0YXRlIiwiYXBpIiwibmV3U2VsZWN0aW9uUmFuZ2UiLCJ0ZXh0Iiwic2VsZWN0aW9uIiwic3RhdGUxIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJzZWxlY3RlZFRleHQiLCJpbmRleE9mIiwicmVwbGFjZVNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJsZW5ndGgiLCJlbmQiLCJicmVha3NCZWZvcmVDb3VudCIsImJyZWFrc0JlZm9yZSIsIkFycmF5Iiwiam9pbiIsImJyZWFrc0FmdGVyQ291bnQiLCJicmVha3NBZnRlciIsImNvZGVCbG9jayJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBRUEsU0FDRUMsVUFERixFQUVFQyxpQ0FGRixFQUdFQyxnQ0FIRixRQUlPLHdCQUpQO0FBTUEsT0FBTyxJQUFNQyxJQUFjLEdBQUc7QUFDNUJDLEVBQUFBLElBQUksRUFBRSxNQURzQjtBQUU1QkMsRUFBQUEsVUFBVSxFQUFFLE1BRmdCO0FBRzVCQyxFQUFBQSxTQUFTLEVBQUUsV0FIaUI7QUFJNUJDLEVBQUFBLFdBQVcsRUFBRTtBQUFFLGtCQUFjO0FBQWhCLEdBSmU7QUFLNUJDLEVBQUFBLElBQUksZUFDRjtBQUFLLElBQUEsS0FBSyxFQUFDLElBQVg7QUFBZ0IsSUFBQSxNQUFNLEVBQUMsSUFBdkI7QUFBNEIsSUFBQSxJQUFJLEVBQUMsS0FBakM7QUFBdUMsSUFBQSxPQUFPLEVBQUM7QUFBL0Msa0JBQ0U7QUFDRSxJ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LElBQVIsRUFBY0UsTUFBTSxDQUFDRCxTQUFQLENBQWlCTyxLQUEvQixDQUEzRDtBQUNBLFFBQU1LLFlBQVksR0FBR0MsS0FBSyxDQUFDRixpQkFBaUIsR0FBRyxDQUFyQixDQUFMLENBQTZCRyxJQUE3QixDQUFrQyxJQUFsQyxDQUFyQjtBQUVBLFFBQU1DLGdCQUFnQixHQUFHM0IsZ0NBQWdDLENBQUNhLE1BQU0sQ0FBQ0YsSUFBUixFQUFjRSxNQUFNLENBQUNELFNBQVAsQ0FBaUJVLEdBQS9CLENBQXpEO0FBQ0EsUUFBTU0sV0FBVyxHQUFHSCxLQUFLLENBQUNFLGdCQUFnQixHQUFHLENBQXBCLENBQUwsQ0FBNEJELElBQTVCLENBQWlDLElBQWpDLENBQXBCO0FBRUFqQixJQUFBQSxHQUFHLENBQUNRLGdCQUFKLFdBQXdCTyxZQUF4QixrQkFBK0NYLE1BQU0sQ0FBQ0UsWUFBdEQsa0JBQTZFYSxXQUE3RTtBQUVBLFFBQU1WLGNBQWMsR0FBR0wsTUFBTSxDQUFDRCxTQUFQLENBQWlCTyxLQUFqQixHQUF5QkksaUJBQXpCLEdBQTZDLENBQXBFO0FBQ0EsUUFBTUgsWUFBWSxHQUFHRixjQUFjLEdBQUdMLE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQk0sTUFBMUQ7QUFFQVosSUFBQUEsR0FBRyxDQUFDSyxpQkFBSixDQUFzQjtBQUNwQkssTUFBQUEsS0FBSyxFQUFFRCxjQURhO0FBRXBCSSxNQUFBQSxHQUFHLEVBQUVGO0FBRmUsS0FBdEI7QUFJRDtBQXhCZ0MsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElDb21tYW5kLCBUZXh0U3RhdGUsIFRleHRBcGkgfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7XHJcbiAgc2VsZWN0V29yZCxcclxuICBnZXRCcmVha3NOZWVkZWRGb3JFbXB0eUxpbmVCZWZvcmUsXHJcbiAgZ2V0QnJlYWtzTmVlZGVkRm9yRW1wdHlMaW5lQWZ0ZXIsXHJcbn0gZnJvbSAnLi4vdXRpbHMvbWFya2Rvd25VdGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29kZTogSUNvbW1hbmQgPSB7XHJcbiAgbmFtZTogJ2NvZGUnLFxyXG4gIGtleUNvbW1hbmQ6ICdjb2RlJyxcclxuICBzaG9ydGN1dHM6ICdjdHJsY21kK2onLFxyXG4gIGJ1dHRvblByb3BzOiB7ICdhcmlhLWxhYmVsJzogJ0luc2VydCBjb2RlJyB9LFxyXG4gIGljb246IChcclxuICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgNjQwIDUxMlwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIGQ9XCJNMjc4LjkgNTExLjVsLTYxLTE3LjdjLTYuNC0xLjgtMTAtOC41LTguMi0xNC45TDM0Ni4yIDguN2MxLjgtNi40IDguNS0xMCAxNC45LTguMmw2MSAxNy43YzYuNCAxLjggMTAgOC41IDguMiAxNC45TDI5My44IDUwMy4zYy0xLjkgNi40LTguNSAxMC4xLTE0LjkgOC4yem0tMTE0LTExMi4ybDQzLjUtNDYuNGM0LjYtNC45IDQuMy0xMi43LS44LTE3LjJMMTE3IDI1Nmw5MC42LTc5LjdjNS4xLTQuNSA1LjUtMTIuMy44LTE3LjJsLTQzLjUtNDYuNGMtNC41LTQuOC0xMi4xLTUuMS0xNy0uNUwzLjggMjQ3LjJjLTUuMSA0LjctNS4xIDEyLjggMCAxNy41bDE0NC4xIDEzNS4xYzQuOSA0LjYgMTIuNSA0LjQgMTctLjV6bTMyNy4yLjZsMTQ0LjEtMTM1LjFjNS4xLTQuNyA1LjEtMTIuOCAwLTE3LjVMNDkyLjEgMTEyLjFjLTQuOC00LjUtMTIuNC00LjMtMTcgLjVMNDMxLjYgMTU5Yy00LjYgNC45LTQuMyAxMi43LjggMTcuMkw1MjMgMjU2bC05MC42IDc5LjdjLTUuMSA0LjUtNS41IDEyLjMtLjggMTcuMmw0My41IDQ2LjRjNC41IDQuOSAxMi4xIDUuMSAxNyAuNnpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKSxcclxuICBleGVjdXRlOiAodGF0ZTogVGV4dFN0YXRlLCBhcGk6IFRleHRBcGkpID0+IHtcclxuICAgIC8vIEFkanVzdCB0aGUgc2VsZWN0aW9uIHRvIGVuY29tcGFzcyB0aGUgd2hvbGUgd29yZCBpZiB0aGUgY2FyZXQgaXMgaW5zaWRlIG9uZVxyXG4gICAgY29uc3QgbmV3U2VsZWN0aW9uUmFuZ2UgPSBzZWxlY3RXb3JkKHsgdGV4dDogdGF0ZS50ZXh0LCBzZWxlY3Rpb246IHRhdGUuc2VsZWN0aW9uIH0pO1xyXG4gICAgY29uc3Qgc3RhdGUxID0gYXBpLnNldFNlbGVjdGlvblJhbmdlKG5ld1NlbGVjdGlvblJhbmdlKTtcclxuICAgIC8vIHdoZW4gdGhlcmUncyBubyBicmVha2luZyBsaW5lXHJcbiAgICBpZiAoc3RhdGUxLnNlbGVjdGVkVGV4dC5pbmRleE9mKCdcXG4nKSA9PT0gLTEpIHtcclxuICAgICAgYXBpLnJlcGxhY2VTZWxlY3Rpb24oYFxcYCR7c3RhdGUxLnNlbGVjdGVkVGV4dH1cXGBgKTtcclxuICAgICAgLy8gQWRqdXN0IHRoZSBzZWxlY3Rpb24gdG8gbm90IGNvbnRhaW4gdGhlICoqXHJcblxyXG4gICAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHN0YXRlMS5zZWxlY3Rpb24uc3RhcnQgKyAxO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25TdGFydCArIHN0YXRlMS5zZWxlY3RlZFRleHQubGVuZ3RoO1xyXG5cclxuICAgICAgYXBpLnNldFNlbGVjdGlvblJhbmdlKHtcclxuICAgICAgICBzdGFydDogc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgICAgZW5kOiBzZWxlY3Rpb25FbmQsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnJlYWtzQmVmb3JlQ291bnQgPSBnZXRCcmVha3NOZWVkZWRGb3JFbXB0eUxpbmVCZWZvcmUoc3RhdGUxLnRleHQsIHN0YXRlMS5zZWxlY3Rpb24uc3RhcnQpO1xyXG4gICAgY29uc3QgYnJlYWtzQmVmb3JlID0gQXJyYXkoYnJlYWtzQmVmb3JlQ291bnQgKyAxKS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICBjb25zdCBicmVha3NBZnRlckNvdW50ID0gZ2V0QnJlYWtzTmVlZGVkRm9yRW1wdHlMaW5lQWZ0ZXIoc3RhdGUxLnRleHQsIHN0YXRlMS5zZWxlY3Rpb24uZW5kKTtcclxuICAgIGNvbnN0IGJyZWFrc0FmdGVyID0gQXJyYXkoYnJlYWtzQWZ0ZXJDb3VudCArIDEpLmpvaW4oJ1xcbicpO1xyXG5cclxuICAgIGFwaS5yZXBsYWNlU2VsZWN0aW9uKGAke2JyZWFrc0JlZm9yZX1cXGBcXGBcXGBcXG4ke3N0YXRlMS5zZWxlY3RlZFRleHR9XFxuXFxgXFxgXFxgJHticmVha3NBZnRlcn1gKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHN0YXRlMS5zZWxlY3Rpb24uc3RhcnQgKyBicmVha3NCZWZvcmVDb3VudCArIDQ7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25TdGFydCArIHN0YXRlMS5zZWxlY3RlZFRleHQubGVuZ3RoO1xyXG5cclxuICAgIGFwaS5zZXRTZWxlY3Rpb25SYW5nZSh7XHJcbiAgICAgIHN0YXJ0OiBzZWxlY3Rpb25TdGFydCxcclxuICAgICAgZW5kOiBzZWxlY3Rpb25FbmQsXHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvZGVCbG9jazogSUNvbW1hbmQgPSB7XHJcbiAgbmFtZTogJ2NvZGVCbG9jaycsXHJcbiAga2V5Q29tbWFuZDogJ2NvZGVCbG9jaycsXHJcbiAgc2hvcnRjdXRzOiAnY3RybGNtZCtzaGlmdCtqJyxcclxuICBleGVjdXRlOiAodGF0ZTogVGV4dFN0YXRlLCBhcGk6IFRleHRBcGkpID0+IHtcclxuICAgIC8vIEFkanVzdCB0aGUgc2VsZWN0aW9uIHRvIGVuY29tcGFzcyB0aGUgd2hvbGUgd29yZCBpZiB0aGUgY2FyZXQgaXMgaW5zaWRlIG9uZVxyXG4gICAgY29uc3QgbmV3U2VsZWN0aW9uUmFuZ2UgPSBzZWxlY3RXb3JkKHsgdGV4dDogdGF0ZS50ZXh0LCBzZWxlY3Rpb246IHRhdGUuc2VsZWN0aW9uIH0pO1xyXG4gICAgY29uc3Qgc3RhdGUxID0gYXBpLnNldFNlbGVjdGlvblJhbmdlKG5ld1NlbGVjdGlvblJhbmdlKTtcclxuXHJcbiAgICBjb25zdCBicmVha3NCZWZvcmVDb3VudCA9IGdldEJyZWFrc05lZWRlZEZvckVtcHR5TGluZUJlZm9yZShzdGF0ZTEudGV4dCwgc3RhdGUxLnNlbGVjdGlvbi5zdGFydCk7XHJcbiAgICBjb25zdCBicmVha3NCZWZvcmUgPSBBcnJheShicmVha3NCZWZvcmVDb3VudCArIDEpLmpvaW4oJ1xcbicpO1xyXG5cclxuICAgIGNvbnN0IGJyZWFrc0FmdGVyQ291bnQgPSBnZXRCcmVha3NOZWVkZWRGb3JFbXB0eUxpbmVBZnRlcihzdGF0ZTEudGV4dCwgc3RhdGUxLnNlbGVjdGlvbi5lbmQpO1xyXG4gICAgY29uc3QgYnJlYWtzQWZ0ZXIgPSBBcnJheShicmVha3NBZnRlckNvdW50ICsgMSkuam9pbignXFxuJyk7XHJcblxyXG4gICAgYXBpLnJlcGxhY2VTZWxlY3Rpb24oYCR7YnJlYWtzQmVmb3JlfVxcYFxcYFxcYFxcbiR7c3RhdGUxLnNlbGVjdGVkVGV4dH1cXG5cXGBcXGBcXGAke2JyZWFrc0FmdGVyfWApO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gc3RhdGUxLnNlbGVjdGlvbi5zdGFydCArIGJyZWFrc0JlZm9yZUNvdW50ICsgNDtcclxuICAgIGNvbnN0IHNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvblN0YXJ0ICsgc3RhdGUxLnNlbGVjdGVkVGV4dC5sZW5ndGg7XHJcblxyXG4gICAgYXBpLnNldFNlbGVjdGlvblJhbmdlKHtcclxuICAgICAgc3RhcnQ6IHNlbGVjdGlvblN0YXJ0LFxyXG4gICAgICBlbmQ6IHNlbGVjdGlvbkVuZCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==