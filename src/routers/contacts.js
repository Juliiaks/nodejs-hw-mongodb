import { Router } from "express";
// import { getAllContacts, getContactById } from "../services/contacts";
import { getContactsController, getContactByIdController } from "../controllers/contacts";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

  router.get('/contacts/:contactId',ctrlWrapper(getContactByIdController));

export default router;