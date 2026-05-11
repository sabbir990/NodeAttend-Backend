import app from "./app.js";
import dotenv from 'dotenv';
dotenv.config();
let server;
server = async () => {
    app.listen(process.env.PORT, () => {
        console.log(`Our Server is running on PORT ${process.env.PORT}`);
    });
};
server();
//# sourceMappingURL=server.js.map