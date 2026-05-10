---
title: '文檔'
description: '追蹤某時某地的天體視運動軌跡'
titleAppend: false
---

::: hero layout:split glow:false

# Star Path Viewer

全天星軌追蹤在線天文工具

::: button "使用指南" ./guides/location.md icon:telescope
::: button "GitHub" external:https://github.com/stardial-astro/star-path-viewer color:#333 icon:github

== side
<img src="../../assets/images/latest/spv-preview-dark.png" alt="預覽" width="280" class="img-dark align-center">
<img src="../../assets/images/latest/spv-preview-light.png" alt="預覽" width="280" class="img-light align-center">
:::

## :rocket: 開始 {#quick-start}

[Star Path Viewer][] 根據輸入信息計算選定天體於一天之內在天球上的[視運動][apparent motion]軌跡。生成的結果包含一個展示星軌的[地平座標系][horizontal coordinate system]投影圖以及一個包含升落、中天、晨昏蒙影數據的表格。

**第一步：** 指定[`地理位置`][Location Input]、[`當地日期`][Date Input]並[`選擇天體`][Star Input]。

**第二步：** 點擊[`繪製星軌`][Draw]按鈕。結果將顯示在按鈕下方。

::: callout tip "除此之外，也可作為便捷小工具使用"
:bulb: 這個地點的**經緯度**是多少？→ [搜索地址][Search Address]
:bulb: 今年的**春分/夏至/秋分/冬至**是哪天？→ [二分二至][Quick Entry]
:bulb: 這顆星的**依巴谷星表編號**是多少？→ [搜索星名/依巴谷星表][HIP]
:bulb: 這顆星的**中文名**是什麼？→ [搜索中文星名][Chinese name]
:bulb: 今晚什麼時間天色足夠暗到能看到**極光/流星雨**→ [查看日落和黃昏時刻][Anno]
:bulb: 我該如何規劃**天文攝影**的時間？→ [查看晨昏蒙影時刻][Anno]

[Search Address]: ./guides/location/#search-address
[Quick Entry]: ./guides/date/#look-up-season
[HIP]: ./guides/star/#search-hip-by-number
[Chinese name]: ./guides/star/#search-hip-by-chinese-name
[Anno]: ./guides/results/#legend-and-table

:::

[Star Path Viewer]: https://star-path-viewer.pages.dev/
[apparent motion]: https://zh.wikipedia.org/wiki/%E5%91%A8%E6%97%A5%E9%81%8B%E5%8B%95
[horizontal coordinate system]: https://zh.wikipedia.org/wiki/%E5%9C%B0%E5%B9%B3%E5%9D%90%E6%A8%99%E7%B3%BB
[Location Input]: ./guides/location
[Date Input]: ./guides/date
[Star Input]: ./guides/star
[Draw]: ./guides/results

## :sparkles: 功能亮點 {#highlights}

::: grids
::: grid
::: card "跨越古今" icon:pyramid
支持查詢**公元前3001年**至**公元3000年**間任意一天。
:::
:::
::: grid
::: card "權威數據" icon:atom
基於全球天文機構**權威數據源**和**專業科學庫**精心構建。
:::
:::
::: grid
::: card "直觀呈現" icon:sparkles
描繪直觀完整的全天**星軌**圖像，並配以明晰的**註釋**。
:::
:::
::: grid
::: card "晨昏蒙影" icon:sunset
標記天體**升落**和**過中天**的時刻及其在不同**晨昏蒙影**階段的位置。
:::
:::
::: grid
::: card "多種日曆" icon:calendars
支持**格里曆**與**儒略曆**日期輸入與顯示，同時支持**農曆**日期顯示。
:::
:::
::: grid
::: card "二分二至" icon:zodiac-aries
指定年份和地點可便捷獲得**春分**、**夏至**、**秋分**和**冬至**日期。
:::
:::
:::
