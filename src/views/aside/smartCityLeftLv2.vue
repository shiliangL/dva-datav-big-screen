<template>
  <div class="base-panel">
    <div class="base-panel-border">
      <div class="base-panel-border-outline"></div>
      <div class="base-panel-border-adorn base-panel-border-adorn-right"></div>
      <div class="base-panel-border-adorn base-panel-border-adorn-bottom"></div>
      <div class="base-panel-border-adorn base-panel-border-adorn-left"></div>
    </div>
    <div class="base-panel-title">
      <div class="base-panel-title-content">
        工单协同处置流程
      </div>
    </div>
    <div class="base-panel-content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartCityLeftLv2'
}
</script>

<style lang="scss" scoped>
.base-panel {
  height: 300px;
  width: 100%;
  position: relative;

  --bgColor: linear-gradient(135deg, #5efce8 10%, #736efe 100%);
  --titleBgColor: #61eeea;

  --titleHeight: 40px;
  --topleftX: 0px; /* 左上角坐标x */
  --topleftY: 10px; /* 左上角坐标y */
  --cornerGap: 10px; /* 角落空隙 */
  --topLength: 250px; /* 顶部长度 */
  --slopeWidth: 10px; /* 斜坡宽度 */
  --topRightX: 100%; /* 右上角坐标x */
  --topRightY: var(--topleftY); /* 右上角坐标y */
  --concaveLength: 40%; /* 凹陷长度 */
  --bottomRightX: var(--topRightX); /* 右下角坐标x */
  --bottomRightY: 100%; /* 右下角坐标y */
  --bottomLeftX: var(--topleftX); /* 左下角坐标x */
  --bottomLeftY: var(--bottomRightY); /* 左下角坐标y */

  --topleftCoord1X: calc(
    var(--topleftX) + var(--cornerGap)
  ); /* 左上角第一个的坐标x */
  --topleftCoord1Y: var(--topRightY); /* 左上角第一个的坐标y */
  --topleftCoord2X: var(--topleftX); /* 左上角第二个的坐标x */
  --topleftCoord2Y: calc(
    var(--topleftY) + var(--cornerGap)
  ); /* 左上角第二个的坐标y */
  --slopeCoord1X: calc(
    50% - var(--topLength) / 2 - var(--slopeWidth)
  ); /* 顶部坡度第一个坐标x */
  --slopeCoord1Y: var(--topleftY); /* 顶部第一个坡度y */
  --slopeCoord2X: calc(
    var(--slopeCoord1X) + var(--slopeWidth)
  ); /* 顶部坡度第二个坐标x */
  --slopeCoord2Y: 0px; /* 顶部坡度第二个坐标y */
  --slopeCoord3X: calc(
    var(--slopeCoord2X) + var(--topLength)
  ); /* 顶部坡度第三个坐标x */
  --slopeCoord3Y: 0px; /* 顶部坡度第三个坐标y */
  --slopeCoord4X: calc(
    var(--slopeCoord3X) + var(--slopeWidth)
  ); /* 顶部坡度第四个坐标x */
  --slopeCoord4Y: var(--topleftY); /* 顶部第四个坡度y */
  --toprightCoord1X: calc(
    var(--topRightX) - var(--cornerGap)
  ); /* 右上角第一个的坐标x */
  --toprightCoord1Y: var(--topRightY); /* 右上角第一个的坐标y */
  --toprightCoord2X: var(--topRightX); /* 右上角第二个的坐标x */
  --toprightCoord2Y: calc(
    var(--topRightY) + var(--cornerGap)
  ); /* 右上角第二个的坐标y */
  --concaveRight1X: var(--topRightX); /* 右侧凹陷第一个x */
  --concaveRight1Y: calc(50% - var(--concaveLength) / 2); /* 左侧凹陷第一个y */
  --concaveRight2X: var(--toprightCoord1X); /* 右侧凹陷第二个x */
  --concaveRight2Y: calc(
    var(--concaveRight1Y) + var(--slopeWidth)
  ); /* 左侧凹陷第二个y */
  --concaveRight3X: var(--concaveRight2X); /* 右侧凹陷第三个x */
  --concaveRight3Y: calc(
    var(--concaveRight2Y) + var(--concaveLength)
  ); /* 左侧凹陷第三个y */
  --concaveRight4X: var(--concaveRight1X); /* 右侧凹陷第四个x */
  --concaveRight4Y: calc(
    var(--concaveRight3Y) + var(--slopeWidth)
  ); /* 左侧凹陷第四个y */
  --bottomrightCoord1X: var(--bottomRightX); /* 右下角第一个的坐标x */
  --bottomrightCoord1Y: calc(
    var(--bottomRightY) - var(--cornerGap)
  ); /* 右下角第一个的坐标y */
  --bottomrightCoord2X: calc(
    var(--bottomRightX) - var(--cornerGap)
  ); /* 右下角第二个的坐标x */
  --bottomrightCoord2Y: var(--bottomRightY); /* 右下角第二个的坐标y */
  --concaveBottom4X: calc(
    50% - var(--concaveLength) / 2 - var(--slopeWidth)
  ); /* 底部第四个的坐标x */
  --concaveBottom4Y: 100%; /* 底部第四个的坐标y */
  --concaveBottom3X: calc(
    var(--concaveBottom4X) + var(--slopeWidth)
  ); /* 底部第三个的坐标x */
  --concaveBottom3Y: calc(
    var(--bottomLeftY) - var(--cornerGap)
  ); /* 底部第三个的坐标y */
  --concaveBottom2X: calc(
    var(--concaveBottom3X) + var(--concaveLength)
  ); /* 底部第二个的坐标x */
  --concaveBottom2Y: var(--concaveBottom3Y); /* 底部第二个的坐标y */
  --concaveBottom1X: calc(
    var(--concaveBottom2X) + var(--slopeWidth)
  ); /* 底部第一个的坐标x */
  --concaveBottom1Y: 100%; /*  底部第一个的坐标y */
  --bottomleftCoord1X: calc(
    var(--bottomLeftX) + var(--cornerGap)
  ); /* 左下角第一个x */
  --bottomleftCoord1Y: 100%; /* 左下角第一个y */
  --bottomleftCoord2X: var(--bottomLeftX); /* 左下角第二个x */
  --bottomleftCoord2Y: calc(
    var(--bottomLeftY) - var(--cornerGap)
  ); /* 左下角第二个y */
  --concaveLeft4X: 0%; /* 左边第四个的坐标x */
  --concaveLeft4Y: calc(
    50% - var(--concaveLength) / 2 - var(--slopeWidth)
  ); /* 左边第四个的坐标y */
  --concaveLeft3X: var(--cornerGap); /* 左边第三个的坐标x */
  --concaveLeft3Y: calc(
    var(--concaveLeft4Y) + var(--slopeWidth)
  ); /* 左边第三个的坐标y */
  --concaveLeft2X: var(--cornerGap); /* 左边第二个的坐标x */
  --concaveLeft2Y: calc(
    var(--concaveLeft3Y) + var(--concaveLength)
  ); /* 左边第二个的坐标x */
  --concaveLeft1X: 0%; /* 左边第一个的坐标x */
  --concaveLeft1Y: calc(
    var(--concaveLeft2Y) + var(--slopeWidth)
  ); /* 左边第一个的坐标y */
  --gap: 2px;
  --topleftCoord2XGap: calc(var(--topleftCoord2X) + var(--gap));
  --topleftCoord2YGap: var(--topleftCoord2Y);
  --concaveLeft4XGap: calc(var(--concaveLeft4X) + var(--gap));
  --concaveLeft4YGap: var(--concaveLeft4Y);
  --concaveLeft3XGap: calc(var(--concaveLeft3X) + var(--gap));
  --concaveLeft3YGap: var(--concaveLeft3Y);
  --concaveLeft2XGap: calc(var(--concaveLeft2X) + var(--gap));
  --concaveLeft2YGap: var(--concaveLeft2Y);
  --concaveLeft1XGap: calc(var(--concaveLeft1X) + var(--gap));
  --concaveLeft1YGap: var(--concaveLeft1Y);
  --bottomleftCoord2XGap: calc(var(--bottomleftCoord2X) + var(--gap));
  --bottomleftCoord2YGap: var(--bottomleftCoord2Y);
  --bottomleftCoord1XGap: var(--bottomleftCoord1X);
  --bottomleftCoord1YGap: calc(var(--bottomleftCoord1Y) - var(--gap));
  --concaveBottom4XGap: var(--concaveBottom4X);
  --concaveBottom4YGap: calc(var(--concaveBottom4Y) - var(--gap));
  --concaveBottom3XGap: var(--concaveBottom3X);
  --concaveBottom3YGap: calc(var(--concaveBottom3Y) - var(--gap));
  --concaveBottom2XGap: var(--concaveBottom2X);
  --concaveBottom2YGap: calc(var(--concaveBottom2Y) - var(--gap));
  --concaveBottom1XGap: var(--concaveBottom1X);
  --concaveBottom1YGap: calc(var(--concaveBottom1Y) - var(--gap));
  --bottomrightCoord2XGap: var(--bottomrightCoord2X);
  --bottomrightCoord2YGap: calc(var(--bottomrightCoord2Y) - var(--gap));
  --bottomrightCoord1XGap: calc(var(--bottomrightCoord1X) - var(--gap));
  --bottomrightCoord1YGap: var(--bottomrightCoord1Y);
  --concaveRight4XGap: calc(var(--concaveRight4X) - var(--gap));
  --concaveRight4YGap: var(--concaveRight4Y);
  --concaveRight3XGap: calc(var(--concaveRight3X) - var(--gap));
  --concaveRight3YGap: var(--concaveRight3Y);
  --concaveRight2XGap: calc(var(--concaveRight2X) - var(--gap));
  --concaveRight2YGap: var(--concaveRight2Y);
  --concaveRight1XGap: calc(var(--concaveRight1X) - var(--gap));
  --concaveRight1YGap: var(--concaveRight1Y);
  --toprightCoord2XGap: calc(var(--toprightCoord2X) - var(--gap));
  --toprightCoord2YGap: var(--toprightCoord2Y);
  --toprightCoord1XGap: var(--toprightCoord1X);
  --toprightCoord1YGap: calc(var(--toprightCoord1Y) + var(--gap));
  --slopeCoord4XGap: var(--slopeCoord4X);
  --slopeCoord4YGap: calc(var(--slopeCoord4Y) + var(--gap));
  --slopeCoord3XGap: var(--slopeCoord3X);
  --slopeCoord3YGap: calc(var(--slopeCoord3Y) + var(--gap));
  --slopeCoord2XGap: var(--slopeCoord2X);
  --slopeCoord2YGap: calc(var(--slopeCoord2Y) + var(--gap));
  --slopeCoord1XGap: var(--slopeCoord1X);
  --slopeCoord1YGap: calc(var(--slopeCoord1Y) + var(--gap));
  --topleftCoord1XGap: var(--topleftCoord1X);
  --topleftCoord1YGap: calc(var(--topleftCoord1Y) + var(--gap));

  --shadow: 7px;

  --topleftCoord2XShadow: calc(var(--topleftCoord2X) + var(--shadow));
  --topleftCoord2YShadow: var(--topleftCoord2Y);
  --concaveLeft4XShadow: calc(var(--concaveLeft4X) + var(--shadow));
  --concaveLeft4YShadow: var(--concaveLeft4Y);
  --concaveLeft3XShadow: calc(var(--concaveLeft3X) + var(--shadow));
  --concaveLeft3YShadow: var(--concaveLeft3Y);
  --concaveLeft2XShadow: calc(var(--concaveLeft2X) + var(--shadow));
  --concaveLeft2YShadow: var(--concaveLeft2Y);
  --concaveLeft1XShadow: calc(var(--concaveLeft1X) + var(--shadow));
  --concaveLeft1YShadow: var(--concaveLeft1Y);
  --bottomleftCoord2XShadow: calc(var(--bottomleftCoord2X) + var(--shadow));
  --bottomleftCoord2YShadow: var(--bottomleftCoord2Y);
  --bottomleftCoord1XShadow: var(--bottomleftCoord1X);
  --bottomleftCoord1YShadow: calc(var(--bottomleftCoord1Y) - var(--shadow));
  --concaveBottom4XShadow: var(--concaveBottom4X);
  --concaveBottom4YShadow: calc(var(--concaveBottom4Y) - var(--shadow));
  --concaveBottom3XShadow: var(--concaveBottom3X);
  --concaveBottom3YShadow: calc(var(--concaveBottom3Y) - var(--shadow));
  --concaveBottom2XShadow: var(--concaveBottom2X);
  --concaveBottom2YShadow: calc(var(--concaveBottom2Y) - var(--shadow));
  --concaveBottom1XShadow: var(--concaveBottom1X);
  --concaveBottom1YShadow: calc(var(--concaveBottom1Y) - var(--shadow));
  --bottomrightCoord2XShadow: var(--bottomrightCoord2X);
  --bottomrightCoord2YShadow: calc(var(--bottomrightCoord2Y) - var(--shadow));
  --bottomrightCoord1XShadow: calc(var(--bottomrightCoord1X) - var(--shadow));
  --bottomrightCoord1YShadow: var(--bottomrightCoord1Y);
  --concaveRight4XShadow: calc(var(--concaveRight4X) - var(--shadow));
  --concaveRight4YShadow: var(--concaveRight4Y);
  --concaveRight3XShadow: calc(var(--concaveRight3X) - var(--shadow));
  --concaveRight3YShadow: var(--concaveRight3Y);
  --concaveRight2XShadow: calc(var(--concaveRight2X) - var(--shadow));
  --concaveRight2YShadow: var(--concaveRight2Y);
  --concaveRight1XShadow: calc(var(--concaveRight1X) - var(--shadow));
  --concaveRight1YShadow: var(--concaveRight1Y);
  --toprightCoord2XShadow: calc(var(--toprightCoord2X) - var(--shadow));
  --toprightCoord2YShadow: var(--toprightCoord2Y);
  --toprightCoord1XShadow: var(--toprightCoord1X);
  --toprightCoord1YShadow: calc(var(--toprightCoord1Y) + var(--shadow));
  --slopeCoord4XShadow: var(--slopeCoord4X);
  --slopeCoord4YShadow: calc(var(--slopeCoord4Y) + var(--shadow));
  --slopeCoord3XShadow: var(--slopeCoord3X);
  --slopeCoord3YShadow: calc(var(--slopeCoord3Y) + var(--shadow));
  --slopeCoord2XShadow: var(--slopeCoord2X);
  --slopeCoord2YShadow: calc(var(--slopeCoord2Y) + var(--shadow));
  --slopeCoord1XShadow: var(--slopeCoord1X);
  --slopeCoord1YShadow: calc(var(--slopeCoord1Y) + var(--shadow));
  --topleftCoord1XShadow: var(--topleftCoord1X);
  --topleftCoord1YShadow: calc(var(--topleftCoord1Y) + var(--shadow));

  --adorn: 2px;
  --concaveRight1XAdorn: var(--concaveRight1X);
  --concaveRight1YAdorn: calc(var(--concaveRight1Y) + var(--adorn));
  --concaveRight2XAdorn: calc(var(--concaveRight2X) + var(--adorn));
  --concaveRight2YAdorn: var(--concaveRight2Y);
  --concaveRight3XAdorn: calc(var(--concaveRight3X) + var(--adorn));
  --concaveRight3YAdorn: var(--concaveRight3Y);
  --concaveRight4XAdorn: var(--concaveRight4X);
  --concaveRight4YAdorn: calc(var(--concaveRight4Y) - var(--adorn));

  --concaveBottom1XAdorn: calc(var(--concaveBottom1X) - var(--adorn));
  --concaveBottom1YAdorn: var(--concaveBottom1Y);
  --concaveBottom2XAdorn: var(--concaveBottom2X);
  --concaveBottom2YAdorn: calc(var(--concaveBottom2Y) + var(--adorn));
  --concaveBottom3XAdorn: var(--concaveBottom3X);
  --concaveBottom3YAdorn: calc(var(--concaveBottom3Y) + var(--adorn));
  --concaveBottom4XAdorn: calc(var(--concaveBottom4X) + var(--adorn));
  --concaveBottom4YAdorn: var(--concaveBottom4Y);

  --concaveLeft1XAdorn: var(--concaveLeft1X);
  --concaveLeft1YAdorn: calc(var(--concaveLeft1Y) - var(--adorn));
  --concaveLeft2XAdorn: calc(var(--concaveLeft2X) - var(--adorn));
  --concaveLeft2YAdorn: var(--concaveLeft2Y);
  --concaveLeft3XAdorn: calc(var(--concaveLeft3X) - var(--adorn));
  --concaveLeft3YAdorn: var(--concaveLeft3Y);
  --concaveLeft4XAdorn: var(--concaveLeft4X);
  --concaveLeft4YAdorn: calc(var(--concaveLeft4Y) + var(--adorn));

  --titleSlopeWidth: 15px; /* 标题斜坡宽度 */
  --titleCoord1X: 0;
  --titleCoord1Y: 50%;
  --titleCoord2X: var(--titleSlopeWidth);
  --titleCoord2Y: 0;
  --titleCoord3X: calc(100% - var(--titleSlopeWidth));
  --titleCoord3Y: 0;
  --titleCoord4X: 100%;
  --titleCoord4Y: 50%;
  --titleCoord5X: var(--titleCoord3X);
  --titleCoord5Y: 100%;
  --titleCoord6X: var(--titleCoord2X);
  --titleCoord6Y: 100%;
}
.base-panel-border {
  position: absolute;
  top: calc(var(--titleHeight) / 2);
  height: calc(100% - var(--titleHeight) / 2);
  width: 100%;
  pointer-events: none;
}
.base-panel-border-outline,
.base-panel-border-adorn {
  position: absolute;
  height: 100%;
  width: 100%;
}
.base-panel-border-outline {
  background: rgba(13, 37, 76, 0.1);
  clip-path: polygon(
    var(--topleftCoord1X) var(--topleftCoord1Y),
    var(--slopeCoord1X) var(--slopeCoord1Y),
    var(--slopeCoord2X) var(--slopeCoord2Y),
    var(--slopeCoord3X) var(--slopeCoord3Y),
    var(--slopeCoord4X) var(--slopeCoord4Y),
    var(--toprightCoord1X) var(--toprightCoord1Y),
    var(--toprightCoord2X) var(--toprightCoord2Y),
    var(--concaveRight1X) var(--concaveRight1Y),
    var(--concaveRight2X) var(--concaveRight2Y),
    var(--concaveRight3X) var(--concaveRight3Y),
    var(--concaveRight4X) var(--concaveRight4Y),
    var(--bottomrightCoord1X) var(--bottomrightCoord1Y),
    var(--bottomrightCoord2X) var(--bottomrightCoord2Y),
    var(--concaveBottom1X) var(--concaveBottom1Y),
    var(--concaveBottom2X) var(--concaveBottom2Y),
    var(--concaveBottom3X) var(--concaveBottom3Y),
    var(--concaveBottom4X) var(--concaveBottom4Y),
    var(--bottomleftCoord1X) var(--bottomleftCoord1Y),
    var(--bottomleftCoord2X) var(--bottomleftCoord2Y),
    var(--concaveLeft1X) var(--concaveLeft1Y),
    var(--concaveLeft2X) var(--concaveLeft2Y),
    var(--concaveLeft3X) var(--concaveLeft3Y),
    var(--concaveLeft4X) var(--concaveLeft4Y),
    var(--topleftCoord2X) var(--topleftCoord2Y)
  );
}
.base-panel-border-outline::before,
.base-panel-border-outline::after {
  content: "";
  height: inherit;
  width: inherit;
  position: absolute;
}
.base-panel-border-outline::before {
  background: var(--bgColor);
  clip-path: polygon(
    var(--topleftCoord1X) var(--topleftCoord1Y),
    var(--slopeCoord1X) var(--slopeCoord1Y),
    var(--slopeCoord2X) var(--slopeCoord2Y),
    var(--slopeCoord3X) var(--slopeCoord3Y),
    var(--slopeCoord4X) var(--slopeCoord4Y),
    var(--toprightCoord1X) var(--toprightCoord1Y),
    var(--toprightCoord2X) var(--toprightCoord2Y),
    var(--concaveRight1X) var(--concaveRight1Y),
    var(--concaveRight2X) var(--concaveRight2Y),
    var(--concaveRight3X) var(--concaveRight3Y),
    var(--concaveRight4X) var(--concaveRight4Y),
    var(--bottomrightCoord1X) var(--bottomrightCoord1Y),
    var(--bottomrightCoord2X) var(--bottomrightCoord2Y),
    var(--concaveBottom1X) var(--concaveBottom1Y),
    var(--concaveBottom2X) var(--concaveBottom2Y),
    var(--concaveBottom3X) var(--concaveBottom3Y),
    var(--concaveBottom4X) var(--concaveBottom4Y),
    var(--bottomleftCoord1X) var(--bottomleftCoord1Y),
    var(--bottomleftCoord2X) var(--bottomleftCoord2Y),
    var(--concaveLeft1X) var(--concaveLeft1Y),
    var(--concaveLeft2X) var(--concaveLeft2Y),
    var(--concaveLeft3X) var(--concaveLeft3Y),
    var(--concaveLeft4X) var(--concaveLeft4Y),
    var(--topleftCoord2X) var(--topleftCoord2Y),
    var(--topleftCoord2XGap) var(--topleftCoord2YGap),
    var(--concaveLeft4XGap) var(--concaveLeft4YGap),
    var(--concaveLeft3XGap) var(--concaveLeft3YGap),
    var(--concaveLeft2XGap) var(--concaveLeft2YGap),
    var(--concaveLeft1XGap) var(--concaveLeft1YGap),
    var(--bottomleftCoord2XGap) var(--bottomleftCoord2YGap),
    var(--bottomleftCoord1XGap) var(--bottomleftCoord1YGap),
    var(--concaveBottom4XGap) var(--concaveBottom4YGap),
    var(--concaveBottom3XGap) var(--concaveBottom3YGap),
    var(--concaveBottom2XGap) var(--concaveBottom2YGap),
    var(--concaveBottom1XGap) var(--concaveBottom1YGap),
    var(--bottomrightCoord2XGap) var(--bottomrightCoord2YGap),
    var(--bottomrightCoord1XGap) var(--bottomrightCoord1YGap),
    var(--concaveRight4XGap) var(--concaveRight4YGap),
    var(--concaveRight3XGap) var(--concaveRight3YGap),
    var(--concaveRight2XGap) var(--concaveRight2YGap),
    var(--concaveRight1XGap) var(--concaveRight1YGap),
    var(--toprightCoord2XGap) var(--toprightCoord2YGap),
    var(--toprightCoord1XGap) var(--toprightCoord1YGap),
    var(--slopeCoord4XGap) var(--slopeCoord4YGap),
    var(--slopeCoord3XGap) var(--slopeCoord3YGap),
    var(--slopeCoord2XGap) var(--slopeCoord2YGap),
    var(--slopeCoord1XGap) var(--slopeCoord1YGap),
    var(--topleftCoord1XGap) var(--topleftCoord1YGap),
    var(--topleftCoord2XGap) var(--topleftCoord2YGap),
    var(--topleftCoord2X) var(--topleftCoord2Y)
  );
}

.base-panel-border-outline::after {
  background: rgba(81, 150, 230, 0.1);
  clip-path: polygon(
    var(--topleftCoord2XGap) var(--topleftCoord2YGap),
    var(--concaveLeft4XGap) var(--concaveLeft4YGap),
    var(--concaveLeft3XGap) var(--concaveLeft3YGap),
    var(--concaveLeft2XGap) var(--concaveLeft2YGap),
    var(--concaveLeft1XGap) var(--concaveLeft1YGap),
    var(--bottomleftCoord2XGap) var(--bottomleftCoord2YGap),
    var(--bottomleftCoord1XGap) var(--bottomleftCoord1YGap),
    var(--concaveBottom4XGap) var(--concaveBottom4YGap),
    var(--concaveBottom3XGap) var(--concaveBottom3YGap),
    var(--concaveBottom2XGap) var(--concaveBottom2YGap),
    var(--concaveBottom1XGap) var(--concaveBottom1YGap),
    var(--bottomrightCoord2XGap) var(--bottomrightCoord2YGap),
    var(--bottomrightCoord1XGap) var(--bottomrightCoord1YGap),
    var(--concaveRight4XGap) var(--concaveRight4YGap),
    var(--concaveRight3XGap) var(--concaveRight3YGap),
    var(--concaveRight2XGap) var(--concaveRight2YGap),
    var(--concaveRight1XGap) var(--concaveRight1YGap),
    var(--toprightCoord2XGap) var(--toprightCoord2YGap),
    var(--toprightCoord1XGap) var(--toprightCoord1YGap),
    var(--slopeCoord4XGap) var(--slopeCoord4YGap),
    var(--slopeCoord3XGap) var(--slopeCoord3YGap),
    var(--slopeCoord2XGap) var(--slopeCoord2YGap),
    var(--slopeCoord1XGap) var(--slopeCoord1YGap),
    var(--topleftCoord1XGap) var(--topleftCoord1YGap),
    var(--topleftCoord1XShadow) var(--topleftCoord1YShadow),
    var(--slopeCoord1XShadow) var(--slopeCoord1YShadow),
    var(--slopeCoord2XShadow) var(--slopeCoord2YShadow),
    var(--slopeCoord3XShadow) var(--slopeCoord3YShadow),
    var(--slopeCoord4XShadow) var(--slopeCoord4YShadow),
    var(--toprightCoord1XShadow) var(--toprightCoord1YShadow),
    var(--toprightCoord2XShadow) var(--toprightCoord2YShadow),
    var(--concaveRight1XShadow) var(--concaveRight1YShadow),
    var(--concaveRight2XShadow) var(--concaveRight2YShadow),
    var(--concaveRight3XShadow) var(--concaveRight3YShadow),
    var(--concaveRight4XShadow) var(--concaveRight4YShadow),
    var(--bottomrightCoord1XShadow) var(--bottomrightCoord1YShadow),
    var(--bottomrightCoord2XShadow) var(--bottomrightCoord2YShadow),
    var(--concaveBottom1XShadow) var(--concaveBottom1YShadow),
    var(--concaveBottom2XShadow) var(--concaveBottom2YShadow),
    var(--concaveBottom3XShadow) var(--concaveBottom3YShadow),
    var(--concaveBottom4XShadow) var(--concaveBottom4YShadow),
    var(--bottomleftCoord1XShadow) var(--bottomleftCoord1YShadow),
    var(--bottomleftCoord2XShadow) var(--bottomleftCoord2YShadow),
    var(--concaveLeft1XShadow) var(--concaveLeft1YShadow),
    var(--concaveLeft2XShadow) var(--concaveLeft2YShadow),
    var(--concaveLeft3XShadow) var(--concaveLeft3YShadow),
    var(--concaveLeft4XShadow) var(--concaveLeft4YShadow),
    var(--topleftCoord2XShadow) var(--topleftCoord2YShadow),
    var(--topleftCoord1XShadow) var(--topleftCoord1YShadow),
    var(--topleftCoord1XGap) var(--topleftCoord1YGap)
  );
}
.base-panel-border-adorn {
  background: var(--bgColor);
}
.base-panel-border-adorn-right {
  clip-path: polygon(
    var(--concaveRight1XAdorn) var(--concaveRight1YAdorn),
    var(--concaveRight2XAdorn) var(--concaveRight2YAdorn),
    var(--concaveRight3XAdorn) var(--concaveRight3YAdorn),
    var(--concaveRight4XAdorn) var(--concaveRight4YAdorn)
  );
}
.base-panel-border-adorn-bottom {
  clip-path: polygon(
    var(--concaveBottom1XAdorn) var(--concaveBottom1YAdorn),
    var(--concaveBottom2XAdorn) var(--concaveBottom2YAdorn),
    var(--concaveBottom3XAdorn) var(--concaveBottom3YAdorn),
    var(--concaveBottom4XAdorn) var(--concaveBottom4YAdorn)
  );
}
.base-panel-border-adorn-left {
  clip-path: polygon(
    var(--concaveLeft1XAdorn) var(--concaveLeft1YAdorn),
    var(--concaveLeft2XAdorn) var(--concaveLeft2YAdorn),
    var(--concaveLeft3XAdorn) var(--concaveLeft3YAdorn),
    var(--concaveLeft4XAdorn) var(--concaveLeft4YAdorn)
  );
}
.base-panel-title {
  font-size: 18px;
  background: var(--titleBgColor);
  background-image: linear-gradient(135deg, #5efce8 10%, #736efe 100%);
  position: absolute;
  padding: 0 15px;
  left: 50%;
  transform: translateX(-50%);
  height: var(--titleHeight);
  display: flex;
  align-items: center;

  clip-path: polygon(
    var(--titleCoord1X) var(--titleCoord1Y),
    var(--titleCoord2X) var(--titleCoord2Y),
    var(--titleCoord3X) var(--titleCoord3Y),
    var(--titleCoord4X) var(--titleCoord4Y),
    var(--titleCoord5X) var(--titleCoord5Y),
    var(--titleCoord6X) var(--titleCoord6Y)
  );
}
.base-panel-title-content {
  border-radius: 50px;
  background-image: linear-gradient(180deg, #5efce8 10%, #736efe 100%);
  // background-image: radial-gradient(var(--titleBgColor), transparent);
  padding: 4px 15px;
  font-weight: bold;
}
.base-panel-content {
  position: absolute;
  top: var(--titleHeight);
  left: var(--cornerGap);
  height: calc(100% - var(--titleHeight) - var(--cornerGap));
  width: calc(100% - var(--cornerGap) * 2);
}
</style>
