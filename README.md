# PieChartComponent

PieChartComponent is a simple ReactJS component designed to render simple Pie Charts (circular statistical graphics).

It was implemented for didactic reasons, therefore it is not yet ready for production (see [Next steps](#next-steps) section below).

The following snippet/screenshot presents the basic usage:

```
import PieChart from '../PieChart'

???
```

![BasicUsage.png](BasicUsage.png)

## Instructions to run

It uses [Storybook](https://storybook.js.org/) tool for UI development (since it does not contain a standalone application), so basically:

```
git clone https://github.com/samereberlin/PieChartComponent.git
cd PieChartComponent
npm i
npm start
```

## Next steps

The component still needs a lot of adjustments to reach the production level, and the list below presents the main/urgent needs according to my feeling...

- Replace CSS solution with a more robust SVG drawing, in order to allow effects such as hovering and click feedback.

- Improve workaround for rendering discrepant values (e.g. 97%, 2%, 1%).

- Write unit-tests and end-to-end tests (at least to cover basic functionalities).
