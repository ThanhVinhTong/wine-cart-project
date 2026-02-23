import mongoose from "mongoose";
import Product from "@/models/Product";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI");
}

declare global {
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
        indexesEnsured: boolean;
      }
    | undefined;
}

const cached = global.mongooseCache || {
  conn: null,
  promise: null,
  indexesEnsured: false,
};

global.mongooseCache = cached;

export async function initMongoose() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;

  if (!cached.indexesEnsured) {
    await Product.createIndexes();
    cached.indexesEnsured = true;
  }

  return cached.conn;
}