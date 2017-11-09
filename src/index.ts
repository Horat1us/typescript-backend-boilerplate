import "./bootstrap";
import { app } from "./app";

export const port = process.env.PORT ? Number(process.env.PORT) : 3000;
export const server = app.listen(port, () => {
    console.log(`Listening http://127.0.0.1:${port}`);
});
