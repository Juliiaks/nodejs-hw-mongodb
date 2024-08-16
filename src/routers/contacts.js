import { Router } from "express";
// import { getAllContacts, getContactById } from "../services/contacts";
import { getContactsController, getContactByIdController, createContactsController, deleteContactController, patchContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updatContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";


const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId',isValidId, ctrlWrapper(getContactByIdController));
  
router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactsController));

router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.patch('/contacts/:contactId',isValidId, validateBody(updatContactSchema), ctrlWrapper(patchContactController));

export default router;