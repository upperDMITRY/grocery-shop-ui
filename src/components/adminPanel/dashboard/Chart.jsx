import { useLayoutEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';

import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const Chart = ({ topFiveProducts }) => {
  const chartEl = useRef(null);

  useLayoutEffect(() => {
    am5.addLicense('ch-custom-attribution');
    let root = am5.Root.new('chartdiv');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    let data = topFiveProducts;

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'none',
        wheelY: 'none',
        paddingBottom: 20,
        paddingTop: 60,
      })
    );

    let xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set('visible', false);

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        paddingTop: 40,
        categoryField: 'name',
        renderer: xRenderer,
      })
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.grid.template.set('strokeDasharray', [3]);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: yRenderer,
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Income',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'steps',
        categoryXField: 'name',
        sequencedInterpolation: true,
        calculateAggregates: true,
        maskBullets: false,
        tooltip: am5.Tooltip.new(root, {
          dy: -30,
          pointerOrientation: 'vertical',
          labelText: '{valueY}',
        }),
      })
    );

    series.columns.template.setAll({
      strokeOpacity: 0,
      cornerRadiusBR: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusTL: 10,
      maxWidth: 50,
      fillOpacity: 0.8,
    });

    let currentlyHovered;

    series.columns.template.events.on('pointerover', function (e) {
      handleHover(e.target.dataItem);
    });

    series.columns.template.events.on('pointerout', function (e) {
      handleOut();
    });

    function handleHover(dataItem) {
      if (dataItem && currentlyHovered !== dataItem) {
        handleOut();
        currentlyHovered = dataItem;
        let bullet = dataItem.bullets[0];
        bullet.animate({
          key: 'locationY',
          to: 1,
          duration: 700,
          easing: am5.ease.out(am5.ease.cubic),
        });
      }
    }

    function handleOut() {
      if (currentlyHovered) {
        let bullet = currentlyHovered.bullets[0];
        bullet.animate({
          key: 'locationY',
          to: 0,
          duration: 700,
          easing: am5.ease.out(am5.ease.cubic),
        });
      }
    }

    let circleTemplate = am5.Template.new({});

    series.bullets.push(function (root, series, dataItem) {
      let bulletContainer = am5.Container.new(root, {});
      // eslint-disable-next-line
      let circle = bulletContainer.children.push(
        am5.Circle.new(
          root,
          {
            radius: 34,
          },
          circleTemplate
        )
      );

      let maskCircle = bulletContainer.children.push(
        am5.Circle.new(root, { radius: 27 })
      );

      // only containers can be masked, so we add image to another container
      let imageContainer = bulletContainer.children.push(
        am5.Container.new(root, {
          mask: maskCircle,
        })
      );

      // not working
      // eslint-disable-next-line
      let image = imageContainer.children.push(
        am5.Picture.new(root, {
          templateField: 'pictureSettings',
          centerX: am5.p50,
          centerY: am5.p50,
          width: 60,
          height: 60,
        })
      );

      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: bulletContainer,
      });
    });

    // heatrule
    series.set('heatRules', [
      {
        dataField: 'valueY',
        min: am5.color(0xe5dc36),
        max: am5.color(0x5faa46),
        target: series.columns.template,
        key: 'fill',
      },
      {
        dataField: 'valueY',
        min: am5.color(0xe5dc36),
        max: am5.color(0x5faa46),
        target: circleTemplate,
        key: 'fill',
      },
    ]);

    series.data.setAll(data);
    xAxis.data.setAll(data);

    let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
    cursor.lineX.set('visible', false);
    cursor.lineY.set('visible', false);

    cursor.events.on('cursormoved', function () {
      let dataItem = series.get('tooltip').dataItem;
      if (dataItem) {
        handleHover(dataItem);
      } else {
        handleOut();
      }
    });

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    chart.appear(1000, 100);

    chartEl.current = root;

    return () => {
      root.dispose();
    };
  }, [topFiveProducts]);
  return <div id="chartdiv" style={{ width: '100%', height: '400px' }}></div>;
};

export default Chart;
