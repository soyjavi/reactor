import React from 'react';
import renderer from 'react-test-renderer';

import Video from './Video';

const LOREM_VIDEO = 'https://storage.googleapis.com/coverr-main/mp4/Surfers-Paradise.mp4';

jest.useFakeTimers();

describe('<Video>', () => {
  it('renders', () => {
    const tree = renderer.create(<Video source={LOREM_VIDEO} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {source} (youtube)', () => {
    const tree = renderer.create(<Video source="https://www.youtube.com/watch?v=cx4MxQcD8Fk" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {source} (vimeo)', () => {
    const tree = renderer.create(<Video source="https://vimeo.com/225434434" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {autoplay}', () => {
    const tree = renderer.create(<Video source={LOREM_VIDEO} autoplay />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {controls}', () => {
    const tree = renderer.create(<Video source={LOREM_VIDEO} controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {dimensions}', () => {
    const tree = renderer.create(<Video height={128} source={LOREM_VIDEO} width={256} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {preload}', () => {
    const tree = renderer.create(<Video source={LOREM_VIDEO} preload />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onLoad}', () => {
    // @TODO: Test <Video /> {onLoad}
  });

  it('when {style}', () => {
    const tree = renderer.create(<Video source={LOREM_VIDEO} style={{ width: 640, height: 400 }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
