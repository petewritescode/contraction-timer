Synchronise useIntervalRender to round numbers.
Add auto-stop feature if left running.
Ensure unit tests are thorough (inc. hooks, etc).
Remove unused font weights from import.
Convert to PWA.
Move all styling variables into theme/helper functions.
Rename theme if not doing different variations.
Unit/integration test components.
Review entire codebase.
Display times differently? e.g. 4m 28s rather than 04:28.
Change 'contraction.duration === undefined' etc checks to simple truthy? It's highly unlikely they'll be zero.
For history view, move scrollbar to edge of page rather than within container - looks better on desktop.
Improve component folder structure - nest sub-components within parent?
