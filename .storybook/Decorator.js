/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

export function monospace(text) {
  return `<span style="font-family:monospace;background:#f7f7f7">${text}</span>`;
}

export const InfoPanel = ({ text }) => {
  if (text === false) return null;
  return (
    <div
      style={{
        backgroundColor: '#fff',
        fontColor: '#3c3f40',
        fontSize: 14,
        margin: '8px 0',
        padding: 16,
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

InfoPanel.defaultProps = {
  text: false,
};

InfoPanel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function Decorator(text) {
  return story => (
    <div style={{ width: '100%' }}>
      <InfoPanel text={text} />
      <div style={{ padding: 16 }}>{story()}</div>
    </div>
  );
}
