# Web theme for Material-ui apps

> This is a React component that provides a baseline Ridecell theme for a Material-ui web app.

[![NPM](https://img.shields.io/npm/v/o2-styles-and-components.svg)](https://www.npmjs.com/package/o2-styles-and-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save web-theme-material
```

## Usage

### Baseline Ridecell platform theme

```jsx
...
import ThemeO2 from 'web-theme-material';

function App() {
  return (
    <ThemeO2>
      <div className="App">
        <OtherComponents />
      </div>
    </ThemeO2>
  );
}

export default App;
```

### Ridecell theme with customizations

```jsx
...
import ThemeO2 from 'web-theme-material';

function App() {
  return (
    <ThemeO2 primaryColor="#D31B1B" borderRadius={24}>
      <div className="App">
        <OtherComponents />
      </div>
    </ThemeO2>
  );
}

export default App;
```

## License

MIT © [sgganche](https://github.com/sgganche)
