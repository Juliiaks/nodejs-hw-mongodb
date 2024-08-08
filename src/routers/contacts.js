import { Router } from "express";
// import { getAllContacts, getContactById } from "../services/contacts";
import { getContactsController, getContactByIdController, createContactsController, deleteContactController, patchContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";


const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
  
router.post('/contacts', ctrlWrapper(createContactsController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

export default router;