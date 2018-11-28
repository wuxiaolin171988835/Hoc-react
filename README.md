This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#在 creat-react-app 中使用装饰器（babel 版本 7.1.0,babel 官网 decorator）

npm run eject

安装相关插件：
cnpm install --save-dev @babel/plugin-proposal-decorators

跟目录下新建.babelrc
{
"presets": ["react-app"],(从 package.json 带过来)
"plugins": [
["@babel/plugin-proposal-decorators", { "legacy": true }],
]
}

#用法：

##使用高阶函数名称，并将普通组件作为函数传递进来 ##装饰器
在普通组件 B 前面声明@高阶组件 A=====高阶组件 A（普通组件 B）
@A=====A(B)

#高阶组件应用：

##代理方式(推荐)：
返回的新组件类直接继承自React.component类，新组件扮演的角色传入参数组件的一个代理，在新组件的render函数中，将被包裹组件渲染出来，除了高阶组件自己要做的工作，其余功能全都转手给了被包裹的组件
a、操作 props b、访问 ref c、抽取状态 d、包装组件


##继承方式：
采用继承关联作为参数的组件和返回的组件，假如传入的组件参数是WrappedComponent，那么返回的组件就直接继承自WrappedComponent

