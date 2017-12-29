const qrcode = require('../../lib/qrcode/index');

Page({
    data: {
        qrcode0: ''
    },
    onReady(){
        let text = 'https://m.baidu.com';

        // qrcode0
        let qrcode0 = qrcode.outputQRCodeBase64(text, {
            size: 400,
            color: '#CC6600',
            padding: 16,
            background: '#FFCC99'
        });

        this.setData({
            qrcode0
        })

        // qrcode1
        qrcode.drawQRCodeToCanvas(text, {
            ctx: 'qrcode1',
            size: 200,
            color: '#CC6600',
            padding: 16,
            background: '#FFCC99'
        });

        // qrcode2
        let qrcode2 = wx.createCanvasContext('qrcode2');
        qrcode.drawQRCodeToCanvas(text, {
            ctx: qrcode2,
            size: 200,
            color: '#CC6600',
            padding: 16,
            background: '#FFCC99'
        });
        qrcode2.draw();
    }
});
