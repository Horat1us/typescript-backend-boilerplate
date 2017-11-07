import * as mongoose from "mongoose";

(mongoose as any).Promise = global.Promise;