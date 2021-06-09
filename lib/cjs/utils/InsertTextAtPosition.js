"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertTextAtPosition;

/**
 * The MIT License
 * Copyright (c) 2018 Dmitriy Kubyshkin
 * Copied from https://github.com/grassator/insert-text-at-cursor
 */
var browserSupportsTextareaTextNodes;
/**
 * @param {HTMLElement} input
 * @return {boolean}
 */

function canManipulateViaTextNodes(input) {
  if (input.nodeName !== 'TEXTAREA') {
    return false;
  }

  if (typeof browserSupportsTextareaTextNodes === 'undefined') {
    var textarea = document.createElement('textarea');
    textarea.value = '1';
    browserSupportsTextareaTextNodes = !!textarea.firstChild;
  }

  return browserSupportsTextareaTextNodes;
}
/**
 * @param {HTMLTextAreaElement|HTMLInputElement} input
 * @param {string} text
 * @returns {void}
 */


function insertTextAtPosition(input, text) {
  // Most of the used APIs only work with the field selected
  input.focus(); // IE 8-10

  if (document.selection) {
    var ieRange = document.selection.createRange();
    ieRange.text = text; // Move cursor after the inserted text

    ieRange.collapse(false
    /* to the end */
    );
    ieRange.select();
    return;
  } // Webkit + Edge


  var isSuccess = document.execCommand('insertText', false, text);

  if (!isSuccess) {
    var start = input.selectionStart;
    var end = input.selectionEnd; // Firefox (non-standard method)

    if (typeof input.setRangeText === 'function') {
      input.setRangeText(text);
    } else {
      // To make a change we just need a Range, not a Selection
      var range = document.createRange();
      var textNode = document.createTextNode(text);

      if (canManipulateViaTextNodes(input)) {
        var node = input.firstChild; // If textarea is empty, just insert the text

        if (!node) {
          input.appendChild(textNode);
        } else {
          // Otherwise we need to find a nodes for start and end
          var offset = 0;
          var startNode = null;
          var endNode = null;

          while (node && (startNode === null || endNode === null)) {
            var nodeLength = node.nodeValue.length; // if start of the selection falls into current node

            if (start >= offset && start <= offset + nodeLength) {
              range.setStart(startNode = node, start - offset);
            } // if end of the selection falls into current node


            if (end >= offset && end <= offset + nodeLength) {
              range.setEnd(endNode = node, end - offset);
            }

            offset += nodeLength;
            node = node.nextSibling;
          } // If there is some text selected, remove it as we should replace it


          if (start !== end) {
            range.deleteContents();
          }
        }
      } // If the node is a textarea and the range doesn't span outside the element
      //
      // Get the commonAncestorContainer of the selected range and test its type
      // If the node is of type `#text` it means that we're still working with text nodes within our textarea element
      // otherwise, if it's of type `#document` for example it means our selection spans outside the textarea.


      if (canManipulateViaTextNodes(input) && range.commonAncestorContainer.nodeName === '#text') {
        // Finally insert a new node. The browser will automatically split start and end nodes into two if necessary
        range.insertNode(textNode);
      } else {
        // If the node is not a textarea or the range spans outside a textarea the only way is to replace the whole value
        var value = input.value;
        input.value = value.slice(0, start) + text + value.slice(end);
      }
    } // Correct the cursor position to be at the end of the insertion


    input.setSelectionRange(start + text.length, start + text.length); // Notify any possible listeners of the change

    var e = document.createEvent('UIEvent');
    e.initEvent('input', true, false);
    input.dispatchEvent(e);
  }
}

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9JbnNlcnRUZXh0QXRQb3NpdGlvbi50cyJdLCJuYW1lcyI6WyJicm93c2VyU3VwcG9ydHNUZXh0YXJlYVRleHROb2RlcyIsImNhbk1hbmlwdWxhdGVWaWFUZXh0Tm9kZXMiLCJpbnB1dCIsIm5vZGVOYW1lIiwidGV4dGFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRUZXh0QXRQb3NpdGlvbiIsInRleHQiLCJmb2N1cyIsInNlbGVjdGlvbiIsImllUmFuZ2UiLCJjcmVhdGVSYW5nZSIsImNvbGxhcHNlIiwic2VsZWN0IiwiaXNTdWNjZXNzIiwiZXhlY0NvbW1hbmQiLCJzdGFydCIsInNlbGVjdGlvblN0YXJ0IiwiZW5kIiwic2VsZWN0aW9uRW5kIiwic2V0UmFuZ2VUZXh0IiwicmFuZ2UiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwibm9kZSIsImFwcGVuZENoaWxkIiwib2Zmc2V0Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsIm5vZGVMZW5ndGgiLCJub2RlVmFsdWUiLCJsZW5ndGgiLCJzZXRTdGFydCIsInNldEVuZCIsIm5leHRTaWJsaW5nIiwiZGVsZXRlQ29udGVudHMiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsImluc2VydE5vZGUiLCJzbGljZSIsInNldFNlbGVjdGlvblJhbmdlIiwiZSIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxnQ0FBSjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLHlCQUFULENBQW1DQyxLQUFuQyxFQUFrRjtBQUNoRixNQUFJQSxLQUFLLENBQUNDLFFBQU4sS0FBbUIsVUFBdkIsRUFBbUM7QUFDakMsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxPQUFPSCxnQ0FBUCxLQUE0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LEtBQUssS0FBS0UsR0FBZCxFQUFtQjtBQUNqQkcsWUFBQUEsS0FBSyxDQUFDYyxjQUFOO0FBQ0Q7QUFDRjtBQUNGLE9BdkNJLENBeUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFVBQUlyQyx5QkFBeUIsQ0FBQ0MsS0FBRCxDQUF6QixJQUFvQ3NCLEtBQUssQ0FBQ2UsdUJBQU4sQ0FBOEJwQyxRQUE5QixLQUEyQyxPQUFuRixFQUE0RjtBQUMxRjtBQUNBcUIsUUFBQUEsS0FBSyxDQUFDZ0IsVUFBTixDQUFpQmYsUUFBakI7QUFDRCxPQUhELE1BR087QUFDTDtBQUNBLFlBQU1sQixLQUFLLEdBQUdMLEtBQUssQ0FBQ0ssS0FBcEI7QUFDQUwsUUFBQUEsS0FBSyxDQUFDSyxLQUFOLEdBQWNBLEtBQUssQ0FBQ2tDLEtBQU4sQ0FBWSxDQUFaLEVBQWV0QixLQUFmLElBQXdCVCxJQUF4QixHQUErQkgsS0FBSyxDQUFDa0MsS0FBTixDQUFZcEIsR0FBWixDQUE3QztBQUNEO0FBQ0YsS0E1RGEsQ0E4RGQ7OztBQUNBbkIsSUFBQUEsS0FBSyxDQUFDd0MsaUJBQU4sQ0FBd0J2QixLQUFLLEdBQUdULElBQUksQ0FBQ3dCLE1BQXJDLEVBQTZDZixLQUFLLEdBQUdULElBQUksQ0FBQ3dCLE1BQTFELEVBL0RjLENBaUVkOztBQUNBLFFBQU1TLENBQUMsR0FBR3RDLFFBQVEsQ0FBQ3VDLFdBQVQsQ0FBcUIsU0FBckIsQ0FBVjtBQUNBRCxJQUFBQSxDQUFDLENBQUNFLFNBQUYsQ0FBWSxPQUFaLEVBQXFCLElBQXJCLEVBQTJCLEtBQTNCO0FBQ0EzQyxJQUFBQSxLQUFLLENBQUM0QyxhQUFOLENBQW9CSCxDQUFwQjtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhlIE1JVCBMaWNlbnNlXHJcbiAqIENvcHlyaWdodCAoYykgMjAxOCBEbWl0cml5IEt1YnlzaGtpblxyXG4gKiBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZ3Jhc3NhdG9yL2luc2VydC10ZXh0LWF0LWN1cnNvclxyXG4gKi9cclxuXHJcbmxldCBicm93c2VyU3VwcG9ydHNUZXh0YXJlYVRleHROb2RlczogYW55O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlucHV0XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBjYW5NYW5pcHVsYXRlVmlhVGV4dE5vZGVzKGlucHV0OiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCkge1xyXG4gIGlmIChpbnB1dC5ub2RlTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGJyb3dzZXJTdXBwb3J0c1RleHRhcmVhVGV4dE5vZGVzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc3QgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgdGV4dGFyZWEudmFsdWUgPSAnMSc7XHJcbiAgICBicm93c2VyU3VwcG9ydHNUZXh0YXJlYVRleHROb2RlcyA9ICEhdGV4dGFyZWEuZmlyc3RDaGlsZDtcclxuICB9XHJcbiAgcmV0dXJuIGJyb3dzZXJTdXBwb3J0c1RleHRhcmVhVGV4dE5vZGVzO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MVGV4dEFyZWFFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9IGlucHV0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zZXJ0VGV4dEF0UG9zaXRpb24oaW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50LCB0ZXh0OiBzdHJpbmcpIHtcclxuICAvLyBNb3N0IG9mIHRoZSB1c2VkIEFQSXMgb25seSB3b3JrIHdpdGggdGhlIGZpZWxkIHNlbGVjdGVkXHJcbiAgaW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgLy8gSUUgOC0xMFxyXG4gIGlmICgoZG9jdW1lbnQgYXMgYW55KS5zZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IGllUmFuZ2UgPSAoZG9jdW1lbnQgYXMgYW55KS5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICAgIGllUmFuZ2UudGV4dCA9IHRleHQ7XHJcblxyXG4gICAgLy8gTW92ZSBjdXJzb3IgYWZ0ZXIgdGhlIGluc2VydGVkIHRleHRcclxuICAgIGllUmFuZ2UuY29sbGFwc2UoZmFsc2UgLyogdG8gdGhlIGVuZCAqLyk7XHJcbiAgICBpZVJhbmdlLnNlbGVjdCgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFdlYmtpdCArIEVkZ2VcclxuICBjb25zdCBpc1N1Y2Nlc3MgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0KTtcclxuICBpZiAoIWlzU3VjY2Vzcykge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydCE7XHJcbiAgICBjb25zdCBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQhO1xyXG4gICAgLy8gRmlyZWZveCAobm9uLXN0YW5kYXJkIG1ldGhvZClcclxuICAgIGlmICh0eXBlb2YgaW5wdXQuc2V0UmFuZ2VUZXh0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGlucHV0LnNldFJhbmdlVGV4dCh0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRvIG1ha2UgYSBjaGFuZ2Ugd2UganVzdCBuZWVkIGEgUmFuZ2UsIG5vdCBhIFNlbGVjdGlvblxyXG4gICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XHJcblxyXG4gICAgICBpZiAoY2FuTWFuaXB1bGF0ZVZpYVRleHROb2RlcyhpbnB1dCkpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGlucHV0LmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgICAgIC8vIElmIHRleHRhcmVhIGlzIGVtcHR5LCBqdXN0IGluc2VydCB0aGUgdGV4dFxyXG4gICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBPdGhlcndpc2Ugd2UgbmVlZCB0byBmaW5kIGEgbm9kZXMgZm9yIHN0YXJ0IGFuZCBlbmRcclxuICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgICAgbGV0IHN0YXJ0Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICBsZXQgZW5kTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKG5vZGUgJiYgKHN0YXJ0Tm9kZSA9PT0gbnVsbCB8fCBlbmROb2RlID09PSBudWxsKSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlTGVuZ3RoID0gbm9kZS5ub2RlVmFsdWUhLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHN0YXJ0IG9mIHRoZSBzZWxlY3Rpb24gZmFsbHMgaW50byBjdXJyZW50IG5vZGVcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID49IG9mZnNldCAmJiBzdGFydCA8PSBvZmZzZXQgKyBub2RlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoKHN0YXJ0Tm9kZSA9IG5vZGUpLCBzdGFydCAtIG9mZnNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGVuZCBvZiB0aGUgc2VsZWN0aW9uIGZhbGxzIGludG8gY3VycmVudCBub2RlXHJcbiAgICAgICAgICAgIGlmIChlbmQgPj0gb2Zmc2V0ICYmIGVuZCA8PSBvZmZzZXQgKyBub2RlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kKChlbmROb2RlID0gbm9kZSksIGVuZCAtIG9mZnNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9mZnNldCArPSBub2RlTGVuZ3RoO1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBzb21lIHRleHQgc2VsZWN0ZWQsIHJlbW92ZSBpdCBhcyB3ZSBzaG91bGQgcmVwbGFjZSBpdFxyXG4gICAgICAgICAgaWYgKHN0YXJ0ICE9PSBlbmQpIHtcclxuICAgICAgICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIElmIHRoZSBub2RlIGlzIGEgdGV4dGFyZWEgYW5kIHRoZSByYW5nZSBkb2Vzbid0IHNwYW4gb3V0c2lkZSB0aGUgZWxlbWVudFxyXG4gICAgICAvL1xyXG4gICAgICAvLyBHZXQgdGhlIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIG9mIHRoZSBzZWxlY3RlZCByYW5nZSBhbmQgdGVzdCBpdHMgdHlwZVxyXG4gICAgICAvLyBJZiB0aGUgbm9kZSBpcyBvZiB0eXBlIGAjdGV4dGAgaXQgbWVhbnMgdGhhdCB3ZSdyZSBzdGlsbCB3b3JraW5nIHdpdGggdGV4dCBub2RlcyB3aXRoaW4gb3VyIHRleHRhcmVhIGVsZW1lbnRcclxuICAgICAgLy8gb3RoZXJ3aXNlLCBpZiBpdCdzIG9mIHR5cGUgYCNkb2N1bWVudGAgZm9yIGV4YW1wbGUgaXQgbWVhbnMgb3VyIHNlbGVjdGlvbiBzcGFucyBvdXRzaWRlIHRoZSB0ZXh0YXJlYS5cclxuICAgICAgaWYgKGNhbk1hbmlwdWxhdGVWaWFUZXh0Tm9kZXMoaW5wdXQpICYmIHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XHJcbiAgICAgICAgLy8gRmluYWxseSBpbnNlcnQgYSBuZXcgbm9kZS4gVGhlIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHNwbGl0IHN0YXJ0IGFuZCBlbmQgbm9kZXMgaW50byB0d28gaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZSh0ZXh0Tm9kZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIG5vZGUgaXMgbm90IGEgdGV4dGFyZWEgb3IgdGhlIHJhbmdlIHNwYW5zIG91dHNpZGUgYSB0ZXh0YXJlYSB0aGUgb25seSB3YXkgaXMgdG8gcmVwbGFjZSB0aGUgd2hvbGUgdmFsdWVcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgc3RhcnQpICsgdGV4dCArIHZhbHVlLnNsaWNlKGVuZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3JyZWN0IHRoZSBjdXJzb3IgcG9zaXRpb24gdG8gYmUgYXQgdGhlIGVuZCBvZiB0aGUgaW5zZXJ0aW9uXHJcbiAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIHRleHQubGVuZ3RoLCBzdGFydCArIHRleHQubGVuZ3RoKTtcclxuXHJcbiAgICAvLyBOb3RpZnkgYW55IHBvc3NpYmxlIGxpc3RlbmVycyBvZiB0aGUgY2hhbmdlXHJcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1VJRXZlbnQnKTtcclxuICAgIGUuaW5pdEV2ZW50KCdpbnB1dCcsIHRydWUsIGZhbHNlKTtcclxuICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==