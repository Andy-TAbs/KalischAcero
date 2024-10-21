import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI_COT) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI_COT"');
}

const uri = process.env.MONGODB_URI_COT;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientCot?: MongoClient;
  };

  if (!globalWithMongo._mongoClientCot) {
    globalWithMongo._mongoClientCot = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClientCot;
} else {
  client = new MongoClient(uri, options);
}

async function connectToCotDatabase() {
  try {
    await client.connect(); // Intentar conectar al cliente
    return client.db(); // Devuelve la base de datos
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Failed to connect to the database');
  }
}

export { connectToCotDatabase };
