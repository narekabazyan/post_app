import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  nav,
  header,
  section,
  footer {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      box-sizing: border-box;
      vertical-align: baseline;

      &:before,
      &:after {
          box-sizing: border-box;
      }
  }

  ol,
  ul {
      list-style: none;
  }

  blockquote,
  q {
      quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
      content: '';
      content: none;
      font-family: Arial, Helvetica, sans-serif;
  }

  :focus {
      outline: 0 !important;
  }

  ins {
      text-decoration: none;
  }

  del {
      text-decoration: line-through;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  input::-ms-clear {
      display: none;
  }

  ::-moz-focus-inner {
      padding: 0;
  }

  ::-moz-focus-inner {
      padding: 0;
      border: 0;
  }

  a {
      text-decoration: none;
  }

  abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
  }

  small {
      font-size: 80%;
  }

  sub,
  sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
  }

  sub {
      bottom: -0.25em;
  }

  sup {
      top: -0.5em;
  }

  img {
      border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
      font-family: inherit;
      font-size: 100%;
      margin: 0;
      outline: none !important;
      font-weight: inherit;
      padding: 0;
      box-sizing: border-box;
  }

  button,
  select {
      text-transform: none;
      background: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
      -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
      border-style: none;
      padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
      outline: 1px dotted ButtonText;
  }

  fieldset {
      padding: 0.35em 0.75em 0.625em;
  }

  legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
  }

  progress {
      vertical-align: baseline;
  }

  textarea {
      overflow: auto;
  }
  button {
      padding: 0;
  }
  [type='checkbox'],
  [type='radio'] {
      box-sizing: border-box;
      padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      height: auto;
  }

  [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
  }

  [type='number'] {
      -moz-appearance: textfield;
  }

  ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
  }

  details {
      display: block;
  }

  summary {
      display: list-item;
  }

  template {
      display: none;
  }

  [hidden] {
      display: none;
  }

  select::-ms-expand {
      display: none;
  }

  button,
  input,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
  }
  html{
    font-size: 12px;
  }
  body {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
  }
  section {
    display: block;
  }
`;

export default GlobalStyles;
