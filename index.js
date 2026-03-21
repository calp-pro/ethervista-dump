const loader = require('uniswap-v2-loader')
const dump = require('path').join(__dirname, 'dump')

module.exports.load = (params = {}) => loader.load({
    factory: '0x9a27cb5ae0b2cee0bb71f9a85c0d60f3920757b4',
    filename: dump,
    csv: false,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0x9a27cb5ae0b2cee0bb71f9a85c0d60f3920757b4',
        filename: dump,
        csv: false,
        ...params
    }
)
