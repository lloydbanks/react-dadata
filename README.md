### Тестовое задание для front-end разработчика:

Макет: https://www.figma.com/file/LU036et2R4lZiQFTtCgQyR/Frontend-Developer-_Test?node-id=0%3A1 (Для удобной работы с макетом потребуется залогиниться в figma)

Требуется создать страничку, на которой будет реализован поиск и сохранение организации.

Для выбора организации нужно начать вводить название, ИНН или адрес компании в поле поиска, а затем выбрать один из предложенных вариантов.

После выбора подсказки отображается подробная информация об организации, а также кнопка «сохранить».

После сохранения организация добавляется в список сохраненных, а кнопка «сохранить» меняется на надпись «сохранено».

В списке сохраненных должна быть возможность развернуть каждый блок для показа подробной информации, а также возможность удалить организацию из списка. В заголовке таба «Сохраненные организации (3)» в скобках указано текущее количество сохраненных организаций.

Данные об организациях можно получить с помощью бесплатного api DaData https://dadata.ru/api/suggest/party/ (Для получения API-ключа нужно зарегистрироваться)

Готовый пример поиска с подсказками можно посмотреть здесь: https://dadata.ru/suggestions/#party  

Для реализации нужно использовать React. По желанию можно взять redux или обойтись обычным cтейтом реакта. Typescript крайне приветствуется, но не обязателен.

css препроцессор можно использовать любой.

Выполненное задание нужно опубликовать на github и прислать нам ссылку на репозиторий.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
