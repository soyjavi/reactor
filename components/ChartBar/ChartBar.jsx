import { bool, arrayOf, number, shape, string } from 'prop-types';
import { View } from 'react-native';
import React from 'react';
import styles from './ChartBar.style';

import { THEME } from '../../common';
import { Motion, Text } from '..';
import { calcHeight, calcRange } from './modules';

const { COLOR } = THEME;

export const ChartBar = ({
  captions,
  color = COLOR.BRAND,
  highlight,
  inverted = false,
  lines,
  scales,
  values = [],
  ...others
}) => {
  const { max, min, avg } = calcRange(values);
  let firstValueIndex = values.findIndex((value) => value !== 0);
  if (firstValueIndex === -1) firstValueIndex = undefined;

  return (
    <View style={[styles.container, inverted && styles.containerInverted, others.styleContainer]}>
      <View style={{ height: '100%', width: '100%' }}>
        {scales && (
          <View style={[styles.scales, captions && styles.scaleCaptions]}>
            <View style={[styles.scaleValues, inverted && styles.scaleValuesInverted]}>
              {scales.map((scale, index) => (
                <Text key={`scale-${index.toString()}`} lighten style={styles.legend}>
                  {scale}
                </Text>
              ))}
            </View>
            <View style={styles.scaleLines}>
              {scales.map((scale, index) => (
                <View key={`line-${index.toString()}`} style={styles.scaleLine} />
              ))}
            </View>
          </View>
        )}

        {lines &&
          lines.map((line, index) => (
            <View key={`line-${index.toString()}`} style={[styles.line, captions && styles.scaleCaptions]}>
              <Motion timeline={[{ property: 'height', value: `${inverted ? 100 - line.percent : line.percent}%` }]}>
                <View style={[styles.scaleLine, { backgroundColor: line.color || color, opacity: 0.5 }]} />
                <Text bold style={[styles.legend, styles.lineCaption, { backgroundColor: line.color || color }]}>
                  {line.caption}
                </Text>
              </Motion>
            </View>
          ))}

        <View style={[styles.content, styles.row, scales && styles.rowScale]}>
          {values.map((value, index) => (
            <Motion key={`${value}-${index.toString()}`} style={[styles.column, inverted && styles.columnInverted]}>
              <Motion
                disabled={value === 0}
                timeline={[{ property: 'height', value: `${calcHeight(value, { min, max, avg })}%` }]}
                style={[
                  styles.bar,
                  inverted && styles.barInverted,
                  value !== 0 ? { backgroundColor: color } : styles.barEmpty,
                  others.styleBar,
                ]}
              />
            </Motion>
          ))}
        </View>

        {captions && (
          <View style={[styles.captions, styles.row, scales && styles.rowScale]}>
            {captions.map((caption, index) => (
              <View key={`caption-${index.toString()}`} style={styles.column}>
                <Text
                  bold={highlight === index}
                  color={highlight === index ? COLOR.TEXT : undefined}
                  lighten
                  style={styles.legend}
                >
                  {caption.substring(0, 3).toUpperCase()}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

ChartBar.propTypes = {
  captions: arrayOf(string),
  color: string,
  highlight: number,
  inverted: bool,
  lines: arrayOf(shape),
  scales: arrayOf(string),
  values: arrayOf(number),
};
