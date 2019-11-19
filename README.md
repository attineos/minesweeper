This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick start

```shell script
git clone https://github.com/attineos/minesweeper.git
cd minesweeper
yarn && yarn start
```

## What ? Where ? Why ?

This project was realised for the tech talk `Mais hook'il est React ?` presented at `Codeurs en Seine 2019`

Here are the files we are using to presents the hook: 

- [UserProvider](src/providers/UserProvider.js): useContext/useState
- [BoardProvider](src/providers/BoardProvider.js): useReducer/useContext/useCallback
- [Header](src/pages/game/Header.js) in `TimerContainer` : useState/useEffect 
- [Ranking](src/pages/Ranking.js): useEffect
- [Game](src/pages/game/Game.js) in the custom hook `useCalculateScore`: useState/useEffect 

For the translations:
- The configuration is in [i18n.js](src/i18n.js)
- The changes of translations are done in [Setting](src/pages/Settings.js)
- The translations are in the directory [public/locales](public/locales)

For the theming :
- The themes are defined in [src/theme](src/theme)
- The changes of themes are done in [Setting](src/pages/Settings.js)
- We managed the changes of theme with the context [ThemeProvider](src/providers/ThemeProvider.js)
