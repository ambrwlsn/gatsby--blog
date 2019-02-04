---
title: Day 3 - Psuedo Selectors
posttype: wilt
number: 3
---

I only just found out that `::before` (`:before`) and `::after` (`:after`) are psuedo elements, which are different from psuedo classes. Both of these are grouped under psuedo selectors. I like this quote from MDN ~

> Even the most skilled web developers are still amazed by what's possible using selectors.

Psuedo selectors are only two types of selectors. The others are: simple selectors, attribute selectors, multiple selectors and combinators. All of these help us to target and style HTML elements.

So, psuedo selectors include both psuedo elements and psuedo classes. They are added to the end of other selectors, and don't apply to whole elements, only parts of them.

The psuedo classes (e.g. `:hover`, `:focus`, and `:nth-of-type()` - plus 38 others) style elements in a _certain state_.

The psuedo elements (e.g. `::after`, `::before`, and `::first-letter` - plus 3 others, not including experimental ones) apparently need `::` rather than `:`, although I've used them with only one. These don't depend on the state of an element.

See this [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements) page for great examples and to use their awesome active learning playground (I did and it was great for learning)!