const Koa = require('koa');
const app = new Koa();

const main = (ctx,next) => {
  console.log(ctx,next)
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3015);



// [Symbol(kCapture)]: false,
// [Symbol(RequestTimeout)]: undefined
// },
// res: ServerResponse {
// _events: [Object: null prototype],
// _eventsCount: 2,
// _maxListeners: undefined,
// outputData: [],
// outputSize: 0,
// writable: true,
// destroyed: false,
// _last: false,
// chunkedEncoding: false,
// shouldKeepAlive: true,
// _defaultKeepAlive: true,
// useChunkedEncodingByDefault: true,
// sendDate: true,
// _removedConnection: false,
// _removedContLen: false,
// _removedTE: false,
// _contentLength: null,
// _hasBody: true,
// _trailer: '',
// finished: false,
// _headerSent: false,
// socket: [Socket],
// _header: null,
// _keepAliveTimeout: 5000,
// _onPendingData: [Function: bound updateOutgoingData],
// _sent100: false,
// _expect_continue: false,
// statusCode: 404,
// __onFinished: [Function],
// [Symbol(kCapture)]: false,
// [Symbol(kNeedDrain)]: false,
// [Symbol(corked)]: 0,
// [Symbol(kOutHeaders)]: null
// },
// ctx: [Circular *1],
// response: {
// app: [Application],
// req: [IncomingMessage],
// res: [ServerResponse],
// ctx: [Circular *1],
// request: [Circular *2]
// },
// originalUrl: '/',
// ip: '::1',
// accept: Accepts { headers: [Object], negotiator: [Negotiator] }
// },
// response: <ref *3> {
// app: Application {
// _events: [Object: null prototype],
// _eventsCount: 1,
// _maxListeners: undefined,
// proxy: false,
// middleware: [Array],
// subdomainOffset: 2,
// env: 'development',
// context: {},
// request: {},
// response: {},
// [Symbol(kCapture)]: false
// },
// req: IncomingMessage {
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 1,
// _maxListeners: undefined,
// socket: [Socket],
// httpVersionMajor: 1,
// httpVersionMinor: 1,
// httpVersion: '1.1',
// complete: false,
// headers: [Object],
// rawHeaders: [Array],
// trailers: {},
// rawTrailers: [],
// aborted: false,
// upgrade: false,
// url: '/',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: [Socket],
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(RequestTimeout)]: undefined
// },
// res: ServerResponse {
// _events: [Object: null prototype],
// _eventsCount: 2,
// _maxListeners: undefined,
// outputData: [],
// outputSize: 0,
// writable: true,
// destroyed: false,
// _last: false,
// chunkedEncoding: false,
// shouldKeepAlive: true,
// _defaultKeepAlive: true,
// useChunkedEncodingByDefault: true,
// sendDate: true,
// _removedConnection: false,
// _removedContLen: false,
// _removedTE: false,
// _contentLength: null,
// _hasBody: true,
// _trailer: '',
// finished: false,
// _headerSent: false,
// socket: [Socket],
// _header: null,
// _keepAliveTimeout: 5000,
// _onPendingData: [Function: bound updateOutgoingData],
// _sent100: false,
// _expect_continue: false,
// statusCode: 404,
// __onFinished: [Function],
// [Symbol(kCapture)]: false,
// [Symbol(kNeedDrain)]: false,
// [Symbol(corked)]: 0,
// [Symbol(kOutHeaders)]: null
// },
// ctx: [Circular *1],
// request: <ref *2> {
// app: [Application],
// req: [IncomingMessage],
// res: [ServerResponse],
// ctx: [Circular *1],
// response: [Circular *3],
// originalUrl: '/',
// ip: '::1',
// accept: [Accepts]
// }
// },
// app: Application {
// _events: [Object: null prototype] { error: [Function: onerror] },
// _eventsCount: 1,
// _maxListeners: undefined,
// proxy: false,
// middleware: [ [Function: main] ],
// subdomainOffset: 2,
// env: 'development',
// context: {},
// request: {},
// response: {},
// [Symbol(kCapture)]: false
// },
// req: IncomingMessage {
// _readableState: ReadableState {
// objectMode: false,
// highWaterMark: 16384,
// buffer: BufferList { head: null, tail: null, length: 0 },
// length: 0,
// pipes: [],
// flowing: null,
// ended: false,
// endEmitted: false,
// reading: false,
// sync: true,
// needReadable: false,
// emittedReadable: false,
// readableListening: false,
// resumeScheduled: false,
// errorEmitted: false,
// emitClose: true,
// autoDestroy: false,
// destroyed: false,
// errored: null,
// closed: false,
// closeEmitted: false,
// defaultEncoding: 'utf8',
// awaitDrainWriters: null,
// multiAwaitDrain: false,
// readingMore: true,
// decoder: null,
// encoding: null,
// [Symbol(kPaused)]: null
// },
// _events: [Object: null prototype] { end: [Function: clearRequestTimeout] },
// _eventsCount: 1,
// _maxListeners: undefined,
// socket: Socket {
// connecting: false,
// _hadError: false,
// _parent: null,
// _host: null,
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 8,
// _maxListeners: undefined,
// _writableState: [WritableState],
// allowHalfOpen: true,
// _sockname: null,
// _pendingData: null,
// _pendingEncoding: '',
// server: [Server],
// _server: [Server],
// parser: [HTTPParser],
// on: [Function: socketListenerWrap],
// addListener: [Function: socketListenerWrap],
// prependListener: [Function: socketListenerWrap],
// _paused: false,
// _httpMessage: [ServerResponse],
// _peername: [Object],
// [Symbol(async_id_symbol)]: 6,
// [Symbol(kHandle)]: [TCP],
// [Symbol(kSetNoDelay)]: false,
// [Symbol(lastWriteQueueSize)]: 0,
// [Symbol(timeout)]: null,
// [Symbol(kBuffer)]: null,
// [Symbol(kBufferCb)]: null,
// [Symbol(kBufferGen)]: null,
// [Symbol(kCapture)]: false,
// [Symbol(kBytesRead)]: 0,
// [Symbol(kBytesWritten)]: 0,
// [Symbol(RequestTimeout)]: undefined
// },
// httpVersionMajor: 1,
// httpVersionMinor: 1,
// httpVersion: '1.1',
// complete: false,
// headers: {
// host: 'localhost:3015',
// connection: 'keep-alive',
// 'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
// 'sec-ch-ua-mobile': '?0',
// 'upgrade-insecure-requests': '1',
// 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
// accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
// 'sec-fetch-site': 'none',
// 'sec-fetch-mode': 'navigate',
// 'sec-fetch-user': '?1',
// 'sec-fetch-dest': 'document',
// 'accept-encoding': 'gzip, deflate, br',
// 'accept-language': 'zh-CN,zh;q=0.9'
// },
// rawHeaders: [
// 'Host',
// 'localhost:3015',
// 'Connection',
// 'keep-alive',
// 'sec-ch-ua',
// '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
// 'sec-ch-ua-mobile',
// '?0',
// 'Upgrade-Insecure-Requests',
// '1',
// 'User-Agent',
// 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
// 'Accept',
// 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
// 'Sec-Fetch-Site',
// 'none',
// 'Sec-Fetch-Mode',
// 'navigate',
// 'Sec-Fetch-User',
// '?1',
// 'Sec-Fetch-Dest',
// 'document',
// 'Accept-Encoding',
// 'gzip, deflate, br',
// 'Accept-Language',
// 'zh-CN,zh;q=0.9'
// ],
// trailers: {},
// rawTrailers: [],
// aborted: false,
// upgrade: false,
// url: '/',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: Socket {
// connecting: false,
// _hadError: false,
// _parent: null,
// _host: null,
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 8,
// _maxListeners: undefined,
// _writableState: [WritableState],
// allowHalfOpen: true,
// _sockname: null,
// _pendingData: null,
// _pendingEncoding: '',
// server: [Server],
// _server: [Server],
// parser: [HTTPParser],
// on: [Function: socketListenerWrap],
// addListener: [Function: socketListenerWrap],
// prependListener: [Function: socketListenerWrap],
// _paused: false,
// _httpMessage: [ServerResponse],
// _peername: [Object],
// [Symbol(async_id_symbol)]: 6,
// [Symbol(kHandle)]: [TCP],
// [Symbol(kSetNoDelay)]: false,
// [Symbol(lastWriteQueueSize)]: 0,
// [Symbol(timeout)]: null,
// [Symbol(kBuffer)]: null,
// [Symbol(kBufferCb)]: null,
// [Symbol(kBufferGen)]: null,
// [Symbol(kCapture)]: false,
// [Symbol(kBytesRead)]: 0,
// [Symbol(kBytesWritten)]: 0,
// [Symbol(RequestTimeout)]: undefined
// },
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(RequestTimeout)]: undefined
// },
// res: <ref *4> ServerResponse {
// _events: [Object: null prototype] {
// finish: [Array],
// end: [Function: onevent]
// },
// _eventsCount: 2,
// _maxListeners: undefined,
// outputData: [],
// outputSize: 0,
// writable: true,
// destroyed: false,
// _last: false,
// chunkedEncoding: false,
// shouldKeepAlive: true,
// _defaultKeepAlive: true,
// useChunkedEncodingByDefault: true,
// sendDate: true,
// _removedConnection: false,
// _removedContLen: false,
// _removedTE: false,
// _contentLength: null,
// _hasBody: true,
// _trailer: '',
// finished: false,
// _headerSent: false,
// socket: Socket {
// connecting: false,
// _hadError: false,
// _parent: null,
// _host: null,
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 8,
// _maxListeners: undefined,
// _writableState: [WritableState],
// allowHalfOpen: true,
// _sockname: null,
// _pendingData: null,
// _pendingEncoding: '',
// server: [Server],
// _server: [Server],
// parser: [HTTPParser],
// on: [Function: socketListenerWrap],
// addListener: [Function: socketListenerWrap],
// prependListener: [Function: socketListenerWrap],
// _paused: false,
// _httpMessage: [Circular *4],
// _peername: [Object],
// [Symbol(async_id_symbol)]: 6,
// [Symbol(kHandle)]: [TCP],
// [Symbol(kSetNoDelay)]: false,
// [Symbol(lastWriteQueueSize)]: 0,
// [Symbol(timeout)]: null,
// [Symbol(kBuffer)]: null,
// [Symbol(kBufferCb)]: null,
// [Symbol(kBufferGen)]: null,
// [Symbol(kCapture)]: false,
// [Symbol(kBytesRead)]: 0,
// [Symbol(kBytesWritten)]: 0,
// [Symbol(RequestTimeout)]: undefined
// },
// _header: null,
// _keepAliveTimeout: 5000,
// _onPendingData: [Function: bound updateOutgoingData],
// _sent100: false,
// _expect_continue: false,
// statusCode: 404,
// __onFinished: [Function: listener] { queue: [Array] },
// [Symbol(kCapture)]: false,
// [Symbol(kNeedDrain)]: false,
// [Symbol(corked)]: 0,
// [Symbol(kOutHeaders)]: null
// },
// originalUrl: '/',
// cookies: Cookies {
// secure: false,
// request: IncomingMessage {
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 1,
// _maxListeners: undefined,
// socket: [Socket],
// httpVersionMajor: 1,
// httpVersionMinor: 1,
// httpVersion: '1.1',
// complete: false,
// headers: [Object],
// rawHeaders: [Array],
// trailers: {},
// rawTrailers: [],
// aborted: false,
// upgrade: false,
// url: '/',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: [Socket],
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(RequestTimeout)]: undefined
// },
// response: <ref *4> ServerResponse {
// _events: [Object: null prototype],
// _eventsCount: 2,
// _maxListeners: undefined,
// outputData: [],
// outputSize: 0,
// writable: true,
// destroyed: false,
// _last: false,
// chunkedEncoding: false,
// shouldKeepAlive: true,
// _defaultKeepAlive: true,
// useChunkedEncodingByDefault: true,
// sendDate: true,
// _removedConnection: false,
// _removedContLen: false,
// _removedTE: false,
// _contentLength: null,
// _hasBody: true,
// _trailer: '',
// finished: false,
// _headerSent: false,
// socket: [Socket],
// _header: null,
// _keepAliveTimeout: 5000,
// _onPendingData: [Function: bound updateOutgoingData],
// _sent100: false,
// _expect_continue: false,
// statusCode: 404,
// __onFinished: [Function],
// [Symbol(kCapture)]: false,
// [Symbol(kNeedDrain)]: false,
// [Symbol(corked)]: 0,
// [Symbol(kOutHeaders)]: null
// },
// keys: undefined
// },
// accept: Accepts {
// headers: {
// host: 'localhost:3015',
// connection: 'keep-alive',
// 'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
// 'sec-ch-ua-mobile': '?0',
// 'upgrade-insecure-requests': '1',
// 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
// accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
// 'sec-fetch-site': 'none',
// 'sec-fetch-mode': 'navigate',
// 'sec-fetch-user': '?1',
// 'sec-fetch-dest': 'document',
// 'accept-encoding': 'gzip, deflate, br',
// 'accept-language': 'zh-CN,zh;q=0.9'
// },
// negotiator: Negotiator { request: [IncomingMessage] }
// },
// state: {}
// } [Function: next]
// <ref *1> {
// request: <ref *2> {
// app: Application {
// _events: [Object: null prototype],
// _eventsCount: 1,
// _maxListeners: undefined,
// proxy: false,
// middleware: [Array],
// subdomainOffset: 2,
// env: 'development',
// context: {},
// request: {},
// response: {},
// [Symbol(kCapture)]: false
// },
// req: IncomingMessage {
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 1,
// _maxListeners: undefined,
// socket: [Socket],
// httpVersionMajor: 1,
// httpVersionMinor: 1,
// httpVersion: '1.1',
// complete: false,
// headers: [Object],
// rawHeaders: [Array],
// trailers: {},
// rawTrailers: [],
// aborted: false,
// upgrade: false,
// url: '/favicon.ico',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: [Socket],
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(RequestTimeout)]: undefined
// },
// res: ServerResponse {
// _events: [Object: null prototype],
// _eventsCount: 2,
// _maxListeners: undefined,
// outputData: [],
// outputSize: 0,
// writable: true,
// destroyed: false,
// _last: false,
// chunkedEncoding: false,
// shouldKeepAlive: true,
// _defaultKeepAlive: true,
// useChunkedEncodingByDefault: true,
// sendDate: true,
// _removedConnection: false,
// _removedContLen: false,
// _removedTE: false,
// _contentLength: null,
// _hasBody: true,
// _trailer: '',
// finished: false,
// _headerSent: false,
// socket: [Socket],
// _header: null,
// _keepAliveTimeout: 5000,
// _onPendingData: [Function: bound updateOutgoingData],
// _sent100: false,
// _expect_continue: false,
// statusCode: 404,
// __onFinished: [Function],
// [Symbol(kCapture)]: false,
// [Symbol(kNeedDrain)]: false,
// [Symbol(corked)]: 0,
// [Symbol(kOutHeaders)]: null
// },
// ctx: [Circular *1],
// response: {
// app: [Application],
// req: [IncomingMessage],
// res: [ServerResponse],
// ctx: [Circular *1],
// request: [Circular *2]
// },
// originalUrl: '/favicon.ico',
// ip: '::1',
// accept: Accepts { headers: [Object], negotiator: [Negotiator] }
// },
// response: <ref *3> {
// app: Application {
// _events: [Object: null prototype],
// _eventsCount: 1,
// _maxListeners: undefined,
// proxy: false,
// middleware: [Array],
// subdomainOffset: 2,
// env: 'development',
// context: {},
// request: {},
// response: {},
// [Symbol(kCapture)]: false
// },
// req: IncomingMessage {
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 1,
// _maxListeners: undefined,
// socket: [Socket],
// httpVersionMajor: 1,
// httpVersionMinor: 1,
// httpVersion: '1.1',
// complete: false,
// headers: [Object],
// rawHeaders: [Array],
// trailers: {},
// rawTrailers: [],
// aborted: false,
// upgrade: false,
// url: '/favicon.ico',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: [Socket],
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(RequestTimeout)]: undefined
// },
// res: ServerResponse {
// _events: [Object: null prototype],
// _eventsCount: 2,
// _maxListeners: undefined,
// outputData: [],
// outputSize: 0,
// writable: true,
// destroyed: false,
// _last: false,
// chunkedEncoding: false,
// shouldKeepAlive: true,
// _defaultKeepAlive: true,
// useChunkedEncodingByDefault: true,
// sendDate: true,
// _removedConnection: false,
// _removedContLen: false,
// _removedTE: false,
// _contentLength: null,
// _hasBody: true,
// _trailer: '',
// finished: false,
// _headerSent: false,
// socket: [Socket],
// _header: null,
// _keepAliveTimeout: 5000,
// _onPendingData: [Function: bound updateOutgoingData],
// _sent100: false,
// _expect_continue: false,
// statusCode: 404,
// __onFinished: [Function],
// [Symbol(kCapture)]: false,
// [Symbol(kNeedDrain)]: false,
// [Symbol(corked)]: 0,
// [Symbol(kOutHeaders)]: null
// },
// ctx: [Circular *1],
// request: <ref *2> {
// app: [Application],
// req: [IncomingMessage],
// res: [ServerResponse],
// ctx: [Circular *1],
// response: [Circular *3],
// originalUrl: '/favicon.ico',
// ip: '::1',
// accept: [Accepts]
// }
// },
// app: Application {
// _events: [Object: null prototype] { error: [Function: onerror] },
// _eventsCount: 1,
// _maxListeners: undefined,
// proxy: false,
// middleware: [ [Function: main] ],
// subdomainOffset: 2,
// env: 'development',
// context: {},
// request: {},
// response: {},
// [Symbol(kCapture)]: false
// },
// req: IncomingMessage {
// _readableState: ReadableState {
// objectMode: false,
// highWaterMark: 16384,
// buffer: BufferList { head: null, tail: null, length: 0 },
// length: 0,
// pipes: [],
// flowing: null,
// ended: false,
// endEmitted: false,
// reading: false,
// sync: true,
// needReadable: false,
// emittedReadable: false,
// readableListening: false,
// resumeScheduled: false,
// errorEmitted: false,
// emitClose: true,
// autoDestroy: false,
// destroyed: false,
// errored: null,
// closed: false,
// closeEmitted: false,
// defaultEncoding: 'utf8',
// awaitDrainWriters: null,
// multiAwaitDrain: false,
// readingMore: true,
// decoder: null,
// encoding: null,
// [Symbol(kPaused)]: null
// },
// _events: [Object: null prototype] { end: [Function: clearRequestTimeout] },
// _eventsCount: 1,
// _maxListeners: undefined,
// socket: Socket {
// connecting: false,
// _hadError: false,
// _parent: null,
// _host: null,
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 8,
// _maxListeners: undefined,
// _writableState: [WritableState],
// allowHalfOpen: true,
// _sockname: null,
// _pendingData: null,
// _pendingEncoding: '',
// server: [Server],
// _server: [Server],
// parser: [HTTPParser],
// on: [Function: socketListenerWrap],
// addListener: [Function: socketListenerWrap],
// prependListener: [Function: socketListenerWrap],
// _paused: false,
// _httpMessage: [ServerResponse],
// _peername: [Object],
// timeout: 0,
// [Symbol(async_id_symbol)]: 6,
// [Symbol(kHandle)]: [TCP],
// [Symbol(kSetNoDelay)]: false,
// [Symbol(lastWriteQueueSize)]: 0,
// [Symbol(timeout)]: Timeout {
//   _idleTimeout: -1,
//   _idlePrev: null,
//   _idleNext: null,
//   _idleStart: 15054,
//   _onTimeout: null,
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: true,
//   [Symbol(refed)]: false,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 19,
//   [Symbol(triggerId)]: 16
// },
// [Symbol(kBuffer)]: null,
// [Symbol(kBufferCb)]: null,
// [Symbol(kBufferGen)]: null,
// [Symbol(kCapture)]: false,
// [Symbol(kBytesRead)]: 0,
// [Symbol(kBytesWritten)]: 0,
// [Symbol(RequestTimeout)]: undefined
// },
// httpVersionMajor: 1,
// httpVersionMinor: 1,
// httpVersion: '1.1',
// complete: false,
// headers: {
// host: 'localhost:3015',
// connection: 'keep-alive',
// 'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
// 'sec-ch-ua-mobile': '?0',
// 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
// accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
// 'sec-fetch-site': 'same-origin',
// 'sec-fetch-mode': 'no-cors',
// 'sec-fetch-dest': 'image',
// referer: 'http://localhost:3015/',
// 'accept-encoding': 'gzip, deflate, br',
// 'accept-language': 'zh-CN,zh;q=0.9'
// },
// rawHeaders: [
// 'Host',
// 'localhost:3015',
// 'Connection',
// 'keep-alive',
// 'sec-ch-ua',
// '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
// 'sec-ch-ua-mobile',
// '?0',
// 'User-Agent',
// 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
// 'Accept',
// 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
// 'Sec-Fetch-Site',
// 'same-origin',
// 'Sec-Fetch-Mode',
// 'no-cors',
// 'Sec-Fetch-Dest',
// 'image',
// 'Referer',
// 'http://localhost:3015/',
// 'Accept-Encoding',
// 'gzip, deflate, br',
// 'Accept-Language',
// 'zh-CN,zh;q=0.9'
// ],
// trailers: {},
// rawTrailers: [],
// aborted: false,
// upgrade: false,
// url: '/favicon.ico',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: Socket {
// connecting: false,
// _hadError: false,
// _parent: null,
// _host: null,
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 8,
// _maxListeners: undefined,
// _writableState: [WritableState],
// allowHalfOpen: true,
// _sockname: null,
// _pendingData: null,
// _pendingEncoding: '',
// server: [Server],
// _server: [Server],
// parser: [HTTPParser],
// on: [Function: socketListenerWrap],
// addListener: [Function: socketListenerWrap],
// prependListener: [Function: socketListenerWrap],
// _paused: false,
// _httpMessage: [ServerResponse],
// _peername: [Object],
// timeout: 0,
// [Symbol(async_id_symbol)]: 6,
// [Symbol(kHandle)]: [TCP],
// [Symbol(kSetNoDelay)]: false,
// [Symbol(lastWriteQueueSize)]: 0,
// [Symbol(timeout)]: Timeout {
//   _idleTimeout: -1,
//   _idlePrev: null,
//   _idleNext: null,
//   _idleStart: 15054,
//   _onTimeout: null,
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: true,
//   [Symbol(refed)]: false,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 19,
//   [Symbol(triggerId)]: 16
// },
// [Symbol(kBuffer)]: null,
// [Symbol(kBufferCb)]: null,
// [Symbol(kBufferGen)]: null,
// [Symbol(kCapture)]: false,
// [Symbol(kBytesRead)]: 0,
// [Symbol(kBytesWritten)]: 0,
// [Symbol(RequestTimeout)]: undefined
// },
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(RequestTimeout)]: undefined
// },
// res: <ref *4> ServerResponse {
// _events: [Object: null prototype] {
// finish: [Array],
// end: [Function: onevent]
// },
// _eventsCount: 2,
// _maxListeners: undefined,
// outputData: [],
// outputSize: 0,
// writable: true,
// destroyed: false,
// _last: false,
// chunkedEncoding: false,
// shouldKeepAlive: true,
// _defaultKeepAlive: true,
// useChunkedEncodingByDefault: true,
// sendDate: true,
// _removedConnection: false,
// _removedContLen: false,
// _removedTE: false,
// _contentLength: null,
// _hasBody: true,
// _trailer: '',
// finished: false,
// _headerSent: false,
// socket: Socket {
// connecting: false,
// _hadError: false,
// _parent: null,
// _host: null,
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 8,
// _maxListeners: undefined,
// _writableState: [WritableState],
// allowHalfOpen: true,
// _sockname: null,
// _pendingData: null,
// _pendingEncoding: '',
// server: [Server],
// _server: [Server],
// parser: [HTTPParser],
// on: [Function: socketListenerWrap],
// addListener: [Function: socketListenerWrap],
// prependListener: [Function: socketListenerWrap],
// _paused: false,
// _httpMessage: [Circular *4],
// _peername: [Object],
// timeout: 0,
// [Symbol(async_id_symbol)]: 6,
// [Symbol(kHandle)]: [TCP],
// [Symbol(kSetNoDelay)]: false,
// [Symbol(lastWriteQueueSize)]: 0,
// [Symbol(timeout)]: Timeout {
//   _idleTimeout: -1,
//   _idlePrev: null,
//   _idleNext: null,
//   _idleStart: 15054,
//   _onTimeout: null,
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: true,
//   [Symbol(refed)]: false,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 19,
//   [Symbol(triggerId)]: 16
// },
// [Symbol(kBuffer)]: null,
// [Symbol(kBufferCb)]: null,
// [Symbol(kBufferGen)]: null,
// [Symbol(kCapture)]: false,
// [Symbol(kBytesRead)]: 0,
// [Symbol(kBytesWritten)]: 0,
// [Symbol(RequestTimeout)]: undefined
// },
// _header: null,
// _keepAliveTimeout: 5000,
// _onPendingData: [Function: bound updateOutgoingData],
// _sent100: false,
// _expect_continue: false,
// statusCode: 404,
// __onFinished: [Function: listener] { queue: [Array] },
// [Symbol(kCapture)]: false,
// [Symbol(kNeedDrain)]: false,
// [Symbol(corked)]: 0,
// [Symbol(kOutHeaders)]: null
// },
// originalUrl: '/favicon.ico',
// cookies: Cookies {
// secure: false,
// request: IncomingMessage {
// _readableState: [ReadableState],
// _events: [Object: null prototype],
// _eventsCount: 1,
// _maxListeners: undefined,
// socket: [Socket],
// httpVersionMajor: 1,
// httpVersionMinor: 1,
// httpVersion: '1.1',
// complete: false,
// headers: [Object],
// rawHeaders: [Array],
// trailers: {},
// rawTrailers: [],
// aborted: false,
// upgrade: false,
// url: '/favicon.ico',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: [Socket],
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(RequestTimeout)]: undefined
// },
// response: <ref *4> ServerResponse {
// _events: [Object: null prototype],
// _eventsCount: 2,
// _maxListeners: undefined,
// outputData: [],
// outputSize: 0,
// writable: true,
// destroyed: false,
// _last: false,
// chunkedEncoding: false,
// shouldKeepAlive: true,
// _defaultKeepAlive: true,
// useChunkedEncodingByDefault: true,
// sendDate: true,
// _removedConnection: false,
// _removedContLen: false,
// _removedTE: false,
// _contentLength: null,
// _hasBody: true,
// _trailer: '',
// finished: false,
// _headerSent: false,
// socket: [Socket],
// _header: null,
// _keepAliveTimeout: 5000,
// _onPendingData: [Function: bound updateOutgoingData],
// _sent100: false,
// _expect_continue: false,
// statusCode: 404,
// __onFinished: [Function],
// [Symbol(kCapture)]: false,
// [Symbol(kNeedDrain)]: false,
// [Symbol(corked)]: 0,
// [Symbol(kOutHeaders)]: null
// },
// keys: undefined
// },
// accept: Accepts {
// headers: {
// host: 'localhost:3015',
// connection: 'keep-alive',
// 'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
// 'sec-ch-ua-mobile': '?0',
// 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
// accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
// 'sec-fetch-site': 'same-origin',
// 'sec-fetch-mode': 'no-cors',
// 'sec-fetch-dest': 'image',
// referer: 'http://localhost:3015/',
// 'accept-encoding': 'gzip, deflate, br',
// 'accept-language': 'zh-CN,zh;q=0.9'
// },
// negotiator: Negotiator { request: [IncomingMessage] }
// },
// state: {}
// } [Function: next]
                                                         