import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            optional: true,
        },
        isFavourite: {
            type: Boolean,
            default: false,
      
        },
        contactType: {
            type: String,
            required: true,
            enum: ["work", "home", "personal"],
            default: "personal",
        },
    },
    {
        timestamps: true,
    },
);

export const ContactsCollection = model('contacts', contactsSchema);