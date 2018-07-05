export default function getGlobalStyles(theme) {
  return `
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: sans-serif;
    overflow-y: scroll;
    margin: 0;
    color: ${theme.colors.black};
  }

  a {
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    max-width: 100%;
  }

  figure {
    margin: 0;
  }

  svg {
    display: block;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  textarea {
    resize: vertical;
  }
  `;
}
