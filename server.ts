import { Application, REDIRECT_BACK } from "https://deno.land/x/oak/mod.ts"
import router from "./routes.ts"
const port = 5000

const app = new Application()

app.use(async (ctx, next) => {
    if (ctx.request.headers.get("x-access-token")) {
        console.log(ctx.request.headers.get("x-access-token"))
    } else {
        console.log("Token not present...redirecting to login.")
        ctx.throw(401)
    }

    await next()
})

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Server running on port: ${port}`)
await app.listen({ port })
