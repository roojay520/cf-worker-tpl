# cf-worker-tpl

## cloudflare workers 基础模板

1. 更改 `wrangler.toml` 文件下的 `zone_id` 和 `account_id`
2. 设置 Github 环境变量: 在 Settings -> Secrets 添加 `CF_API_KEY` 和 `CF_EMAIL` 变量

actions 文档: [wrangler-action](https://github.com/cloudflare/wrangler-action)
workers 文档: [cloudflare workers](https://developers.cloudflare.com/workers/)

## 请求示例

接口描述: 获取一个随机数

请求地址: `https://tpl.fe.workers.dev`

请求方法: get

请求参数: 无

响应示例:

```json
// https://tpl.fe.workers.dev
{
  "num": 222
}
```
