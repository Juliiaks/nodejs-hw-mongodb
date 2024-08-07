import express from "express";
import pino from 'pino-http';
import cors from 'cors';
import contactsRouter from './routers/contacts.js';
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import { env } from './utils/env.js';

// import { getAllContacts, getContactById } from "./services/contacts.js";

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });
    
  app.use(contactsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// const app = express();

// app.use((req, res, next) {
//     next()
// })

// app.get("/", (req, res) => {
//     res.send();
// });

//  app.use((req, res, next) => {
//     res.status(404).json({ message: 'Not found' });
//   });

// app.listen(3000, () => {
//     console.log("Server started on port 3000");
// });

//     app.get('/contacts', async (req, res) => {
//     const contacts = await getAllContacts();

//       res.status(200).json({
//         status: 200,
// message: "Successfully found contacts!",
//       data: contacts,
//     });
//   });

//   app.get('/contacts/:contactId', async (req, res, next) => {
//     const { contactId } = req.params;
//     const contact = await getContactById(contactId);   
    
// 	if (!contact) {
// 	  res.status(404).json({
// 		  message: 'Contact not found'
// 	  });
// 	  return;
// 	}

//     res.status(200).json({
//       status: 200,
//       message:`Successfully found contact with id ${contactId}!`,
//       data: contact,
//     });
//   });
