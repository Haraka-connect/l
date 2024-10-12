import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, phone, password } = req.body;

        // Connect to MongoDB
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();

        // Store user data in the database
        const result = await db.collection('users').insertOne({
            firstname,
            lastname,
            email,
            phone,
            password // Consider hashing this password before storing
        });

        client.close();
        res.status(201).json({ message: 'User created', userId: result.insertedId });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}