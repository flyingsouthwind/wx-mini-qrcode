## API

#### 1. outputQRCodeBase64: function (text,  options)

###### 描述

以base64图片格式输出二维码

###### 参数

- text：必须，二维码内容，比如url

- options：参数对象

  ```
  {
  	ecc: 'H',				// 可选，容错级别，可选值L、M、Q和H（默认）
  	size: 256,				// 可选，二维码尺寸，必须为整数。默认为256
  	padding: 0,				// 可选，单侧空白边宽度，默认为0
  	color: '#000000',       // 可选，二维码颜色，必须是16进制，默认为'#000000'
  	background: '#ffffff'	// 可选，二维码背景色，必须是16进制，默认为'#ffffff'	
  }
  ```

###### 返回值

二维码图片的base64数据

#### 2. drawQRCodeToCanvas: function (text,  options)

###### 描述

绘制二维码到canvas

###### 参数

- text：必须，二维码内容，比如url

- options：参数对象

  ```
  {
  	x: 0,					// 可选，二维码左上角点横坐标
  	y: 0,					// 可选，二维码左上角点纵坐标
  	ctx: null,				// 必须，canvas绘制上下文或者canvasID
  	ecc: 'H',				// 可选，容错级别，可选值L、M、Q和H（默认）
  	size: 200,				// 可选，二维码尺寸，必须为整数。默认为200
  	padding: 0,				// 可选，单侧空白边宽度，默认为0
  	color: '#000000',       // 可选，二维码颜色，必须是16进制，默认为'#000000'
  	background: '#ffffff'	// 可选，二维码背景色，必须是16进制，默认为'#ffffff'	
  }
  ```

###### 返回值

无返回值
