import { Router } from "express";
import { getAllUsuarios } from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/usuarios", getAllUsuarios);

export default router;