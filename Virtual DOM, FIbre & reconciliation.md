<!-- What does createRoot() do? it creates a DOM-like structure behind the scenes, then compares it's with main DOM and updates only those components that have been actually updated
But the browser, removes whole DOM & repaints it hence the loading icon this is called Page Reload
Virtual DOM? here changes can be tracked and specific changes can be also kept/inserted
Suppose some components are network-dependent?
Better words upcoming:
 -->

!!React Fibre!! comes to rescue: The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
headline feature: incremental rendering; the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
Hydration: the moment when javascript gets injected

reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.

update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." 
A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

VERY IMPORTANT
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

The key points are:

In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

WHAT'S FIBER?
-pause work and come back to it later.
-assign priority to different types of work.
-reuse previously completed work.
-abort work if it's no longer needed.

