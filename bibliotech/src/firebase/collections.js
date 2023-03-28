import { db } from "./config";
import { collection } from "firebase/firestore";

                                            // argumentos: o banco e a colecao criada no banco firestore
export const livrosCollection = collection(db, "livros");