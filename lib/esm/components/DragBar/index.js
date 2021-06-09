import React, { useEffect, useMemo, useRef } from 'react';
import "./index.css";

var DragBar = function DragBar(props) {
  var _ref = props || {},
      prefixCls = _ref.prefixCls,
      onChange = _ref.onChange;

  var dragRef = useRef();

  function handleMouseMove(event) {
    if (dragRef.current) {
      var newHeight = dragRef.current.height + event.clientY - dragRef.current.dragY;

      if (newHeight >= props.minHeight && newHeight <= props.maxHeight) {
        onChange && onChange(dragRef.current.height + (event.clientY - dragRef.current.dragY));
      }
    }
  }

  function handleMouseUp() {
    dragRef.current = undefined;
  }

  function handleMouseDown(event) {
    dragRef.current = {
      height: props.height,
      dragY: event.clientY
    };
  }

  useEffect(function () {
    if (document) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return function () {
      if (document) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, []);
  var svg = useMemo(function () {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 512 512",
      height: "100%"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
    }));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-bar"),
    onMouseDown: handleMouseDown
  }, svg);
};

export default DragBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RyYWdCYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsIkRyYWdCYXIiLCJwcm9wcyIsInByZWZpeENscyIsIm9uQ2hhbmdlIiwiZHJhZ1JlZiIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY3VycmVudCIsIm5ld0hlaWdodCIsImhlaWdodCIsImNsaWVudFkiLCJkcmFnWSIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImhhbmRsZU1vdXNlVXAiLCJ1bmRlZmluZWQiLCJoYW5kbGVNb3VzZURvd24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3ZnIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixFQUEyQkMsT0FBM0IsRUFBb0NDLE1BQXBDLFFBQWtELE9BQWxEO0FBRUE7O0FBU0EsSUFBTUMsT0FBZ0MsR0FBRyxTQUFuQ0EsT0FBbUMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xELGFBQWdDQSxLQUFLLElBQUksRUFBekM7QUFBQSxNQUFRQyxTQUFSLFFBQVFBLFNBQVI7QUFBQSxNQUFtQkMsUUFBbkIsUUFBbUJBLFFBQW5COztBQUNBLE1BQU1DLE9BQU8sR0FBR0wsTUFBTSxFQUF0Qjs7QUFDQSxXQUFTTSxlQUFULENBQXlCQyxLQUF6QixFQUE0QztBQUMxQyxRQUFJRixPQUFPLENBQUNHLE9BQVosRUFBcUI7QUFDbkIsVUFBTUMsU0FBUyxHQUFHSixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JFLE1BQWhCLEdBQXlCSCxLQUFLLENBQUNJLE9BQS9CLEdBQXlDTixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JJLEtBQTNFOztBQUNBLFVBQUlILFNBQVMsSUFBSVAsS0FBSyxDQUFDVyxTQUFuQixJQUFnQ0osU0FBUyxJQUFJUCxLQUFLLENBQUNZLFNBQXZELEVBQWtFO0FBQ2hFVixRQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDRyxPQUFSLENBQWdCRSxNQUFoQixJQUEwQkgsS0FBSyxDQUFDSSxPQUFOLEdBQWdCTixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JJLEtBQTFELENBQUQsQ0FBcEI7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsV0FBU0csYUFBVCxHQUF5QjtBQUN2QlYsSUFBQUEsT0FBTyxDQUFDRyxPQUFSLEdBQWtCUSxTQUFsQjtBQUNEOztBQUNELFdBQVNDLGVBQVQsQ0FBeUJWLEtBQXpCLEVBQThFO0FBQzVFRixJQUFBQSxPQUFPLENBQUNHLE9BQVIsR0FBa0I7QUFDaEJFLE1BQUFBLE1BQU0sRUFBRVIsS0FBSyxDQUFDUSxNQURFO0FBRWhCRSxNQUFBQSxLQUFLLEVBQUVMLEtBQUssQ0FBQ0k7QUFGRyxLQUFsQjtBQUlEOztBQUVEYixFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlvQixRQUFKLEVBQWM7QUFDWkEsTUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q2IsZUFBdkM7QUFDQVksTUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0osYUFBckM7QUFDRDs7QUFDRCxXQUFPLFlBQU07QUFDWCxVQUFJRyxRQUFKLEVBQWM7QUFDWkEsUUFBQUEsUUFBUSxDQUFDRSxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ2QsZUFBMUM7QUFDQVksUUFBQUEsUUFBUSxDQUFDRSxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q0wsYUFBeEM7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBWUEsTUFBTU0sR0FBRyxHQUFHdEIsT0FBTyxDQUNqQjtBQUFBLHdCQUNFO0FBQUssTUFBQSxPQUFPLEVBQUMsYUFBYjtBQUEyQixNQUFBLE1BQU0sRUFBQztBQUFsQyxvQkFDRTtBQUNFLE1BQUEsSUFBSSxFQUFDLGNBRFA7QUFFRSxNQUFBLENBQUMsRUFBQztBQUZKLE1BREYsQ0FERjtBQUFBLEdBRGlCLEVBU2pCLEVBVGlCLENBQW5CO0FBV0Esc0JBQ0U7QUFBSyxJQUFBLFNBQVMsWUFBS0ksU0FBTCxTQUFkO0FBQW9DLElBQUEsV0FBVyxFQUFFYztBQUFqRCxLQUNHSSxHQURILENBREY7QUFLRCxDQWpERDs7QUFtREEsZUFBZXBCLE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ0JhclByb3BzIGV4dGVuZHMgSVByb3BzIHtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBtYXhIZWlnaHQ6IG51bWJlcjtcclxuICBtaW5IZWlnaHQ6IG51bWJlcjtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERyYWdCYXI6IFJlYWN0LkZDPElEcmFnQmFyUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcmVmaXhDbHMsIG9uQ2hhbmdlIH0gPSBwcm9wcyB8fCB7fTtcclxuICBjb25zdCBkcmFnUmVmID0gdXNlUmVmPHsgaGVpZ2h0OiBudW1iZXI7IGRyYWdZOiBudW1iZXIgfT4oKTtcclxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmIChkcmFnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gZHJhZ1JlZi5jdXJyZW50LmhlaWdodCArIGV2ZW50LmNsaWVudFkgLSBkcmFnUmVmLmN1cnJlbnQuZHJhZ1k7XHJcbiAgICAgIGlmIChuZXdIZWlnaHQgPj0gcHJvcHMubWluSGVpZ2h0ICYmIG5ld0hlaWdodCA8PSBwcm9wcy5tYXhIZWlnaHQpIHtcclxuICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShkcmFnUmVmLmN1cnJlbnQuaGVpZ2h0ICsgKGV2ZW50LmNsaWVudFkgLSBkcmFnUmVmLmN1cnJlbnQuZHJhZ1kpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCkge1xyXG4gICAgZHJhZ1JlZi5jdXJyZW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XHJcbiAgICBkcmFnUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxyXG4gICAgICBkcmFnWTogZXZlbnQuY2xpZW50WSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50KSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzdmcgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKFxyXG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICBkPVwiTTMwNCAyNTZjMCAyNi41LTIxLjUgNDgtNDggNDhzLTQ4LTIxLjUtNDgtNDggMjEuNS00OCA0OC00OCA0OCAyMS41IDQ4IDQ4em0xMjAtNDhjLTI2LjUgMC00OCAyMS41LTQ4IDQ4czIxLjUgNDggNDggNDggNDgtMjEuNSA0OC00OC0yMS41LTQ4LTQ4LTQ4em0tMzM2IDBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4czIxLjUgNDggNDggNDggNDgtMjEuNSA0OC00OC0yMS41LTQ4LTQ4LTQ4elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgW10sXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tYmFyYH0gb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn0+XHJcbiAgICAgIHtzdmd9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZ0JhcjtcclxuIl19