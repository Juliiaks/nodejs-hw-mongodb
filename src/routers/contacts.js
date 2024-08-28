import { Router } from "express";
// import { getAllContacts, getContactById } from "../services/contacts";
import { getContactsController, getContactByIdController, createContactsController, deleteContactController, patchContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updatContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";
import { authenticate } from '../middlewares/authenticate.js';



const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));
  
router.post('/register', validateBody(createContactSchema), ctrlWrapper(createContactsController));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.patch('/:contactId', isValidId, validateBody(updatContactSchema), ctrlWrapper(patchContactController));

export default router;