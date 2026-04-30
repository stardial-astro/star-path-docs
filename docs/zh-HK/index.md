---
title: '説明文檔'
description: '追蹤某時某地的天體視運動軌跡'
titleAppend: false
---

::: hero

# 歡迎使用 Star&nbsp;Path&nbsp;Viewer

<img src="../../assets/images/spv-preview-dark.png" alt="預覽" width="300" class="img-dark size-medium align-center">
<img src="../../assets/images/spv-preview-light.png" alt="預覽" width="300" class="img-light size-medium align-center">

追蹤天體視運動軌跡的天文應用。

::: button "使用指南" ./guides/location.md icon:telescope
::: button "GitHub" external:https://github.com/stardial-astro/star-path-viewer color:#333 icon:github
:::

## :rocket: 開始

[Star Path Viewer][] 根據提供的信息計算選定天體於一天之內在天球上的[視運動][apparent motion]軌跡。生成的結果包含一個展示軌跡的[地平座標系][horizontal coordinate system]投影圖以及一個包含升落、中天、晨昏蒙影數據的表格。

- **一、** 指定[`地理位置`][Location Input]、[`當地日期`][Date Input] 並[`選擇天體`][Star Input]。

- **二、** 點擊[`繪製星軌`][Draw]按鈕。結果將顯示在按鈕下方。

::: callout tip "除此之外，也可作為便捷小工具使用"
[:arrow_right: 根據地址查詢某地的**經緯度**][Search Address]
[:arrow_right: 獲得某年某地的**二分二至**日期][Quick Entry]
[:arrow_right: 查看不同日曆下的日期][Enter Date]
[:arrow_right: 根據星名檢索依巴谷星表編號，或根據編號檢索名稱][HIP]
[:arrow_right: 通過查詢當晚將出現的某顆星，得知當天的日落和黃昏時刻，從而判斷觀看極光或流星雨的理想時間。][Anno]

[Search Address]: /guides/location/#搜索地址
[Quick Entry]: /guides/date/#look-up-an-equinoxsolstice
[Enter Date]: /guides/date/#enter-a-date-in-the-gregorian-or-julian-calendar
[HIP]: /guides/star
[Anno]: /guides/results
:::

[Star Path Viewer]: https://star-path-viewer.pages.dev/
[apparent motion]: https://zh.wikipedia.org/wiki/%E5%91%A8%E6%97%A5%E9%81%8B%E5%8B%95
[horizontal coordinate system]: https://zh.wikipedia.org/wiki/%E5%9C%B0%E5%B9%B3%E5%9D%90%E6%A8%99%E7%B3%BB
[Location Input]: /guides/location
[Date Input]: /guides/date
[Star Input]: /guides/star
[Draw]: /guides/results

## :dart: 特色功能

::: grids
::: grid
::: card "跨越古今" icon:pyramid
支持查詢**公元前3001年**至**公元3000年**間任意一天。
:::
:::
::: grid
::: card "晨昏蒙影" icon:sunrise
標記**晨昏蒙影**、**升落點**和**過中天**時刻及天體位置。
:::
:::
::: grid
::: card "多歷日期" icon:calendars
輸入和顯示日期支持格里曆和儒略曆，可同時顯示農曆。
:::
:::
::: grid
::: card "二分二至" icon:orbit
指定年份和地點可便捷獲得春分、夏至、秋分和冬至日期。
:::
:::
:::
