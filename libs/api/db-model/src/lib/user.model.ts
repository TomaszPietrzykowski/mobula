import mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
            default: '/assets/profile.jpg',
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        // workspaces: {
        //     type: [mongoose.Schema.Types.ObjectId],
        //     ref: 'Workspace',
        //     required: true,
        //     default: [],
        // },
        // activeWorkspace: {
        //     type: mongoose.Schema.Types.ObjectId || String,
        //     ref: 'Workspace',
        //     required: false,
        // },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods['matchPassword'] = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this['password']);
};

export const User = mongoose.model('User', userSchema);
