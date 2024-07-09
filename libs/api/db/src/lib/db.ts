import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            (process.env.DB_URI as string).replace(
                '<PASSWORD>',
                process.env.DB_PASSWORD as string
            ), {}
        );
        console.log(`MongoDB connected\nDB name: ${conn.connection.name}`);
        mongoose.connection.on('connected', () =>
            console.log('mongoose connected')
        );
        mongoose.connection.on('open', () => console.log('mongoose open'));
        mongoose.connection.on('disconnected', () =>
            console.log('mongoose disconnected')
        );
        mongoose.connection.on('reconnected', () =>
            console.log('mongoose reconnected')
        );
        mongoose.connection.on('disconnecting', () =>
            console.log('mongoose disconnecting')
        );
        mongoose.connection.on('close', () => console.log('mongoose close'));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
};
