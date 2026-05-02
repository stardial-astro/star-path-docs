---
title: '说明文档'
description: '追踪某时某地的天体视运动轨迹'
titleAppend: false
---

::: hero layout:split glow:false

# 欢迎使用 Star&nbsp;Path&nbsp;Viewer

追踪天体视运动轨迹的天文应用。

::: button "使用指南" ./guides/location.md icon:telescope
::: button "GitHub" external:https://github.com/stardial-astro/star-path-viewer color:#333 icon:github

== side
<img src="../../assets/images/spv-preview-dark.png" alt="预览" width="280" class="img-dark align-center">
<img src="../../assets/images/spv-preview-light.png" alt="预览" width="280" class="img-light align-center">
:::

## :rocket: 开始 {#quick-start}

[Star Path Viewer][] 根据提供的信息计算选定天体于一天之内在天球上的[视运动][apparent motion]轨迹。生成的结果包含一个展示轨迹的[地平坐标系][horizontal coordinate system]投影图以及一个包含升落、中天、晨昏蒙影数据的表格。

**第一步：** 指定[`地理位置`][Location Input]、[`当地日期`][Date Input] 并[`选择天体`][Star Input]。

**第二步：** 点击[`绘制星轨`][Draw]按钮。结果将显示在按钮下方。

::: callout tip "除此之外，也可作为便捷小工具使用"
**→** [根据地址查询某地的**经纬度**][Search Address]
**→** [获得某年某地的**二分二至**日期][Quick Entry]
**→** [查看**不同日历**下的日期][Enter Date]
**→** [根据星名查找某颗星的**依巴谷星表编号**，或根据编号查询它的名称][HIP]
**→** [通过查询当晚将出现的某颗星，得知当天的**日落和黄昏时刻**，从而判断观看极光或流星雨的理想时间。][Anno]

[Search Address]: ./guides/location/#search-address
[Quick Entry]: ./guides/date/#look-up-season
[Enter Date]: ./guides/date/#enter-date
[HIP]: ./guides/star/#search-hip
[Anno]: ./guides/results/#legend-and-table

:::

[Star Path Viewer]: https://star-path-viewer.pages.dev/
[apparent motion]: https://zh.wikipedia.org/wiki/%E5%91%A8%E6%97%A5%E9%81%8B%E5%8B%95
[horizontal coordinate system]: https://zh.wikipedia.org/wiki/%E5%9C%B0%E5%B9%B3%E5%9D%90%E6%A8%99%E7%B3%BB
[Location Input]: ./guides/location
[Date Input]: ./guides/date
[Star Input]: ./guides/star
[Draw]: ./guides/results

## :sparkles: 功能亮点 {#highlights}

::: grids
::: grid
::: card "跨越古今" icon:pyramid
支持查询**公元前3001年**至**公元3000年**间任意一天。
:::
:::
::: grid
::: card "晨昏蒙影" icon:sunrise
标记天体**升落**和**过中天**的时刻及其在不同**晨昏蒙影**阶段的位置。
:::
:::
::: grid
::: card "多历日期" icon:calendars
输入和显示日期支持**格里历**和**儒略历**，可同时显示**农历**。
:::
:::
::: grid
::: card "二分二至" icon:orbit
指定年份和地点可便捷获得**春分**、**夏至**、**秋分**和**冬至**日期。
:::
:::
:::
